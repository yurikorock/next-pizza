import { Resend } from "resend";
import { PayOrderTemplate } from "../components/shared/email-templates/pay-order";

export const sendEmail = async (to: string, subject: string, params?: any) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to,
    subject,
    react: PayOrderTemplate(params),
  });

  if (error) {
    throw error;
  }

  return data;
};
