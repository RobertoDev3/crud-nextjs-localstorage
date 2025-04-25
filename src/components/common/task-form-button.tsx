'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { v4 as uuidv4 } from 'uuid';
import { TaskProps } from '@/app/page';
import { toast } from 'sonner';

type TaskButtonProps = {
  buttonName: string;
  title: string;
  description: string;
  onSave: (task: TaskProps) => void;
  task?: TaskProps;
};

export function TaskFormButton({
  onSave,
  buttonName,
  description,
  title,
  task,
}: TaskButtonProps) {
  const [openModal, setOpenModal] = useState(false);

  const [taskName, setTaskName] = useState(task?.name || '');
  const [taskDescription, setTaskDescription] = useState(
    task?.description || '',
  );
  const [taskImportance, setTaskImportance] = useState(task?.importance || '');

  useEffect(() => {
    if (task) {
      setTaskName(task.name);
      setTaskDescription(task.description);
      setTaskImportance(task.importance);
    } else {
      setTaskName('');
      setTaskDescription('');
      setTaskImportance('');
    }
  }, [task, openModal]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!taskName.trim() || !taskDescription.trim() || !taskImportance.trim()) {
      return toast.warning('Preencha todos os campos!', {
        description: 'Todos os campos são obrigatórios.',
        className: '!bg-red-300 !border-none',
      });
    }

    const updatedTask = {
      id: task?.id || uuidv4(),
      name: taskName,
      description: taskDescription,
      importance: taskImportance,
    };

    onSave(updatedTask);
    setOpenModal(false);
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>
        <Button>{buttonName}</Button>
      </DialogTrigger>
      <DialogContent className='!max-w-sm'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='space-y-2'>
            <Label htmlFor='task-name'>
              Nome da Tarefa
              <span className='text-muted-foreground text-xs'>
                &#40;máximo 32 caracteres&#41;
              </span>
            </Label>
            <Input
              type='text'
              id='task-name'
              placeholder='Nome da tarefa'
              value={taskName || ''}
              maxLength={32}
              onChange={e => {
                const value = e.target.value;
                setTaskName(value);
              }}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='task-description'>
              Descrição{' '}
              <span className='text-muted-foreground text-xs'>
                &#40;máximo 300 caracteres&#41;
              </span>
            </Label>
            <Textarea
              id='task-description'
              maxLength={300}
              placeholder='Descreva a tarefa...'
              className='h-36 resize-none wrap-anywhere'
              value={taskDescription || ''}
              onChange={e => {
                const value = e.target.value;
                setTaskDescription(value);
              }}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='task-importance'>Importância</Label>
            <Select
              value={taskImportance || ''}
              onValueChange={setTaskImportance}
            >
              <SelectTrigger id='task-importance' className='w-full'>
                <SelectValue placeholder='Selecione a importância' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='low'>Baixa</SelectItem>
                <SelectItem value='medium'>Média</SelectItem>
                <SelectItem value='high'>Alta</SelectItem>
                <SelectItem value='urgent'>Urgente</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button
              type='button'
              variant='secondary'
              onClick={() => setOpenModal(false)}
            >
              Cancelar
            </Button>
            <Button type='submit'>Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
