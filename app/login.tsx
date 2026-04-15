import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, View } from 'react-native';

import { CustomInput } from '@/components/CustomImput/CustomImput';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Link, LinkText } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

// Importaste tu componente correctamente
import { PantallaCarga } from '@/components/Estado_Carga/Estado_Carga';

export default function LoginScreen() {
  const router = useRouter();

  // Estados para el registro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Estado para la carga
  const [isLoading, setIsLoading] = useState(false);

  // Para la animacion del mundo rotando
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Bucle infinito para rotar el planeta
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 120000, // se puede cambiar para mas rapido o mas lento
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  // Para convertir el valor de animacion a grados de rotacion
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  // Mock de Login
  const handleLogin = () => {
    setErrorMessage('');
    
    if (!email || !password) {
      setErrorMessage('Por favor, llena todos los campos.');
      return;
    }

    // 1. Encendemos el estado de carga
    setIsLoading(true); 

    // 2. Iniciamos el temporizador simulando la base de datos
    setTimeout(() => {
      const mockUsers = [
        { email: 'femina@sanitek.com', password: 'bonita', role: 'Administrador' }
      ];
      
      const user = mockUsers.find(
        (u) => u.email === email.toLowerCase().trim() && u.password === password
      );
      
      if (user) {
        // Redirige a la pagina siguiente (No necesitas apagar el loading porque la página cambia)
        router.replace('/Gestion_Usuarios'); 
      } else {
        // MUY IMPORTANTE: Apagamos la carga si hay error para que el usuario pueda intentar de nuevo
        setIsLoading(false); 
        setErrorMessage('Correo o contraseña incorrectos.');
      }
    }, 1500); // 1500 milisegundos = 1.5 segundos (Aquí cerramos correctamente el setTimeout)
  };

  return (
    // Agregué 'relative' aquí por si acaso para que la carga cubra bien
    <View className="flex-1 bg-slate-950 overflow-hidden relative">
      
      {/* IMAGEN DE FONDO ANIMADA (PLANETA ROTANDO) */}
      <Animated.Image
        source={{ uri: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000&auto=format&fit=crop' }}
        style={{
          position: 'absolute',
          width: '150%', 
          height: '150%',
          top: '-25%',
          left: '-25%',
          opacity: 0.4, 
          transform: [{ rotate: spin }]
        }}
        resizeMode="cover"
      />
      
      <View className="flex-1 justify-end items-end p-12 lg:p-24 z-10" >
        
        <Box className="w-full max-w-md bg-slate-900/80 p-10 rounded-3xl border border-slate-700 shadow-2xl backdrop-blur-sm">
          <VStack space="md" className="items-start mb-10">
            <Heading size="2xl" className="text-white font-bold">Inicia Sesión</Heading>
            <Text className="text-slate-400 text-base">Plataforma de Riesgo Sanitario</Text>
          </VStack>

          <VStack space="xl">
            <CustomInput
              label="Email" 
              placeholder="usuario@sanitek.com" 
              value={email}
              onChangeText={setEmail}
            />
            <CustomInput
              label="Contraseña" 
              placeholder="********" 
              type="password" 
              value={password}
              onChangeText={setPassword}
            />

            {errorMessage ? (
              <Text className="text-red-400 text-sm font-medium text-center mt-2">
                {errorMessage}
              </Text>
            ) : null}
            
            <Button 
              className="bg-blue-600 rounded-xl h-14 shadow-lg hover:bg-blue-500 active:bg-blue-700 mt-4 transition-colors"
              onPress={handleLogin}
              disabled={isLoading} // Deshabilita el botón mientras carga para evitar doble clic
            >
              <ButtonText className="font-semibold italic text-white text-lg">Ingresar al Sistema</ButtonText>
            </Button>

            <Link href="/forgot" className="mt-4 self-center">
              <LinkText className="text-slate-400 text-sm no-underline hover:text-white transition-colors">
                ¿Olvidaste tu contraseña?
              </LinkText>
            </Link>
          </VStack>
        </Box>

      </View>

      {/* AQUÍ INYECTAMOS TU ORGANISMO: Queda al final para que tape toda la pantalla */}
      <PantallaCarga isVisible={isLoading} mensaje="Iniciando sesión..." />

    </View>
  );
}