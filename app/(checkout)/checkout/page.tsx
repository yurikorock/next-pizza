"use client";

import {
  CheckoutItem,
  CheckoutItemDetails,
  CheckoutSidebar,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Input, Textarea } from "@/shared/components/ui";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { useCart } from "@/shared/hooks";
import { getCartItemDetails } from "@/shared/lib";


const VAT = 15;
const DELIVERY_PRICE = 250;

export default function CheckoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { totalAmount, items, loading, updateItemQuantity, removeCartItem } =
    useCart();

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
          <WhiteBlock title="1. Кошик">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={getCartItemDetails(
                    item.ingredients,
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize,
                  )}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  disabled={item.disabled}
                  onCLickCountButton={(type) =>
                    onCLickCountButton(item.id, item.quantity, type)
                  }
                  onCLickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Персональні дані">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Ім`я"
              />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Прізвище"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Адреса доставки">
            <div className="flex flex-col gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Вкажіть адресу"
              />
              <Textarea
                rows={5}
                className="text-base"
                placeholder="Коментарій до замовлення"
              />
            </div>
          </WhiteBlock>
        </div>

        {/* {Right side} */}
        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount}/>
        </div>
      </div>
    </Container>
  );
}
