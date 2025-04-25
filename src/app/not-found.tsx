import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex h-[calc(100dvh-68px)] flex-col items-center justify-center gap-4'>
      <h2 className='text-3xl font-bold'>Página não encontrada</h2>
      <p className='text-muted-foreground'>
        Desculpe, a página que você está procurando não existe.
      </p>
      <Link className={buttonVariants({ variant: 'default' })} href='/'>
        Voltar
      </Link>
    </main>
  );
}
