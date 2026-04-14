import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

// Importamos nuestra nueva Molécula
import { PaymentMethodCard } from '@/components/MetodoPago_Tarjeta/MetodoPago_Tarjeta';

export function PaymentMethodsSection() {
  return (
    <VStack className="mb-8">
      <Heading size="lg" className="text-slate-800 mb-4">Métodos de Pago</Heading>
      <PaymentMethodCard // mock de tarjeta de credito 
        brand="visa" 
        last4="4242" 
        expiry="08/27" 
        onEdit={() => console.log("Editar tarjeta")}
        onDelete={() => console.log("Eliminar tarjeta")}
      />

      {/* Botón Añadir Nuevo */}
      <Button variant="outline" className="border-dashed border-2 border-slate-300 rounded-xl h-14 bg-slate-50 mt-2 hover:bg-slate-100 transition-colors">
        <AntDesign name={"plus" as any} size={16} color="#64748b" style={{ marginRight: 8 }} />
        <ButtonText className="text-slate-600 font-medium">Añadir nuevo método de pago</ButtonText>
      </Button>
    </VStack>
  );
}