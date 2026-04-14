import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Feather } from '@expo/vector-icons';
import React from 'react';

export function CurrentPlanCard() {
  return (
    <Box className="bg-slate-900 rounded-2xl p-6 shadow-lg mb-8">
      <HStack className="justify-between items-start mb-4">
        <VStack>
          <Text className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">
            Tu plan actual
          </Text>
          <Heading size="xl" className="text-white">Sanitek Premium</Heading>
        </VStack>
        <Box className="bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
          <Text className="text-blue-400 text-xs font-bold uppercase">Activo</Text>
        </Box>
      </HStack>

      <Text className="text-slate-300 text-sm mb-6">
        Renovación automática el <Text className="text-white font-bold">15 Abril 2024</Text>.
      </Text>

      <VStack space="sm" className="mb-8">
        <HStack className="items-center">
          <Feather name={"check-circle" as any} size={16} color="#34d399" style={{ marginRight: 8 }} />
          <Text className="text-slate-200 text-sm">Soporte premium 24/7</Text>
        </HStack>
        <HStack className="items-center">
          <Feather name={"check-circle" as any} size={16} color="#34d399" style={{ marginRight: 8 }} />
          <Text className="text-slate-200 text-sm">Reportes ilimitados y exportación PDF</Text>
        </HStack>
        <HStack className="items-center">
          <Feather name={"check-circle" as any} size={16} color="#34d399" style={{ marginRight: 8 }} />
          <Text className="text-slate-200 text-sm">Predicciones avanzadas a 30 días</Text>
        </HStack>
      </VStack>

      <Button //boton de cancelar plan 
        variant="outline" 
        className="border-slate-600 rounded-lg w-full h-12 active:bg-slate-800 hover:bg-slate-800 transition-colors"
      >
        <ButtonText className="text-sm font-semibold text-slate-300">Cancelar Plan</ButtonText>
      </Button>
    </Box>
  );
}