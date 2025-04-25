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

export function TaskModal() {
  return (
    <Dialog>
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
        <div>
          <form
            id='task-form'
            className='flex flex-col gap-4'
            action={async (formData: FormData) => {
              'use server';
              const name = formData.get('task-name');
              const description = formData.get('task-description');
              const importance = formData.get('task-importance');

              console.log({ name, description, importance });
            }}
          >
            <div className='space-y-2'>
              <Label htmlFor='task-name'>Nome da Tarefa</Label>
              <Input
                type='text'
                name='task-name'
                id='task-name'
                placeholder='Digite o nome da tarefa'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='task-description'>
                Descrição{' '}
                <span className='text-muted-foreground text-xs'>
                  &#40;máximo 200 caracteres&#41;
                </span>
              </Label>
              <Textarea
                id='task-description'
                name='task-description'
                maxLength={200}
                placeholder='Digite a descrição da tarefa'
                className='field-sizing-fixed resize-none'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='task-importance'>Importancia</Label>
              <Select name='task-importance'>
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
          </form>
        </div>
        <DialogFooter>
          <Button form='task-form'>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
