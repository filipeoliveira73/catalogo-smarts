// src/app/layout.tsx
// src/app/layout.tsx
'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import GlobalStyles from '@/styles/GlobalStyles';
import StyledComponentsRegistry from '@/lib/registry';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}