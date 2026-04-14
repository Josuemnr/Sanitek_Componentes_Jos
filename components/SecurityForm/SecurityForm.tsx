import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';

// Importamos nuestra nueva Molécula
import { PasswordInput } from '@/components/Password_Input/Password_Input';

export function SecurityForm() {
  // Estados para guardar lo que el usuario escribe
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Box className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-6">
      <HStack className="items-center mb-6">
        <Feather name={"shield" as any} size={20} color="#3b82f6" style={{ marginRight: 8 }} />
        <Heading size="md" className="text-slate-800">Seguridad</Heading>
      </HStack>

      <VStack space="lg">
        {/* Usamos la Molécula para cada campo */}
        <PasswordInput 
          label="Contraseña Actual" 
          placeholder="Ingresa tu contraseña actual"
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
        
        <PasswordInput 
          label="Nueva Contraseña" 
          placeholder="Ingresa tu nueva contraseña"
          value={newPassword}
          onChangeText={setNewPassword}
        />
        
        <PasswordInput 
          label="Confirmar Nueva Contraseña" 
          placeholder="Confirma tu nueva contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Banner de Información */}
        <Box className="bg-blue-50 rounded-xl p-4 flex-row items-center border border-blue-100 mt-2">
          <Feather name={"info" as any} size={16} color="#3b82f6" style={{ marginRight: 8 }} />
          <Text className="text-slate-600 text-xs flex-1">
            La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas y números.
          </Text>
        </Box>

        {/* Botón Actualizar Seguridad */}
        <Button className="bg-blue-600 rounded-xl h-11 self-end px-8 mt-4 shadow-sm hover:bg-blue-700">
          <Feather name={"check" as any} size={16} color="white" style={{ marginRight: 8 }} />
          <ButtonText className="text-white font-medium">Actualizar</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}