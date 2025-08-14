'use client';

import * as React from 'react';
import { useToast } from '../../hooks/use-toast';
import {
  Toast as ToastPrimitive,
  ToastClose,
  ToastDescription,
  ToastProvider as ToastProviderPrimitive,
  ToastTitle,
  ToastViewport,
  type ToastProps as ToastPrimitiveProps,
} from '@/components/ui/toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProviderPrimitive>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <ToastPrimitive key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && (
              <ToastDescription>{description}</ToastDescription>
            )}
          </div>
          {action}
          <ToastClose />
        </ToastPrimitive>
      ))}
      <ToastViewport />
    </ToastProviderPrimitive>
  );
}
