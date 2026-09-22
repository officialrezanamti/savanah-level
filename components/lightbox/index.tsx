"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { LightboxDialog } from "./dialog";
import type { LightboxProps } from "./types";
import { useLightbox } from "./use-lightbox";

// Connect the lightbox hook to its shared trigger content and portal dialog.
export function Lightbox({ images, children }: LightboxProps) {
  const [mounted, setMounted] = useState(false);
  const lightbox = useLightbox(images);

  // Wait until the browser mounts before accessing document for the portal.
  useEffect(() => setMounted(true), []);

  const dialog = lightbox.activeImage ? (
    <LightboxDialog
      activeImage={lightbox.activeImage}
      images={images}
      neighborSrcs={lightbox.neighborSrcs}
      close={lightbox.close}
      move={lightbox.move}
      closeButtonRef={lightbox.closeButtonRef}
      dialogRef={lightbox.dialogRef}
    />
  ) : null;

  return (
    <>
      {children(lightbox.open)}
      {mounted && dialog ? createPortal(dialog, document.body) : null}
    </>
  );
}
