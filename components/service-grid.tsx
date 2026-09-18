import { services } from '@/data/services'
import { ServiceCard } from '@/components/service-card'
import { cn } from '@/lib/utils'

export function ServiceGrid({
  variant = 'detailed',
  className,
}: {
  variant?: 'selector' | 'detailed'
  className?: string
}) {
  return (
    <div
      className={cn(
        variant === 'selector'
          ? 'grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2'
          : 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} variant={variant} />
      ))}
    </div>
  )
}
