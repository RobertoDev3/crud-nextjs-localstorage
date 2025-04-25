import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Header } from '@/components/layout/header';

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
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
