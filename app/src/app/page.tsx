import { redirect } from 'next/navigation';

export default function Home() {
  // Server-side redirect to the marketing page
  redirect('/(marketing)');
}
