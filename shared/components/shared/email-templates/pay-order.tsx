import React from "react";

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export function PayOrderTemplate({ orderId, totalAmount, paymentUrl }: Props) {
  return (
    <div>
      <h1>Замовлення №{orderId}</h1>
      <p>
        Оплатити замовлення на суму <b>{totalAmount} грн.</b> Перейдіть за
        <a href={paymentUrl}>цим посиланням</a> для оплати замовлення
      </p>
    </div>
  );
}
