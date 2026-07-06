import './globals.css';

export const metadata = {
  title: 'Blueprint Exteriors LLC | Roofing, Siding & Exterior Remodeling NJ',
  description: 'Blueprint Exteriors LLC provides roofing, siding, windows, doors, gutters, decks, masonry, chimneys, and carpentry across Somerset County and Northern New Jersey.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
