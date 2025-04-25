'use client';

import { useEffect, useState } from 'react';
import { CreateTaskButton } from '@/components/common/create-task-button';
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
        <CreateTaskButton
          onSave={(newTask: TaskProps) => {
            const updatedTasks = [...tasks, newTask];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            setTasks(updatedTasks);
          }}
        />
      </section>
      <section className='flex flex-wrap justify-center gap-4'>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
            importance={task.importance}
            onDelete={() => {
              const updatedTasks = tasks.filter(t => t.id !== task.id);
              localStorage.setItem('tasks', JSON.stringify(updatedTasks));
              setTasks(updatedTasks);
            }}
          />
        ))}
      </section>
    </main>
  );
}
