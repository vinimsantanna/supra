import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SUPRA | Marketing para Médicos e Clínicas',
  description: 'SUPRA — Marketing estratégico para médicos, clínicas e negócios da saúde. Estratégia, execução e performance com foco em crescimento real.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
