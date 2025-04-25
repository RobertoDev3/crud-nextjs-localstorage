import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ConfirmModal } from './confirm-modal';

type TaskCardProps = {
  id: string;
  name: string;
  description: string;
  importance: string;
  onDelete: (id: string) => void;
};

export function TaskCard({
  id,
  name,
  description,
  importance,
  onDelete,
}: TaskCardProps) {
  return (
    <Card className='h-80 w-72 rounded-md'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle>{name}</CardTitle>
        <Badge>{importance}</Badge>
      </CardHeader>
      <CardContent className='flex-1'>{description}</CardContent>
      <CardFooter className='justify-end gap-4'>
        <Button>Editar</Button>
        <ConfirmModal
          variant='destructive'
          nameButton='Deletar'
          title='Deletar Tarefa'
          description='Tem certeza que deseja deletar esta tarefa? Esta ação não pode ser desfeita.'
          onConfirm={() => onDelete(id)}
        />
      </CardFooter>
    </Card>
  );
}
