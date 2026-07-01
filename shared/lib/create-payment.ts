import crypto from "crypto";
import { prisma } from "@/prisma/prisma-client";

interface CreatePaymentParams {
  orderId: number;
  amount: number;
  description: string;
  clientEmail?: string;
}

function calcSignature(fields: (string | number)[], secretKey: string): string {
  return crypto
    .createHmac("md5", secretKey)
    .update(fields.join(";"), "utf8")
    .digest("hex");
}

export async function createPayment({
  orderId,
  amount,
  description,
  clientEmail,
}: CreatePaymentParams) {
  const merchantAccount = process.env.WFP_MERCHANT_ACCOUNT as string;
  const merchantSecretKey = process.env.WFP_SECRET_KEY as string;
  const merchantDomain = process.env.WFP_DOMAIN as string;

  

  const orderReference = `ORDER-${orderId}-${Date.now()}`;
  const orderDate = Math.floor(Date.now() / 1000);
  const currency = "UAH";

  // WayForPay вимагає список товарів — використовуємо description як назву одного товару
  const productName = [description];
  const productCount = ["1"];
  const productPrice = [String(amount)];

  const merchantSignature = calcSignature(
    [
      merchantAccount,
      merchantDomain,
      orderReference,
      orderDate,
      amount,
      currency,
      ...productName,
      ...productCount,
      ...productPrice,
    ],
    merchantSecretKey,
  );



  const fields = {
    merchantAccount,
    merchantDomainName: merchantDomain,
    merchantSignature,
    orderReference,
    orderDate,
    amount,
    currency,
    productName,
    productCount,
    productPrice,
    returnUrl: process.env.WFP_RETURN_URL,
    serviceUrl: process.env.WFP_CALLBACK_URL,
    ...(clientEmail ? { clientEmail } : {}),
  };
 
  // Зберігаємо поля форми в БД — прив'язуємо до замовлення
  await prisma.wayForPayPaymentForm.create({
    data: {
      orderId,
      orderReference,
      fields,
    },
  });

  // Повертаємо посилання — користувач перейде за ним і потрапить на оплату
  const paymentLink = `${process.env.APP_BASE_URL}/api/payment/redirect/${orderReference}`;
  return { paymentLink, orderReference };
}
