'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Mail, Phone, X } from 'lucide-react'
import { site } from '@/data/site'

type EstimateModalContextValue = {
  open: () => void
  close: () => void
}

const EstimateModalContext = createContext<EstimateModalContextValue | null>(
  null,
)

/**
 * Shared trigger for the "Get an Estimate" call-to-action. Any button across
 * the site can call `open()` to launch the same modal instance instead of
 * each place implementing its own popup.
 */
export function useEstimateModal() {
  const context = useContext(EstimateModalContext)
  if (!context) {
    throw new Error(
      'useEstimateModal must be used within an EstimateModalProvider',
    )
  }
  return context
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export function EstimateModalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const open = useCallback(() => {
    triggerRef.current = document.activeElement as HTMLElement
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  // Focus trap + Escape-to-close + scroll lock while the dialog is open.
  useEffect(() => {
    if (!isOpen) return

    const dialog = dialogRef.current
    const initialFocusable =
      dialog?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    initialFocusable?.[0]?.focus()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }

      if (event.key !== 'Tab' || !dialog) return

      const focusableEls = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      )
      if (focusableEls.length === 0) return

      const first = focusableEls[0]
      const last = focusableEls[focusableEls.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      triggerRef.current?.focus()
    }
  }, [isOpen, close])

  return (
    <EstimateModalContext.Provider value={{ open, close }}>
      {children}
      {isOpen && <EstimateModal dialogRef={dialogRef} onClose={close} />}
    </EstimateModalContext.Provider>
  )
}

function EstimateModal({
  dialogRef,
  onClose,
}: {
  dialogRef: React.RefObject<HTMLDivElement | null>
  onClose: () => void
}) {
  const subject = encodeURIComponent('Free Estimate Request')
  const body = encodeURIComponent(
    "Hi Savannah Level, I'd like to request a free estimate.\n\nName:\nAddress:\nService needed:\nBest time to reach me:",
  )

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in-0"
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimate-modal-heading"
        className="relative w-full max-w-sm rounded-3xl border border-border bg-card p-6 text-center shadow-2xl motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95 motion-safe:duration-200 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <h2
          id="estimate-modal-heading"
          className="font-heading text-2xl font-black tracking-tight text-foreground"
        >
          Get a Free Estimate
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {"Reach out however's easiest \u2014 we'll get back to you fast with a no-obligation quote."}
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={`mailto:${site.email}?subject=${subject}&body=${body}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full brand-gradient-btn font-heading text-sm font-bold text-white shadow-lg shadow-navy-900/25 transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          >
            <Mail className="size-[1.1em]" aria-hidden="true" />
            Email Us
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange font-heading text-sm font-bold text-orange-foreground shadow-lg shadow-orange/25 transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
          >
            <Phone className="size-[1.1em]" aria-hidden="true" />
            Call Us
          </a>
        </div>

        <p className="mt-5 text-xs text-muted-foreground">
          {`Or reach us directly at ${site.phone} \u2014 happy to talk it through.`}
        </p>
      </div>
    </div>
  )
}
