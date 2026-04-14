import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import React from 'react';
import { ScrollView, View } from 'react-native';

// Importamos los Organismos
import { Datos_Personales } from '@/components/Datos_Personales/Datos_Personales';
import { Encabezado_Perfil } from '@/components/Encabezado_Perfil/Encabezado_Perfil';
import { SecurityForm } from '@/components/SecurityForm/SecurityForm';

export default function PerfilScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-50" contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
      
      {/* Título de la página */}
      <View className="mb-8 border-b border-slate-200 pb-4">
        <Heading size="xl" className="text-slate-900">Configuración de Perfil</Heading>
      </View>

      {/* 1. Organismo: Cabecera */}
      <Encabezado_Perfil />

      {/* 2. Organismo: Datos Personales */}
      <Datos_Personales />

      {/* 3. Organismo: Seguridad */}
      <SecurityForm />

      {/* Controles Finales (Guardar / Cancelar) */}
      <HStack space="md" className="justify-end mt-4">
        <Button variant="outline" className="border-slate-300 h-12 px-8 rounded-xl bg-white hover:bg-slate-50">
          <ButtonText className="text-slate-700 font-semibold">Cancelar</ButtonText>
        </Button>
        <Button className="bg-blue-600 h-12 px-8 rounded-xl shadow-md hover:bg-blue-700">
          <ButtonText className="text-white font-semibold">Guardar Cambios</ButtonText>
        </Button>
      </HStack>

    </ScrollView>
  );
}