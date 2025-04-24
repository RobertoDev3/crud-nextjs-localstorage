import { ThemeButton } from '../common/theme-button';

export function Nav() {
  return (
    <nav className='bg-secondary text-foreground flex items-center justify-between p-4'>
      <h2 className='text-2xl font-semibold'>Crud Next.js Localstorage</h2>
      <ThemeButton />
    </nav>
  );
}
