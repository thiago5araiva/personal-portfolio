import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { base, ButtonType, CTAProps } from './types'

export default function ActionButton({
    icon,
    label,
    right,
    variant,
    onClick,
}: CTAProps) {
    return (
        <Button className={cn(base, ButtonType[variant])}>
            <div className="flex items-center justify-around gap-2 py-2 px-4 w-44 h-10">
                <span className={!right ? 'order-1' : 'order-2'}>{label}</span>
                <span className={right ? 'order-1' : 'order-2'}>{icon}</span>
            </div>
        </Button>
    )
}
