import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function TaskCard() {
  return (
    <Card className='h-80 w-72'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle>Nome da tarefa</CardTitle>
        <Badge>Prioridade</Badge>
      </CardHeader>
      <CardContent className='flex-1'>
        Oque foi escrito no campo de texto
      </CardContent>
      <CardFooter className='justify-end gap-4'>
        <Button>Editar</Button>
        <Button variant='destructive'>Deletar</Button>
      </CardFooter>
    </Card>
  );
}
