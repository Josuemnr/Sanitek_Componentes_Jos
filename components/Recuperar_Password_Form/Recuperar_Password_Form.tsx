import { CustomInput } from '@/components/CustomImput/CustomImput';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export function RecuperarPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleRecover = () => {
    setError('');
    if (!email) {
      setError('Por favor ingresa tu correo electrónico.');
      return;
    }
    setIsSubmitted(true); //solo es simulado 
  };

  return (
    <Box className="w-full max-w-md bg-slate-900/90 p-10 rounded-3xl border border-slate-700 shadow-2xl backdrop-blur-md">
      
      {/* RENDERIZADO CONDICIONAL: Si no se ha enviado, muestra el formulario */}
      {!isSubmitted ? (
        <VStack space="xl">
          <VStack space="sm" className="items-start mb-4">
            <Heading size="2xl" className="text-white font-bold">Recuperar Contraseña</Heading>
            <Text className="text-slate-400 text-sm">
              Ingresa el correo electrónico  y te enviaremos las instrucciones para restablecer tu contraseña.
            </Text>
          </VStack>

          <CustomInput
            label="Email"
            placeholder="usuario@sanitek.com"
            value={email}
            onChangeText={setEmail}
          />

          {error ? <Text className="text-red-400 text-sm font-medium">{error}</Text> : null}

          <Button
            className="bg-blue-600 rounded-xl h-14 shadow-lg hover:bg-blue-500 active:bg-blue-700 mt-2 transition-colors"
            onPress={handleRecover}
          >
            <ButtonText className="font-semibold text-white text-lg">Enviar Instrucciones</ButtonText>
          </Button>
        </VStack>
      ) : (
        /* Si ya se envió, muestra el mensaje de éxito */
        <VStack space="lg" className="items-center py-6">
          <Box className="w-16 h-16 bg-green-500/20 rounded-full items-center justify-center mb-2 border border-green-500/30">
            <Feather name="check" size={32} color="#22c55e" />
          </Box>
          <Heading size="xl" className="text-white font-bold text-center">¡Enlace Enviado!</Heading>
          <Text className="text-slate-400 text-sm text-center">
            Hemos enviado un correo a <Text className="text-white font-bold">{email}</Text> con las instrucciones para restablecer tu contraseña.
          </Text>
        </VStack>
      )}

      {/* Botón para regresar al Login (Siempre visible) */}
      <Button variant="link" className="mt-8 self-center" onPress={() => router.push('/login')}>
        <Feather name="arrow-left" size={16} color="#94a3b8" style={{ marginRight: 8 }} />
        <ButtonText className="text-slate-400 text-sm no-underline hover:text-white transition-colors">
          Volver al inicio de sesión
        </ButtonText>
      </Button>
    </Box>
  );
}