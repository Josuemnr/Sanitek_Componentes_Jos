import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  isVisible: boolean;
  mensaje?: string;
}

export function PantallaCarga({ isVisible, mensaje = "Cargando..." }: Props) {
  if (!isVisible) return null;

  return (
    <View 
      style={StyleSheet.absoluteFillObject} 
      className="bg-slate-950/60 items-center justify-center z-50 backdrop-blur-sm"
    >
      <VStack space="md" className="bg-white p-8 rounded-2xl items-center shadow-2xl border border-slate-200">
        {/* El Spinner animado de Gluestack */}
        <Spinner size="large" color="#3b82f6" />
        <Text className="text-slate-700 font-semibold text-base mt-2">
          {mensaje}
        </Text>
      </VStack>
    </View>
  );
}