import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gowtham Jaganathan | Cloud, Automation & Software Developer',
  description: 'Portfolio of Gowtham Jaganathan, Cloud, Automation & Software Developer, showcasing secure AWS projects, React applications, and backend API work.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth bg-midnight-950">
      <body className="bg-midnight-950 text-slate-200 antialiased font-body selection:bg-aurora-teal/25 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
