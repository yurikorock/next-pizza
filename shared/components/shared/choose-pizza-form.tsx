import { cn } from "@/shared/lib/utils";
import React, { useState } from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { PizzaImage } from "./pizza-image";
import { GroupVariants } from "./group-variants";
import { PizzaSize, pizzaSizes, PizzaType } from "@/shared/constants/pizza";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  onClickAdd,
  className,
}) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const textDetails = "30см традиційне тісто 30";
  const totalPrice = 350;

  return (
    <div className={cn(className, "modal flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <GroupVariants
          items={pizzaSizes}
          value={String(size)}
          onClick={(value) => setSize(Number(value) as PizzaSize)}
        />

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавити в кошик за {totalPrice} грн
        </Button>
      </div>
    </div>
  );
};
