"use client";

import React from "react";

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
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/shared/lib";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent
        className="flex flex-col justify-between pb-0 bg-[#F4F1EE]"
        aria-describedby=""
      >
        <SheetHeader>
          <SheetTitle>
            В кошику <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="+mx-6 mt-5 overflow-auto flex-1">
          <div className="mb-2">
            <CartDrawerItem
              id={1}
              imageUrl={
                "https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif"
              }
              details={getCartItemDetails(2, 30, [
                {
                  name: "chiken",
                  id: 0,
                  price: 0,
                  imageUrl: "",
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                {
                  name: "cheese",
                  id: 0,
                  price: 0,
                  imageUrl: "",
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
              ])}
              name={"Chorizo fresh"}
              price={419}
              quantity={1}
            />
          </div>

          <div className="mb-2">
            <CartDrawerItem
              id={1}
              imageUrl={
                "https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif"
              }
              details={getCartItemDetails(2, 30, [
                {
                  name: "chiken",
                  id: 0,
                  price: 0,
                  imageUrl: "",
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                {
                  name: "cheese",
                  id: 0,
                  price: 0,
                  imageUrl: "",
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
              ])}
              name={"Chorizo fresh"}
              price={419}
              quantity={1}
            />
          </div>
          
        </div>

        <SheetFooter className="+mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Всього
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">500grn</span>
            </div>

            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Оформити замовлення
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
