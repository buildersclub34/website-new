import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  highlightedText?: string
  badgeText?: string
  centered?: boolean
  align?: 'left' | 'center' | 'right'
  titleClassName?: string
}

export function SectionHeader({
  title,
  description,
  highlightedText,
  badgeText,
  centered = false,
  align = 'left',
  className,
  titleClassName,
  ...props
}: SectionHeaderProps) {
  const alignment = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={cn("space-y-4 w-full", centered && "text-center", className)} {...props}>
      {badgeText && (
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
          {badgeText}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold tracking-tight",
        alignment[align],
        titleClassName
      )}>
        {highlightedText ? (
          <>
            {title} <span className="text-primary">{highlightedText}</span>
          </>
        ) : title}
      </h2>
      {description && (
        <p className={cn(
          "text-muted-foreground text-base md:text-lg max-w-3xl",
          alignment[align],
          centered ? "mx-auto" : ""
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
