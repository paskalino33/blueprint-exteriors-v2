import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blueprint Exteriors LLC | Exterior Remodeling Contractor in Northern New Jersey',
  description:
    'Blueprint Exteriors LLC provides roofing, siding, windows, doors, decks, gutters, chimneys, masonry, and exterior remodeling throughout Northern New Jersey.',
  openGraph: {
    title: 'Blueprint Exteriors LLC',
    description: 'Northern New Jersey exterior remodeling experts.',
    images: ['/images/projects/hero-house.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
