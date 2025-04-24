import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <main className='flex flex-col gap-4 p-4'>
      <section className='bg-accent flex justify-end rounded-md p-4'>
        <Button>Criar Tarefa</Button>
      </section>
      <section>
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
      </section>
    </main>
  );
}
