import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ orderReference: string }> },
) {
  const { orderReference } = await params;

  const paymentForm = await prisma.wayForPayPaymentForm.findUnique({
    where: { orderReference },
  });

  if (!paymentForm) {
    return new NextResponse('Платіж не знайдено', { status: 404 });
  }

  const fields = paymentForm.fields as Record<string, any>;

  // Будуємо HTML з формою, яка одразу (onload) відправляється на WayForPay
  const inputs = Object.entries(fields)
    .flatMap(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((v: string) => `<input type="hidden" name="${key}[]" value="${escapeHtml(String(v))}">`);
      }
      return [`<input type="hidden" name="${key}" value="${escapeHtml(String(value))}">`];
    })
    .join('\n');

  const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Перенаправлення на оплату...</title></head>
<body onload="document.forms[0].submit()">
  <p>Перенаправляємо на сторінку оплати...</p>
  <form method="POST" action="https://secure.wayforpay.com/pay">
    ${inputs}
  </form>
</body></html>`;

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=UTF-8' },
  });
}