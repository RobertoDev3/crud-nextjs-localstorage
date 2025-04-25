import { TaskCard } from '@/components/common/task-card';
import { TaskModal } from '@/components/common/task-modal';

export default function Home() {
  return (
    <main className='mx-auto flex max-w-7xl flex-col gap-4 p-4'>
      <section className='bg-accent flex justify-end rounded-md p-4'>
        <TaskModal />
      </section>
      <section className='flex flex-wrap justify-center gap-4'>
        {Array.from({ length: 10 }, (_, index) => (
          <TaskCard key={index} />
        ))}
      </section>
    </main>
  );
}
