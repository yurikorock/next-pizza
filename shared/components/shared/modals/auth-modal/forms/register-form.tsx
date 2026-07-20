import { FormProvider, useForm } from "react-hook-form";
import { formLoginSchema, formRegisterSchema, TFormLoginValues, TFormRegisterValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Title } from "../../../title";
import { FormInput } from "../../..";
import { Button } from "@/shared/components/ui";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { email } from "zod";
import { registerUser } from "@/app/actions";

interface Props {
  onClose?: VoidFunction;
}

export const RegisterForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      fullName: '',
      password: "",
      confirmPassword: ''
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      })

      toast.success('Реєстрація успішна! Підтвердіть свою пошту', {
        icon: '✅',
      });

      onClose?.();
    } catch (error) {
      
      toast.error("Невірний e-mail чи пароль", {
        icon: "❌",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        

        <FormInput name="email" label="E-Mail" required />
         <FormInput name="fullName" label="Повне ім`я" required />
        <FormInput name="password" label="Пароль" type="password" required />
         <FormInput name="confirmPassword" label="Підтверіть пароль" type="password" required />

        <Button
          disabled={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Зареєструватись
        </Button>
      </form>
    </FormProvider>
  );
};
