import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { ScrollView } from 'react-native';

interface User { //dto de usuario
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastAccess: string;
}

interface Props {
  users: User[]; //recibe un arreglo de usuarios
  onEditUser: (user: User) => void;
}

export function UserTable({ users, onEditUser }: Props) {
  // Función interna para los colores
  const obtenerEstiloRol = (rol: string) => {
    switch (rol) {
      case 'Director': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      case 'Administrador': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Gerente': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return ( // Componente principal de la tabla de usuarios
    <Box className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex-1">
      <HStack className="bg-slate-50 p-4 border-b border-slate-200">
        <Text className="flex-1 font-bold text-slate-600 text-xs uppercase tracking-wider">Usuario</Text>
        <Text className="w-32 font-bold text-slate-600 text-xs uppercase tracking-wider">Rol</Text>
        <Text className="w-32 font-bold text-slate-600 text-xs uppercase tracking-wider">Último Acceso</Text>
        <Text className="w-24 font-bold text-slate-600 text-xs uppercase tracking-wider">Estado</Text>
        <Text className="w-24 font-bold text-slate-600 text-xs uppercase tracking-wider text-center">Acciones</Text>
      </HStack>

      <ScrollView>
        {users.map((user) => (
          <HStack key={user.id} className="p-4 border-b border-slate-100 items-center">
            <Box className="flex-1">
              <Text className="font-semibold text-slate-800">{user.name}</Text>
              <Text className="text-slate-400 text-xs">{user.email}</Text>
            </Box>
            
            <Box className="w-32">
              <Box className={`px-2 py-1 rounded-md border self-start ${obtenerEstiloRol(user.role)}`}>
                <Text className={`text-[11px] font-bold uppercase tracking-wide ${obtenerEstiloRol(user.role).split(' ')[1]}`}>
                  {user.role}
                </Text>
              </Box>
            </Box>

            <Box className="w-32">
              <Text className="text-slate-500 text-sm">{user.lastAccess}</Text>
            </Box>
            
            <Box className="w-24">
              <Box className={`px-3 py-1 rounded-full self-start ${user.status === 'Activo' ? 'bg-green-100' : 'bg-slate-100'}`}>
                <Text className={`text-[10px] font-bold uppercase ${user.status === 'Activo' ? 'text-green-700' : 'text-slate-500'}`}>
                  {user.status}
                </Text>
              </Box>
            </Box>
            
            <Box className="w-24 items-center">
              <Pressable 
                onPress={() => onEditUser(user)}
                className="flex-row items-center bg-slate-100 px-3 py-2 rounded-lg active:bg-slate-200 hover:bg-slate-200 transition-colors"
              >
                <Feather name={"edit-2" as any} size={14} color="#3b82f6" style={{ marginRight: 4 }} />
                <Text className="text-blue-500 text-sm font-medium">Editar</Text>
              </Pressable>
            </Box>
          </HStack>
        ))}
        {users.length === 0 && (
          <Box className="p-8 items-center justify-center">
            <Text className="text-slate-400">No hay usuarios con este estado.</Text>
          </Box>
        )}
      </ScrollView>
    </Box>
  );
}