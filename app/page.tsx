import {
  Categories,
  Container,
  Filters,
  SortPopup,
  Title,
  TopBar,
} from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProuductsGroupList } from "@/components/shared/products-group-list";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Усі піцци" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фільтрація */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товарів */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProuductsGroupList
                title="Піца"
                items={[
                  {
                    id: 1,
                    name: "Чізбургер-піца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чізбургер-піца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чізбургер-піца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чізбургер-піца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чізбургер-піца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Чізбургер-піца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProuductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Чізбургер-піца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чізбургер-піца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чізбургер-піца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чізбургер-піца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чізбургер-піца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Чізбургер-піца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
