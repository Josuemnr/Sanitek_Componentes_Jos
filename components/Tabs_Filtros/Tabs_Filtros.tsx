import { HStack } from '@/components/ui/hstack';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import React from 'react';

interface Props {
  opciones: string[]; //opciones del filtro 
  filtroActivo: string;
  onCambiarFiltro: (filtro: string) => void; //funcion para cambiar el filtro activo
}

export function FilterTabs({ opciones, filtroActivo, onCambiarFiltro }: Props) { //componente para mostrar las pestañas de filtro
  return (
    <HStack space="sm" className="mb-6">
      {opciones.map((opcion) => (
        <Pressable 
          key={opcion}
          onPress={() => onCambiarFiltro(opcion)}
          className={`px-4 py-2 rounded-full border transition-colors ${
            filtroActivo === opcion 
              ? 'bg-slate-800 border-slate-800' 
              : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Text className={`text-sm font-semibold ${filtroActivo === opcion ? 'text-white' : 'text-slate-600'}`}>
            {opcion === 'Todos' ? 'Todos los usuarios' : opcion + 's'}
          </Text>
        </Pressable>
      ))}
    </HStack>
  );
}