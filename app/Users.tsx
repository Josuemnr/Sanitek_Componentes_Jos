import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function UserManagement() {
  const users = [
    { id: 1, name: "Josué Monroy Larios", email: "josue.monroy@sanitek.com", role: "Administrador", status: "Activo" },
    { id: 2, name: "Ana Concepcion", email: "ana.concepcion@sanitek.com", role: "Administrador", status: "Activo" },
    { id: 3, name: "Iker Mejia", email: "iker.mejia@sanitek.com", role: "Administrador", status: "Activo" },
    { id: 4, name: "Gerado Landa", email: "Gerardo.landa@sanitek.com", role: "Administrador", status: "Inactivo" },
  ];

  return (
    <View className="flex-1 bg-slate-50 p-6">
      <HStack className="mb-8 items-center justify-between">
        <Heading size="xl" className="text-slate-900">Gestión de Usuarios</Heading>
        
        <Button className="bg-blue-600 rounded-lg px-4 shadow-sm h-10 flex-row items-center">
          <AntDesign name="adduser" size={18} color="white" style={{ marginRight: 8 }} />
          <ButtonText className="text-sm font-medium italic text-white">Nuevo Usuario</ButtonText>
        </Button>
      </HStack>

      <Box className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Cabecera de Tabla */}
        <HStack className="bg-slate-50 p-4 border-b border-slate-200">
          <Text className="flex-1 font-bold text-slate-600 text-xs uppercase tracking-wider">Usuario</Text>
          <Text className="w-32 font-bold text-slate-600 text-xs uppercase tracking-wider">Rol</Text>
          <Text className="w-24 font-bold text-slate-600 text-xs uppercase tracking-wider">Estado</Text>
          <Text className="w-16 font-bold text-slate-600 text-xs uppercase tracking-wider text-center">Acciones</Text>
        </HStack>

        <ScrollView>
          {users.map((user) => (
            <HStack key={user.id} className="p-4 border-b border-slate-100 items-center">
              <Box className="flex-1">
                <Text className="font-semibold text-slate-800">{user.name}</Text>
                <Text className="text-slate-400 text-xs">{user.email}</Text>
              </Box>
              
              <Box className="w-32">
                <Text className="text-slate-500 text-sm">{user.role}</Text>
              </Box>
              
              <Box className="w-24">
                <Box className="bg-green-100 px-3 py-1 rounded-full self-start">
                  <Text className="text-green-700 text-[10px] font-bold uppercase">{user.status}</Text>
                </Box>
              </Box>
              
              {/* Acción de Editar */}
              <Box className="w-16 items-center">
                <Text className="text-blue-500 text-sm">Editar</Text>
              </Box>
            </HStack>
          ))}
        </ScrollView>
      </Box>
    </View>
  );
}