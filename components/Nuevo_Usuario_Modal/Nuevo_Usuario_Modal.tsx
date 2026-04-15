import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Input, InputField } from '@/components/ui/input';
import {
    Modal,
    ModalBackdrop,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader
} from '@/components/ui/modal';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (user: any) => void;
}

export function NuevoUsuarioModal({ isOpen, onClose, onAddUser }: Props) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('Administrador');

  const handleGuardar = () => {
    if (!nombre || !email) return; // Validación simple

    const nuevoUsuario = {
      id: Math.random(), //id temporal por ser dato fake
      name: nombre,
      email: email,
      role: rol,
      status: "Activo",
      lastAccess: "Nunca"
    };

    onAddUser(nuevoUsuario);
    // Limpiamos los campos y cerramos
    setNombre('');
    setEmail('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalBackdrop />
      <ModalContent className="bg-slate-100 rounded-2xl p-6">
        <ModalHeader className="justify-between items-center mb-4">
          <Heading size="md" className="text-slate-800 font-bold">Nuevo Usuario</Heading>
          <ModalCloseButton>
            <AntDesign name="close" size={20} color="#64748b" />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          <VStack space="xl">
            <VStack space="xs">
              <Text className="text-sm font-bold text-slate-700">Nombre Completo</Text>
              <Input variant="outline" className="rounded-xl h-12">
                <InputField 
                  placeholder="Ej: Juan Pérez" 
                  value={nombre} 
                  onChangeText={setNombre}
                  className="text-slate-900"
                />
              </Input>
            </VStack>

            <VStack space="xs">
              <Text className="text-sm font-bold text-slate-700">Correo Electrónico</Text>
              <Input variant="outline" className="rounded-xl h-12">
                <InputField 
                  placeholder="usuario@sanitek.com" 
                  value={email} 
                  onChangeText={setEmail} 
                  className="text-slate-900"
                />
              </Input>
            </VStack>
            
            <Text className="text-xs text-slate-950/80 italic mt-4 mb-2">
              * Por defecto, el usuario se creará con estado Activo.
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter className="mt-6 border-t border-slate-100 pt-4">
          <Button variant="outline" action="secondary" onPress={onClose} className="mr-2">
            <ButtonText>Cancelar</ButtonText>
          </Button>
          <Button className="bg-blue-600" onPress={handleGuardar}>
            <ButtonText>Crear Usuario</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}