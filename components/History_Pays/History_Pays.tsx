import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Feather } from '@expo/vector-icons';
import React from 'react';

interface Pago { //dto del historial de pagos
  id: number;
  fecha: string;
  descripcion: string;
  monto: string;
  estatus: string;
}

interface Props {
  pagos: Pago[];
}

export function PaymentHistoryTable({ pagos }: Props) { //componente para mostrar el historial de pagos 
  return (
    <Box className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {pagos.map((pago, index) => (
        <React.Fragment key={pago.id}>
          <HStack className="p-4 items-center justify-between">
            <VStack className="flex-1">
              <Text className="font-semibold text-slate-800 text-sm">{pago.descripcion}</Text>
              <Text className="text-slate-500 text-xs mt-1">{pago.fecha}</Text>
            </VStack>
            <HStack space="lg" className="items-center">
              <Text className="font-bold text-slate-900">{pago.monto}</Text>
              <Box className="bg-green-100 px-2 py-1 rounded">
                <Text className="text-green-700 text-[10px] font-bold uppercase tracking-wide">
                  {pago.estatus}
                </Text>
              </Box>
              <Button variant="link" className="p-0">
                <Feather name={"download" as any} size={18} color="#64748b" />
              </Button>
            </HStack>
          </HStack>
          {index < pagos.length - 1 && <Divider className="bg-slate-100" />}
        </React.Fragment>
      ))}
    </Box>
  );
}