import React from "react";

import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { cn } from "@/shared/lib/utils";
import { CountButton } from "./count-button";
import { Trash2Icon, X } from "lucide-react";
import { CartItemDetailsImage } from "./cart-item-details/cart-item-details-image";
import * as CartItemDetails from './cart-item-details';

interface Props extends CartItemProps {
  onCLickCountButton?: (type: "plus" | "minus") => void;
  onCLickRemove?: () => void;
  className?: string;
}

export const CheckoutItem: React.FC<Props> = ({
  name,
  price,
  imageUrl,
  quantity,
  details,
  className,
  disabled,
  onCLickCountButton,
  onCLickRemove,
}) => {
  return (
    <div className={cn("flex items-center justify-between", { "opacity-50 pointer-events-none": disabled }, className)}>
      <div className="flex items-center gap-5 flex-1">
        <CartItemDetails.Image src={imageUrl} />
        <CartItemDetails.Info name={name} details={details} />
      </div>

       <CartItemDetails.Price value={price} />

       <div className="flex items-center gap-5 ml-20">
        <CartItemDetails.CountButton onClick={onCLickCountButton} value={quantity} />
        <button type="button" onClick={onCLickRemove}>
          <X className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
        </button>
      </div>
    </div>
  );
};
