"use client";

import { useEffect, useRef } from "react";

interface Props {
  onSelect: (address: string) => void;
  placeholder?: string;
}

export const AddressInput: React.FC<Props> = ({ onSelect, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const initAutocomplete = () => {
      if (!inputRef.current || !window.google) return;

      const autocomplete =
        new window.google.maps.places.PlaceAutocompleteElement({
          includedRegionCodes: ["ua"],
        });

      inputRef.current.appendChild(autocomplete);
      
      autocomplete.addEventListener("gmp-placeselect", async (event: any) => {
        const place = event.place;
        await place.fetchFields({ fields: ["formattedAddress"] });
        onSelect(place.formattedAddress);
      });
    };

    if (window.google) {
      initAutocomplete();
    } else {
      // чекаємо поки скрипт завантажиться
      window.addEventListener("load", initAutocomplete);
      return () => window.removeEventListener("load", initAutocomplete);
    }
  }, []);

  return (
    <input
      ref={inputRef}
      placeholder={placeholder || "Введіть адресу"}
      className="w-full border rounded-lg px-3 py-2 outline-none focus:border-primary"
    />
  );
};
