import {
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Input, Textarea } from "@/shared/components/ui";
import { Package, Percent, Truck } from "lucide-react";

export default function CheckoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className="mt-10">
      <Title
        text="Оформлення замовлення"
        className="font-extrabold mb-8 text-[36px]"
      />

      <div className="flex gap-10">
        {/* {Left side} */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Кошик">13135325</WhiteBlock>

          <WhiteBlock title="2. Персональні дані">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Ім`я"
              />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Прізвище"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Адреса доставки">
            <div className="flex flex-col gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Вкажіть адресу"
              />
              <Textarea
                rows={5}
                className="text-base"
                placeholder="Коментарій до замовлення"
              />
            </div>
          </WhiteBlock>
        </div>

        {/* {Right side} */}
        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Всього:</span>
              <span className="text-[34px] font-extrabold">3500 grn</span>
            </div>

            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-300" />
                  Вартість товарів:
                </div>
              }
              value="3500 grn"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-300" />
                  Податок:
                </div>
              }
              value="3500 grn"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-300" />
                  Доставка:
                </div>
              }
              value="3500 grn"
            />
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
