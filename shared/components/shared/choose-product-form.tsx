import { cn } from "@/shared/lib/utils";
import React from "react";

import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

//форма вибору продукта

export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  price,
  loading,
  onSubmit,
  className,
}) => {
  // const textDetails = "30см традиційне тісто 30";
  // const totalPrice = 350;

  return (
    <div className={cn("modal flex flex-1", className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        {/* <p className="text-gray-400">{textDetails}</p> */}

        <Button
          loading={loading}
          onClick={()=> onSubmit?.()}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавити в кошик за {price} грн
        </Button>
      </div>
    </div>
  );
};
