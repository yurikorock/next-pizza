"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CheckoutSidebar, Container, Title } from "@/shared/components/shared";

import { useCart } from "@/shared/hooks";

import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
} from "@/shared/components/shared/checkout";

const VAT = 15;
const DELIVERY_PRICE = 250;

export default function CheckoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { totalAmount, items, loading, updateItemQuantity, removeCartItem } =
    useCart();

  const form = useForm({
    // resolver: zodResolver(),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onCLickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus",
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title
        text="Оформлення замовлення"
        className="font-extrabold mb-8 text-[36px]"
      />

      <div className="flex gap-10">
        {/* {Left side} */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <CheckoutCart
            onCLickCountButton={onCLickCountButton}
            removeCartItem={removeCartItem}
            items={items}
          />

          <CheckoutPersonalForm />

          <CheckoutAddressForm />
        </div>

        {/* {Right side} */}
        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}
