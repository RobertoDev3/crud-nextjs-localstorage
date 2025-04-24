import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Nav } from '@/components/layout/nav';

export const metadata: Metadata = {
  title: 'Crud Next.js Localstorage',
  description: 'Crud Next.js Localstorage',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
