import { Box } from '@/components/ui/box';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Feather } from '@expo/vector-icons';
import React from 'react';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChangeText, placeholder = "Buscar por nombre o correo..." }: Props) {
  return (
    <Box className="w-full mb-6">
      <Input 
        variant="outline" 
        size="md" 
        className="rounded-xl border-slate-200 bg-white h-12 shadow-sm focus:border-blue-500 transition-all"
      >
        <InputSlot className="pl-4">
          <InputIcon>
            <Feather name={"search" as any} size={18} color="#94a3b8" />
          </InputIcon>
        </InputSlot>
        <InputField // para que el usuario pueda escribir en la barra de busqueda
          placeholder={placeholder} 
          value={value}
          onChangeText={onChangeText}
          className="text-slate-700 text-sm"
        />
      </Input>
    </Box>
  );
}