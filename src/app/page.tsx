'use client';

import { useEffect, useState } from 'react';
import { TaskModal } from '@/components/common/task-modal';
import { TaskCard } from '@/components/common/task-card';

export type TaskProps = {
  id: string;
  name: string;
  description: string;
  importance: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(stored);
  }, []);

  return (
    <main className='mx-auto flex max-w-7xl flex-col gap-4 p-4'>
      <section className='bg-accent flex justify-end rounded-md p-4'>
        <TaskModal
          onSave={(newTask: TaskProps) => {
            const updated = [...tasks, newTask];
            localStorage.setItem('tasks', JSON.stringify(updated));
            setTasks(updated);
          }}
        />
      </section>
      <section className='flex flex-wrap justify-center gap-4'>
        {tasks.map((task, i) => (
          <TaskCard
            key={i}
            name={task.name}
            description={task.description}
            importance={task.importance}
          />
        ))}
      </section>
    </main>
  );
}
