import { SearchBar } from '@/components/Barra_Busqueda/Barra_Busqueda';
import { EditUserModal } from '@/components/Editar_Usuario_Modal/Editar_Usuario_Modal';
import { NuevoUsuarioModal } from '@/components/Nuevo_Usuario_Modal/Nuevo_Usuario_Modal';
import { UserTable } from '@/components/Tabla_Usuarios/Tabla_Usuarios';
import { FilterTabs } from '@/components/Tabs_Filtros/Tabs_Filtros';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text'; // Importante para el texto del dialog
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';

// NUEVO: Importamos el AlertDialog de Gluestack
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader
} from '@/components/ui/alert-dialog';

export default function GestionUsuariosScreen() {
  const router = useRouter();
  
  // 1. Estados de la UI
  const [searchTerm, setSearchTerm] = useState('');
  const [filtroActivo, setFiltroActivo] = useState('Todos');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  
  // Controles de visibilidad de los Modales
  const [isModalOpen, setIsModalOpen] = useState(false); // Para Editar
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Para Agregar
  
  // NUEVO: Controles para Eliminar
  const [showAlertDialog, setShowAlertDialog] = useState(false); 
  const [userToDelete, setUserToDelete] = useState<any>(null);

  // 2. Estado de Datos (Mock Data Vivo)
  const [users, setUsers] = useState([
    { id: 1, name: "Josué Monroy Larios", email: "josue.monroy@sanitek.com", role: "Director", status: "Activo", lastAccess: "Hoy, 10:30 AM" },
    { id: 2, name: "Ana Concepcion", email: "ana.concepcion@sanitek.com", role: "Administrador", status: "Activo", lastAccess: "Ayer, 16:45 PM" },
    { id: 3, name: "Iker Mejia", email: "iker.mejia@sanitek.com", role: "Gerente", status: "Activo", lastAccess: "Hace 1 semana" },
    { id: 4, name: "Gerardo Landa", email: "gerardo.landa@sanitek.com", role: "Administrador", status: "Inactivo", lastAccess: "Hace 2 horas" },
  ]);

  // 3. Lógica de filtrado de usuarios
  const usuariosFiltrados = users.filter(user => {
    const cumpleEstado = filtroActivo === 'Todos' ? true : user.status === filtroActivo;
    const cumpleBusqueda = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    return cumpleEstado && cumpleBusqueda;
  });

  // 4. Funciones de Acción
  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleAddUser = (newUser: any) => {
    setUsers([newUser, ...users]); 
  };

  // NUEVO: Funciones de Eliminación
  const confirmDelete = (user: any) => {
    setUserToDelete(user);
    setShowAlertDialog(true);
  };

  const handleFinalDelete = () => {
    if (userToDelete) {
      // Filtramos la lista para dejar todos EXCEPTO el que queremos borrar
      setUsers(users.filter(u => u.id !== userToDelete.id));
    }
    setShowAlertDialog(false);
    setUserToDelete(null);
  };

  return (
    <View className="flex-1 bg-slate-50 p-6 lg:p-12">
      <HStack className="mb-8 items-center justify-between">
        <Heading size="xl" className="text-slate-900">Gestión de Usuarios</Heading>
        <HStack space="md">
          <Button variant="outline" className="border-slate-300 h-10" onPress={() => router.push('/Perfil_Usuario')}>
            <ButtonText className="text-slate-600">Ver Perfil</ButtonText>
          </Button>

          <Button variant="outline" className="border-slate-300 h-10" onPress={() => router.push('/Suscrpcion')}>
            <ButtonText className="text-slate-600">Ver Suscripción</ButtonText>
          </Button>
          
          <Button 
            className="bg-blue-600 rounded-lg px-4 shadow-sm h-10 flex-row items-center"
            onPress={() => setIsAddModalOpen(true)}
          >
            <AntDesign name={"adduser" as any} size={18} color="white" style={{ marginRight: 8 }} />
            <ButtonText className="text-sm font-medium italic text-white">Nuevo Usuario</ButtonText>
          </Button>
        </HStack>
      </HStack>

      <View className="z-10"> 
        <SearchBar 
          value={searchTerm} 
          onChangeText={setSearchTerm} 
        />
        <FilterTabs 
          opciones={['Todos', 'Activo', 'Inactivo']} 
          filtroActivo={filtroActivo} 
          onCambiarFiltro={setFiltroActivo} 
        />
      </View>

      <UserTable 
        users={usuariosFiltrados} 
        onEditUser={handleEdit} 
        onDeleteUser={confirmDelete} // CONECTAMOS LA FUNCIÓN AQUÍ
      />

      <EditUserModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        user={selectedUser} 
      />

      <NuevoUsuarioModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAddUser={handleAddUser} 
      />

      {/* NUEVO: El cuadro de diálogo para confirmar la eliminación */}
      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => setShowAlertDialog(false)}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent className="p-4 rounded-2xl bg-white">
          <AlertDialogHeader>
            <Heading size="lg" className="text-slate-900">¿Eliminar usuario?</Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-2 mb-4">
            <Text className="text-slate-600 text-sm">
              Esta acción no se puede deshacer. Se eliminarán permanentemente los datos de{" "}
              <Text className="font-bold text-slate-900">{userToDelete?.name}</Text>.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            {/* Reemplazamos AlertDialogButtonGroup por HStack */}
            <HStack className="gap-3">
              <Button 
                variant="outline" 
                action="secondary" 
                onPress={() => setShowAlertDialog(false)} 
                className="border-slate-300"
              >
                <ButtonText className="text-slate-700">Cancelar</ButtonText>
              </Button>
              <Button action="negative" onPress={handleFinalDelete} className="bg-red-600">
                <ButtonText className="text-white">Eliminar</ButtonText>
              </Button>
            </HStack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
    </View>
  );
}