import Link from 'next/link';
import { ThemeButton } from '../common/theme-button';

export function Header() {
  return (
    <header className='bg-secondary'>
      <div className='text-foreground mx-auto flex max-w-7xl items-center justify-between p-4'>
        <Link href='/' className='text-2xl font-semibold'>
          Crud Next.js Localstorage
        </Link>
        <ThemeButton />
      </div>
    </header>
  );
}
