declare module 'input-otp' {
  import * as React from 'react';

  interface InputOTPContextValue {
    slots: Array<{
      char: string;
      hasFakeCaret: boolean;
      isActive: boolean;
    }>;
  }

  interface OTPInputProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string;
    onChange?: (value: string) => void;
    maxLength?: number;
    containerClassName?: string;
    children?: React.ReactNode;
  }

  export const OTPInput: React.ForwardRefExoticComponent<
    OTPInputProps & React.RefAttributes<HTMLDivElement>
  >;

  export const OTPInputContext: React.Context<InputOTPContextValue>;
}
