import { SearchBar } from '@/components/Barra_Busqueda/Barra_Busqueda';
import { EditUserModal } from '@/components/Editar_Usuario_Modal/Editar_Usuario_Modal';
import { UserTable } from '@/components/Tabla_Usuarios/Tabla_Usuarios';
import { FilterTabs } from '@/components/Tabs_Filtros/Tabs_Filtros';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';

export default function GestionUsuariosScreen() {
  const router = useRouter();
  
  // 1. Estados
  const [searchTerm, setSearchTerm] = useState(''); // para el buscador
  const [filtroActivo, setFiltroActivo] = useState('Todos');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock Data
  const mockUsers = [
    { id: 1, name: "Josué Monroy Larios", email: "josue.monroy@sanitek.com", role: "Director", status: "Activo", lastAccess: "Hoy, 10:30 AM" },
    { id: 2, name: "Ana Concepcion", email: "ana.concepcion@sanitek.com", role: "Administrador", status: "Activo", lastAccess: "Ayer, 16:45 PM" },
    { id: 3, name: "Iker Mejia", email: "iker.mejia@sanitek.com", role: "Gerente", status: "Inactivo", lastAccess: "Hace 1 semana" },
    { id: 4, name: "Gerardo Landa", email: "gerardo.landa@sanitek.com", role: "Administrador", status: "Activo", lastAccess: "Hace 2 horas" },
  ];

  // logica de filtrado de usuarios 
  const usuariosFiltrados = mockUsers.filter(user => {
    // Validar por estado
    const cumpleEstado = filtroActivo === 'Todos' ? true : user.status === filtroActivo;
    
    // Validar por nombre o correo (ignorando mayúsculas/minúsculas)
    const cumpleBusqueda = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    return cumpleEstado && cumpleBusqueda;
  });

  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <View className="flex-1 bg-slate-50 p-6 lg:p-12">
      <HStack className="mb-8 items-center justify-between">
        <Heading size="xl" className="text-slate-900">Gestión de Usuarios</Heading>
        <HStack space="md">
          <Button variant="outline" className="border-slate-300 h-10" onPress={() => router.push('/Suscrpcion')}>
            <ButtonText className="text-slate-600">Ver Suscripción</ButtonText>
          </Button>
          <Button className="bg-blue-600 rounded-lg px-4 shadow-sm h-10 flex-row items-center">
            <AntDesign name={"adduser" as any} size={18} color="white" style={{ marginRight: 8 }} />
            <ButtonText className="text-sm font-medium italic text-white">Nuevo Usuario</ButtonText>
          </Button>
        </HStack>
      </HStack>

      <View className="z-10"> 
        <SearchBar // barra de busquedad importada
          value={searchTerm} 
          onChangeText={setSearchTerm} 
        />
        <FilterTabs  // pestañas de filtro importada
          opciones={['Todos', 'Activo', 'Inactivo']} 
          filtroActivo={filtroActivo} 
          onCambiarFiltro={setFiltroActivo} 
        />
      </View>

      <UserTable  // tabla de usuarios importada
        users={usuariosFiltrados} 
        onEditUser={handleEdit} 
      />

      <EditUserModal // modal de editar usuario importada
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        user={selectedUser} 
      />
      
    </View>
  );
}