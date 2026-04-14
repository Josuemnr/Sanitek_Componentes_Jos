import {
  FormControl,
  FormControlLabel,
  FormControlLabelText
} from '@/components/ui/form-control';
import { Input, InputField } from '@/components/ui/input';
import React from 'react';

interface Props {
  label: string;
  placeholder: string;
  type?: "text" | "password"; // Para permitir diferentes tipos de input, como texto o contraseña
  value: string;
  onChangeText: (text: string) => void;
}

export const CustomInput = ({ label, placeholder, type = "text", value, onChangeText }: Props) => (
  <FormControl size="md" isRequired={true} className="mb-4 w-full">
    <FormControlLabel className="mb-1">
      <FormControlLabelText className="text-sm font-medium text-slate-700">
        {label}
      </FormControlLabelText>
    </FormControlLabel>
    
    <Input variant="outline" size="md" className="rounded-xl border-slate-300 bg-white h-12">
      <InputField 
        placeholder={placeholder} 
        type={type === "password" ? "password" : "text"}
        className="text-slate-900"
        value={value} //para que los cambios se reflejen en el input
        onChangeText={onChangeText}
        autoCapitalize="none" 
      />
    </Input>
  </FormControl>
);