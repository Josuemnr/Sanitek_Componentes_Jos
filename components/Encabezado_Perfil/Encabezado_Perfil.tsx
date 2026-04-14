import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Feather } from '@expo/vector-icons';
import React from 'react';

export function Encabezado_Perfil() {
  return (
    <Box className="bg-blue-50/80 rounded-2xl p-6 border border-blue-100 mb-6 flex-row items-center">
      {/* Avatar con botón de cámara */}
      <Box className="relative mr-6">
        <Box className="w-24 h-24 rounded-full bg-slate-300 border-4 border-white shadow-sm overflow-hidden items-center justify-center">
          <Feather name={"user" as any} size={40} color="#94a3b8" />
        </Box>
        <Box className="absolute bottom-0 right-0 bg-blue-600 w-8 h-8 rounded-full items-center justify-center border-2 border-white shadow-sm">
          <Feather name={"camera" as any} size={14} color="white" />
        </Box>
      </Box>

      <VStack space="xs" className="flex-1">
        <Heading size="xl" className="text-slate-800">Josué Monroy Larios</Heading>
        <Text className="text-slate-500 text-sm mb-2">josue.monroy@sanitek.com</Text>
        <Button variant="solid" className="bg-white border border-slate-200 h-9 px-4 self-start rounded-lg shadow-sm hover:bg-slate-50">
          <ButtonText className="text-blue-600 text-xs font-semibold">Cambiar imagen</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}