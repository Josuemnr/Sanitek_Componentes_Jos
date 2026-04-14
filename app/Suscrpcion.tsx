import { CurrentPlanCard } from '@/components/Card_Subscription/Card_Subscription';
import { PaymentHistoryTable } from '@/components/History_Pays/History_Pays';
import { PaymentMethodsSection } from '@/components/Seccion_Pagos/Seccion_Pagos';
import { Heading } from '@/components/ui/heading';
import React from 'react';
import { ScrollView } from 'react-native';

export default function SuscripcionScreen() {
  // Mock Data
  const historialPagosMock = [
    { id: 1, fecha: "15 Mar 2024", descripcion: "Sanitek Premium Mensual", monto: "$17,000.00", estatus: "Pagado" },
    { id: 2, fecha: "15 Feb 2024", descripcion: "Sanitek Premium Mensual", monto: "$17,000.00", estatus: "Pagado" },
    { id: 3, fecha: "15 Ene 2024", descripcion: "Sanitek Premium Mensual", monto: "$17,000.00", estatus: "Pagado" },
  ];

  return (
    <ScrollView className="flex-1 bg-slate-50" contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
      
      <Heading size="xl" className="text-slate-900 mb-6">Administrar Suscripción</Heading>

        {/* 1. Bloque de Plan Actual */}
      <CurrentPlanCard />

      {/* 2. Bloque de Métodos de Pago (Actualizado) */}
      <PaymentMethodsSection />

      {/* 3. Bloque de Historial */}
      <PaymentHistoryTable pagos={historialPagosMock} />

    </ScrollView>
  );
}