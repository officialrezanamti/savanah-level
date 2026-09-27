"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/data/services";

export function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-green/30 bg-green/10 px-6 py-12 text-center">
        <CheckCircle2 className="size-10 text-green" aria-hidden="true" />
        <p className="font-heading text-lg font-bold text-foreground">
          Thanks — your request is in!
        </p>
        <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
          We&apos;ll reach out shortly to confirm your free estimate. Need a
          hand sooner? Give us a call anytime.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setError(null);

        // Estimate submission is intentionally disabled while the contact workflow is being developed.
        /*
        setIsSubmitting(true)

        const formData = new FormData(event.currentTarget)
        const payload = {
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          service: formData.get('service'),
          details: formData.get('details'),
        }

        try {
          const response = await fetch('/api/estimate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })

          const result = await response.json().catch(() => ({}))

          if (!response.ok) {
            throw new Error(result.error ?? 'Something went wrong. Please try again.')
          }

          setSubmitted(true)
        } catch (submitError) {
          setError(
            submitError instanceof Error
              ? submitError.message
              : 'Something went wrong. Please try again.',
          )
        } finally {
          setIsSubmitting(false)
        }
        */
      }}
      className="flex min-w-0 flex-col gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jesus Christ"
            className="form-input w-full min-w-0 rounded-lg border p-2"
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(912) 000-0000"
            className="form-input w-full min-w-0 rounded-lg border p-2"
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          className="form-input w-full min-w-0 rounded-lg border p-2"
        />
      </Field>

      <Field label="What do you need help with?" htmlFor="service">
        <select
          id="service"
          name="service"
          required
          className="form-input w-full min-w-0 rounded-lg border p-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
      </Field>

      <Field label="Project details" htmlFor="details">
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Tell us a little about the job, and your ZIP code in the Savannah area."
          className="form-input w-full min-w-0 resize-none rounded-lg border p-2"
        />
      </Field>

      {error ? (
        <p role="alert" className="text-sm font-medium text-destructive">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 inline-flex h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full bg-orange px-6 font-heading text-base font-bold text-orange-foreground transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <Loader2 className="size-5 animate-spin" aria-hidden="true" />
        ) : null}
        {isSubmitting ? "Sending..." : "Request My Free Estimate"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        No obligation. We typically respond the same day.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="font-heading text-sm font-semibold text-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
