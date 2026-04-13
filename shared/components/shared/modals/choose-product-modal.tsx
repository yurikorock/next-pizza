"use client";

import { Dialog } from "@/shared/components/ui";
import { DialogContent, DialogTitle } from "@/shared/components/ui/dialog";
import React from "react";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../choose-product-form";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { Root as VisuallyHidden } from "@radix-ui/react-visually-hidden";




interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  const isPizzaForm = Boolean(product.items[0].pizzaType);
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent aria-describedby=""
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className,
        )}
      >
        <VisuallyHidden>
    <DialogTitle>{product.name}</DialogTitle>
  </VisuallyHidden>
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
