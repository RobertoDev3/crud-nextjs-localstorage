import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='p-4'>
      <section className='bg-accent flex justify-end rounded-md p-4'>
        <Button>Criar Tarefa</Button>
      </section>
      <section></section>
    </main>
  );
}
