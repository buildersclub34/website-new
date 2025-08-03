import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Builder Profiles | Builders Club',
  description: 'Meet the brilliant minds behind successful startups in our community.',
};

export default function BuildersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
