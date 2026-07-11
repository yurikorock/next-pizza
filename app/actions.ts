"use server";

import { prisma } from "@/prisma/prisma-client";
import { PayOrderTemplate } from "@/shared/components/shared";
import { CheckoutFormValues } from "@/shared/constants/checkout-form-schema";
import { sendEmail } from "@/shared/lib";
import { createPayment } from "@/shared/lib/create-payment";
import { getUserSession } from "@/shared/lib/get-user-session";
import { OrderStatus, Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { cookies } from "next/headers";


export async function createOrder(data: CheckoutFormValues) {
  console.log(data);
  let paymentLink = "";
  try {
    const cookieStore = cookies();
    const cartToken = (await cookieStore).get("cartToken")?.value;

    if (!cartToken) {
      throw new Error("Cart token not found");
    }

    //знаходимо кошик по токену
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    if (!userCart) {
      throw new Error("Cart not found");
    }

    if (userCart?.totalAmount === 0) {
      throw new Error("Cart is empty");
    }

    // створюємо замовлення
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + " " + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    //очищуємо кошик
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    //посилання на оплату

    const { paymentLink: link } = await createPayment({
      orderId: order.id,
      amount: order.totalAmount,
      description: `Замовлення №${order.id}`,
      clientEmail: data.email,
    });

    paymentLink = link;

    await sendEmail(
      data.email,
      "Next Pizza / Оплатіть замовлення №" + order.id,
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl: paymentLink,
      }),
    );
  } catch (error) {
    console.log("[CreateOrder] Server error", error);
  }

  return paymentLink;
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error('Користувача не знайдено');
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
      },
    });
  } catch (err) {
    console.log('Error [UPDATE_USER]', err);
    throw err;
  }
}