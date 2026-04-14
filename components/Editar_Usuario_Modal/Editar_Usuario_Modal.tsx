import { Box } from '@/components/ui/box';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalHeader } from '@/components/ui/modal';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { AntDesign, Feather } from '@expo/vector-icons';
import React from 'react';

interface Props { 
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

export function EditUserModal({ isOpen, onClose, user }: Props) {
  if (!user) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalBackdrop />
      <ModalContent className="bg-white rounded-2xl p-6">
        <ModalHeader className="justify-between items-center mb-4">
          <Heading size="md" className="text-slate-800 font-bold">Editar Usuario</Heading>
          <ModalCloseButton>
            <AntDesign name={"close" as any} size={20} color="#64748b" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <VStack space="xl" className="items-center w-full">
            <Box className="w-20 h-20 bg-lime-300 rounded-full mb-2" />
            <VStack className="items-center mb-4">
              <Text className="font-bold text-lg text-slate-900">{user.name}</Text>
              <Text className="text-sm text-slate-500">{user.email}</Text>
            </VStack>
            <Divider className="w-full bg-slate-100" />
            <Box className="w-full">
              <Text className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Rol del Usuario</Text>
              <HStack className="justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-200">
                <Text className="text-slate-800 font-medium">{user.role}</Text>
                <Feather name={"chevron-down" as any} size={16} color="#64748b" />
              </HStack>
            </Box>
            <Box className="w-full mt-2">
              <Text className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Accesos a:</Text>
              <VStack space="sm">
                <Text className="text-slate-700 font-medium text-sm">MÓDULO 1</Text>
                <Text className="text-slate-700 font-medium text-sm">MÓDULO 2</Text>
              </VStack>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}