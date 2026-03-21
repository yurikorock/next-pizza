import {
  Categories,
  Container,
  Filters,
  SortPopup,
  Title,
  TopBar,
} from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Усі піцци" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фільтрація */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товарів */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard id={0} name='SuperPizza' price={500} imageUrl={'https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif'}/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
