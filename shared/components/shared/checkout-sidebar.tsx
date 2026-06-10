import React from "react";
import { WhiteBlock } from "./white-block";
import { CheckoutItemDetails } from "./checkout-item-details";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button, Skeleton } from "../ui";
import { cn } from "@/shared/lib/utils";

const VAT = 15;
const DELIVERY_PRICE = 250;

interface Props {
  totalAmount: number;
  loading?: boolean;

  className?: string;
}

export const CheckoutSidebar: React.FC<Props> = ({
  totalAmount,
  loading,
  className,
}) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

  return (
    <WhiteBlock className={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Всього:</span>
        {loading ? (
          <Skeleton className="w-48 h-11" />
        ) : (
          <span className="h-11 text-[34px] font-extrabold">{totalPrice}</span>
        )}
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={18} className="mr-2 text-gray-300" />
            Вартість кошика:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="w-16 h-6 rounded-[6px]" />
          ) : (
            `${totalAmount} грн`
          )
        }
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={18} className="mr-2 text-gray-300" />
            Податок:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="w-16 h-6 rounded-[6px]" />
          ) : (
            `${vatPrice} грн`
          )
        }
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={18} className="mr-2 text-gray-300" />
            Доставка:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="w-16 h-6 rounded-[6px]" />
          ) : (
            `${DELIVERY_PRICE} грн`
          )
        }
      />
      <Button
        loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Перейти до оплати
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
