import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

interface Props { // dto de tarjetas de credito
  brand: "visa" | "mastercard"; 
  last4: string;
  expiry: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function PaymentMethodCard({ brand, last4, expiry, onEdit, onDelete }: Props) {
  const numeroCensurado = `**** **** **** ${last4}`; //mostrar solo los ultimos 4 digitos tarejta

  return (
    <Box className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex-row items-center justify-between mb-3">
      <HStack className="items-center">
        <Box className="bg-slate-100 p-2 rounded-lg mr-4 w-12 items-center justify-center">
          <FontAwesome5 
            name={brand === 'visa' ? "cc-visa" as any : "cc-mastercard" as any} 
            size={24} 
            color="#1e293b" 
          />
        </Box>
        <VStack>
          <Text className="text-slate-800 font-bold tracking-widest">{numeroCensurado}</Text>
          <Text className="text-slate-500 text-xs">Expira {expiry}</Text>
        </VStack>
      </HStack>
      
      <HStack space="lg" className="items-center"> 
        <Button variant="link" className="px-3 py-2" onPress={onEdit}> 
          <ButtonText className="text-blue-600 text-base font-bold hover:text-blue-800 transition-colors">
            Editar
          </ButtonText> 
        </Button>
        <Button variant="link" className="px-3 py-2" onPress={onDelete}>
          <ButtonText className="text-red-500 text-base font-bold hover:text-red-700 transition-colors">
            Eliminar
          </ButtonText>
        </Button>
      </HStack>
    </Box>
  );
}