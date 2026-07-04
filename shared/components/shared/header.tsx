'use client'

import React from "react";
import { cn } from "@/shared/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowBigRight, ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { useSession, signIn } from "next-auth/react";
import { ProfileButton } from "./profile-button";

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
  


  return (
    <header className={cn("border-b", className)}>
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
        <ProfileButton/>

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
