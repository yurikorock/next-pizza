"use client";

import React, { Suspense, useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

function HeaderNotifications() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    let toastMessage = "";

    if (searchParams.has("paid")) {
      toastMessage = "Замовлення успішно оплачене! Деталі відправлені на пошту";
    }

    if (searchParams.has("verified")) {
      toastMessage = "Пошта успішно підтверджена!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, { duration: 3000 });
      }, 1000);
    }
  }, []);

  return null; // нічого не рендерить, тільки логіка
}

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <header className={cn("border-b", className)}>
      <Suspense fallback={null}>
        <HeaderNotifications />
      </Suspense>

      <Container className="flex items-center justify-between py-8">
        {/* Ліва частина */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                куди вже смачніше
              </p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1 ">
            <SearchInput />
          </div>
        )}

        {/* Права частина */}
        <div className="flex items-center gap-2">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
