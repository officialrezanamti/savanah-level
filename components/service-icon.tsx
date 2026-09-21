import {
  Armchair,
  Blinds,
  BrickWall,
  Cctv,
  Frame,
  LampCeiling,
  Tv,
  WashingMachine,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const icons: Record<string, LucideIcon> = {
  Tv,
  WashingMachine,
  Armchair,
  Cctv,
  Wrench,
  Blinds,
  BrickWall,
  LampCeiling
}

export function ServiceIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = icons[name] ?? Wrench
  return <Icon className={cn('size-6', className)} aria-hidden="true" />
}
