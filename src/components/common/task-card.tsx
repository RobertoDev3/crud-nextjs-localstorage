import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function TaskCard({
  name,
  description,
  importance,
}: {
  name: string;
  description: string;
  importance: string;
}) {
  return (
    <Card className='h-80 w-72 rounded-md'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle>{name}</CardTitle>
        <Badge>{importance}</Badge>
      </CardHeader>
      <CardContent className='flex-1'>{description}</CardContent>
      <CardFooter className='justify-end gap-4'>
        <Button>Editar</Button>
        <Button variant='destructive'>Deletar</Button>
      </CardFooter>
    </Card>
  );
}
