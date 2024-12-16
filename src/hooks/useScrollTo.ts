"use client";

import { useLenis } from "@/lib/lenis-context";
import { useCallback } from "react";

interface ScrollOptions {
  offset?: number;
  duration?: number;
  immediate?: boolean;
}

export function useScrollTo() {
  const { lenis } = useLenis();

  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: ScrollOptions) => {
      if (lenis) {
        lenis.scrollTo(target, options);
      }
    },
    [lenis]
  );

  return { scrollTo };
}
