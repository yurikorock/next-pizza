"use server";

import { prisma } from "@/prisma/prisma-client";
import { CheckoutFormValues } from "@/shared/constants/checkout-form-schema";
import { OrderStatus } from "@prisma/client";
import { email } from "zod";

export async function createOrder(data: CheckoutFormValues) {
  console.log(data);

  const token = "123";

  await prisma.order.create({
    data: {
      token,
      totalAmount: 1500,
      status: OrderStatus.PENDING,
      items: [],
      fullName: data.firstName + " " + data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      comment: data.comment,
    },
  });

  return 'https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwibj-Siuv2UAxU5QlUIHffTGcYQPAgI'
}
