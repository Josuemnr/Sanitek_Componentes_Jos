import { Box } from '@/components/ui/box';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';

interface Props {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export function PasswordInput({ label, placeholder, value, onChangeText }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      <Text className="text-slate-700 text-sm font-semibold mb-2">{label}</Text>
      <Input variant="outline" className="h-12 border-transparent bg-blue-50 rounded-xl"> 
        <InputField 
          placeholder={placeholder} 
          type={showPassword ? "text" : "password"} 
          value={value}
          onChangeText={onChangeText}
          className="px-4 text-slate-800" 
        />
        <InputSlot className="pr-4" onPress={() => setShowPassword(!showPassword)}>
          <InputIcon>
            <Feather 
              name={showPassword ? "eye" as any : "eye-off" as any} 
              size={18} 
              color={showPassword ? "#0F0F0" : "#0F0F0" } 
            />
          </InputIcon>
        </InputSlot>
      </Input>
    </Box>
  );
}