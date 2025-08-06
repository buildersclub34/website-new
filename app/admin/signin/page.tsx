'use client';

import { Suspense, useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Spinner } from '@/components/Icons';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type FormData = {
  email: string;
  password: string;
};

// Component that uses useSearchParams
function SignInForm() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get('callbackUrl') || '/admin/dashboard';
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  // Prevent scrolling on the body when this component mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push(callbackUrl);
    }
  }, [status, router, callbackUrl]);

  const onSubmit = async (data: FormData) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl,
      });

      if (result?.error) {
        console.error('Sign in failed:', result.error);
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  if (status === 'loading' || status === 'authenticated') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4 overflow-hidden">
      <div className="w-full max-w-md mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-16">
            <Image 
              src="/images/builders-club-logo.png" 
              alt="The Builders Club" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Card */}
        <div className={cn(
          'bg-black border-2 border-yellow-500 rounded-xl p-8 shadow-neo-yellow',
          'transform transition-all duration-300',
          isHovered ? 'translate-y-[-2px]' : ''
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
              Admin Portal
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Secure access to the admin dashboard
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={cn(
                      'block w-full px-4 py-3 bg-gray-900 border-2 border-yellow-500/30 rounded-lg',
                      'text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent',
                      'transition-all duration-200',
                      errors.email ? 'border-red-500' : 'focus:border-yellow-500',
                      'hover:border-yellow-500/50'
                    )}
                    placeholder="your@email.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    className={cn(
                      'block w-full px-4 py-3 bg-gray-900 border-2 border-yellow-500/30 rounded-lg',
                      'text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent',
                      'transition-all duration-200',
                      errors.password ? 'border-red-500' : 'focus:border-yellow-500',
                      'hover:border-yellow-500/50'
                    )}
                    placeholder="••••••••"
                    {...register('password', { 
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters'
                      }
                    })}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      className="text-gray-400 hover:text-yellow-400 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.88 9.88l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'w-full flex justify-center items-center py-3 px-4 border-2 border-yellow-500 rounded-lg',
                  'text-sm font-bold text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500',
                  'transform transition-all duration-200',
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-0.5 active:translate-y-0',
                  'shadow-neo-yellow hover:shadow-neo-yellow-hover'
                )}
              >
                {isSubmitting ? (
                  <>
                    <Spinner className="w-5 h-5 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} The Builders Club. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function AdminSignInPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <Spinner className="w-8 h-8 animate-spin" />
      </div>
    }>
      <SignInForm />
    </Suspense>
  );
}
