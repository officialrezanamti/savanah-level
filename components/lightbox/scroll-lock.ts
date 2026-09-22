// Shared count prevents multiple lightboxes from fighting over body scrolling.
let scrollLockCount = 0;

// Prevent the page behind the lightbox from scrolling while any lightbox is open.
export function lockBodyScroll() {
  if (scrollLockCount === 0) {
    document.body.dataset.prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  scrollLockCount++;
}

// Restore page scrolling after the final open lightbox has closed.
export function unlockBodyScroll() {
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount === 0) {
    document.body.style.overflow = document.body.dataset.prevOverflow ?? "";
    delete document.body.dataset.prevOverflow;
  }
}
