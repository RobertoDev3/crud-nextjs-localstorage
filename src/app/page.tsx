'use client';

import { useEffect, useState } from 'react';
import { TaskFormButton } from '@/components/common/task-form-button';
import { TaskCard } from '@/components/common/task-card';
import { buttonVariants } from '@/components/ui/button';

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
      <section className='bg-accent flex items-center justify-between rounded-md p-4'>
        <p
          className={buttonVariants({
            variant: 'outline',
            className:
              'hover:bg-background hover:dark:bg-input/30 cursor-none !shadow-none',
          })}
        >
          Tarefas: {tasks.length}
        </p>
        <TaskFormButton
          buttonName='Criar Tarefa'
          title='Criar nova tarefa'
          description='Crie suas tarefas e organize seu trabalho de forma eficiente.'
          onSave={(newTask: TaskProps) => {
            const updatedTasks = [...tasks, newTask];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            setTasks(updatedTasks);
          }}
        />
      </section>
      <section className='grid grid-cols-1 gap-4 self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
            importance={task.importance}
            onEdit={updatedTask => {
              const updatedTasks = tasks.map(task =>
                task.id === updatedTask.id ? updatedTask : task,
              );
              localStorage.setItem('tasks', JSON.stringify(updatedTasks));
              setTasks(updatedTasks);
            }}
            onDelete={(id: string) => {
              const updatedTasks = tasks.filter(t => t.id !== id);
              localStorage.setItem('tasks', JSON.stringify(updatedTasks));
              setTasks(updatedTasks);
            }}
          />
        ))}
      </section>
    </main>
  );
}
