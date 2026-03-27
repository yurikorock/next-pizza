'use client'

import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckBoxFiltersGroup } from "./checkbox-filters-group";
import { useFIlterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useFIlterIngredients();

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  return (
    <div className={className}>
      <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />

      {/* Верхні чекбокси */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можна зібрати" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* Фільтр цін */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Ціна від і до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      {/* Фільтр інгредієнти */}
      <CheckBoxFiltersGroup
        title="Інгредієнти"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
      />
    </div>
  );
};
