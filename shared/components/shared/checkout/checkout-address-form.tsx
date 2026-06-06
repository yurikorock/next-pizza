import React, { useState } from "react";
import { WhiteBlock } from "../white-block";
import { AddressInput } from "../address-input";
import { FormInput, FormTextarea } from "../form";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorText } from "../error-text";

interface Props {
  className?: string;
  
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  const [address, setAddress] = useState("");
  const { control } = useFormContext();

  return (
    <WhiteBlock title="3. Адреса доставки" className={className}>
      <div className="flex flex-col gap-5">
        <FormInput
          name="address"
          className="text-base"
          placeholder="Вкажіть адресу"
        />
        <Controller
          control={control}
          name="address"
          render={({ fieldState }) => (
            <>
              {/* <AddressInput onSelect={(address) => setAddress(address)} /> */}
              {fieldState.error?.message && (
                <ErrorText text={fieldState.error.message} />
              )}
            </>
          )}
        />

        <FormTextarea
          name="comment"
          rows={5}
          className="text-base"
          placeholder="Коментарій до замовлення"
        />
      </div>
    </WhiteBlock>
  );
};
