import {
  Categories,
  Container,
  Filters,
  SortPopup,
  Title,
  TopBar,
} from "@/components/shared";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Усі піцци" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          {/* Фільтрація */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товарів */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список товарів</div>
          </div>
        </div>
      </Container>
    </>
  );
}
