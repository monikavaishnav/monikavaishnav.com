"use client";

import { useEffect } from "react";

// Next's router doesn't scroll to a fragment when only the hash changes on an
// already-loaded route, and browsers won't repeat the native fragment-scroll
// on a same-document click either — so nav's Work/About/Contact links land
// here needing a manual scroll.
export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return null;
}
