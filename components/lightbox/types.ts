import type { RefObject, ReactNode } from "react";
import type { GalleryItem } from "@/data/gallery";

export type LightboxProps = {
  images: GalleryItem[];
  children: (open: (index: number, trigger: HTMLElement) => void) => ReactNode;
};

export type LightboxDialogProps = {
  activeImage: GalleryItem;
  images: GalleryItem[];
  neighborSrcs: string[];
  close: () => void;
  move: (direction: 1 | -1) => void;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
  dialogRef: RefObject<HTMLDivElement | null>;
};
