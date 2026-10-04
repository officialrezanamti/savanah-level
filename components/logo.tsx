import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-10 place-items-center rounded-full bg-white shadow-sm ring-1 ring-navy/10">
        <Image
          width={40}
          height={40}
          alt="Savannah Level"
          src="/images/logo/Logo-Savannah-Level.png"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-base font-black uppercase tracking-tight",
            tone === "light" ? "text-white" : "text-foreground",
          )}
        >
          Savannah Level
        </span>
        <span
          className={cn(
            "mt-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
            tone === "light" ? "text-white/60" : "text-muted-foreground",
          )}
        >
          Home Services
        </span>
      </span>
    </Link>
  );
}
