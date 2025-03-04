"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/app/_components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg md:max-w-sm md:left-4 md:bottom-4 md:rounded-lg">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-medium">Utilizamos cookies</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="h-6 w-6"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Ao clicar em &quot;aceitar&quot;, concorda com o armazenamento de
        cookies no seu dispositivo para fins funcionais e analíticos.
      </p>
      <div className="flex gap-2">
        <Button className="w-full" onClick={() => setIsVisible(false)}>
          Aceitar
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsVisible(false)}
        >
          Declínio
        </Button>
      </div>
    </div>
  );
}
