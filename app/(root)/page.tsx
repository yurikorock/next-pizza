import { Container, Filters, Title, TopBar } from "@/shared/components/shared";

import { ProuductsGroupList } from "@/shared/components/shared/products-group-list";
import { prisma } from "@/prisma/prisma-client";
import { Suspense } from "react";
import { findPizzas, GetSearchParams } from "@/shared/lib/find-pizza";

export default async function Home({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {


  const params = await searchParams;
  const categories = await findPizzas(params);

  

  return (
    <>
      <Container className="mt-10">
        <Title text="Усі піцци" size="lg" className="font-extrabold" />
      </Container>

      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0,
        )}
      />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фільтрація */}
          <div className="w-[250px]">
            <Suspense fallback={null}>
              <Filters />
            </Suspense>
          </div>

          {/* Список товарів */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProuductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
