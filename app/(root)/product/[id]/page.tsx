import { Container, Title } from "@/components/shared";
import { GroupVariants } from "@/components/shared/group-variants";
import { PizzaImage } from "@/components/shared/pizza-image";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} size={30} />
        <div className="w-[490px] bg-[#faf9f9] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">textDetails</p>

          <GroupVariants
          selectedValue="2"
            items={[
              {
                name: "Маленька",
                value: "1",
              },
               {
                name: "Середня",
                value: "2",
              },
               {
                name: "Велика",
                value: "3",
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
