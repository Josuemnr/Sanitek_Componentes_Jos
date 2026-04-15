import { RecuperarPasswordForm } from '@/components/Recuperar_Password_Form/Recuperar_Password_Form';
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Si lograste implementar el globo 3D, puedes importarlo aquí también
// import { GlobeBackground } from '@/components/GlobeBackground/GlobeBackground';

export default function ForgotPasswordScreen() {
  return (
    <View className="flex-1 bg-slate-950 relative overflow-hidden">
      
      {/* FONDO (Descomenta el GlobeBackground si lo estás usando en tu login) */}
      <View style={StyleSheet.absoluteFillObject} className="z-0">
         {/* <GlobeBackground /> */}
      </View>
      
      {/* CONTENEDOR CENTRAL */}
      <View 
        className="flex-1 justify-center items-center p-6 z-10" 
        pointerEvents="box-none"
      >
        <RecuperarPasswordForm />
      </View>

    </View>
  );
}