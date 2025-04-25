'use client';

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
import { VariantProps } from 'class-variance-authority';
import { useState } from 'react';

type ConfirmModalProps = {
  nameButton: string;
  title: string;
  description: string;
  onConfirm: () => void;
  variant?: VariantProps<typeof Button>['variant'];
};

export function ConfirmModal({
  nameButton,
  title,
  description,
  onConfirm,
  variant = 'default',
}: ConfirmModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant}>{nameButton}</Button>
      </DialogTrigger>
      <DialogContent className='!max-w-sm'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant='secondary' onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                onConfirm();
              }, 100);
            }}
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
