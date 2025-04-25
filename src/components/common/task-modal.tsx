'use client';

import { useState } from 'react';
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

export function TaskModal({ onSave }: { onSave: (task: TaskProps) => void }) {
  const [open, setOpen] = useState(false);
  const [importance, setImportance] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem('task-name') as HTMLInputElement)
      .value;
    const description = (
      form.elements.namedItem('task-description') as HTMLTextAreaElement
    ).value;

    const newTask = {
      id: uuidv4(),
      name,
      description,
      importance,
    };

    onSave(newTask);
    setOpen(false);
    form.reset();
    setImportance('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Criar Tarefa</Button>
      </DialogTrigger>
      <DialogContent className='!max-w-sm'>
        <DialogHeader>
          <DialogTitle>Criar Tarefa</DialogTitle>
          <DialogDescription>
            Crie suas tarefas e organize seu trabalho de forma eficiente.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='space-y-2'>
            <Label htmlFor='task-name'>Nome da Tarefa</Label>
            <Input type='text' name='task-name' id='task-name' required />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='task-description'>
              Descrição{' '}
              <span className='text-muted-foreground text-xs'>
                (máximo 200 caracteres)
              </span>
            </Label>
            <Textarea
              id='task-description'
              name='task-description'
              maxLength={200}
              required
              className='resize-none'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='task-importance'>Importância</Label>
            <Select onValueChange={setImportance}>
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
            <Button type='submit'>Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
