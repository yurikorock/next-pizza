"use client";

import React, { useEffect } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/shared/lib";
import { useCartStore } from "@/shared/store";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { updateItemQuantity } from "@/shared/services/cart";
import Image from "next/image";
import { Title } from "./title";
import { DialogTitle } from "../ui/dialog";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  const totalAmount = useCartStore((state) => state.totalAmount);
  const items = useCartStore((state) => state.items);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  const updateQuantity = useCartStore((state) => state.updateItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const onCLickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus",
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent
        className="flex flex-col justify-between pb-0 bg-[#F4F1EE]"
        aria-describedby=""
      >
        <div  className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
        {totalAmount > 0 && (
          <SheetHeader>
            <SheetTitle>
              В кошику{" "}
              <span className="font-bold">{items.length} товар(ів)</span>
            </SheetTitle>
          </SheetHeader>
        )}

        {!totalAmount && (
          <div className=" flex flex-col items-center justify-center w-72 mx-auto">
            <SheetHeader className=" flex flex-col items-center justify-center w-72 mx-auto">
              <Image
                src="/assets/images/empty-box.png"
                alt="Empty cart"
                width={120}
                height={120}
              />
              <SheetTitle className="text-center font-bold my-2">
                Кошик пустий
              </SheetTitle>
              <p className="text-center text-neutral-500 mb-5">
                Додайте хоча б один товар, щоб зробити замовлення
              </p>
              <SheetClose asChild>
                <Button className="w-56 h-12 text-base" size="sm">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Повернутись назад
                </Button>
              </SheetClose>
            </SheetHeader>
          </div>
        )}

        {totalAmount > 0 && (
          <>
            <div className="+mx-6 mt-5 overflow-auto flex-1">
              {items.map((item) => (
                <div className="mb-2" key={item.id}>
                  <CartDrawerItem
                    id={item.id}
                    imageUrl={item.imageUrl}
                    details={
                      item.pizzaSize && item.pizzaType
                        ? getCartItemDetails(
                            item.ingredients,
                            item.pizzaType as PizzaType,
                            item.pizzaSize as PizzaSize,
                          )
                        : ""
                    }
                    disabled={item.disabled}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onCLickCountButton={(type) =>
                      onCLickCountButton(item.id, item.quantity, type)
                    }
                    onCLickRemove={() => removeCartItem(item.id)}
                  />
                </div>
              ))}
            </div>

            <SheetFooter className="+mx-6 bg-white p-8">
              <div className="w-full">
                <div className="flex mb-4">
                  <span className="flex flex-1 text-lg text-neutral-500">
                    Всього
                    <div className="flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2" />
                  </span>
                  <span className="font-bold text-lg">{totalAmount} грн</span>
                </div>

                <Link href="/cart">
                  <Button type="submit" className="w-full h-12 text-base">
                    Оформити замовлення
                    <ArrowRight className="w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          </>
        )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
