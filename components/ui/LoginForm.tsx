import React from "react";
import CustomText from "@/components/ui/CustomText";
import CustomInput from "@/components/ui/CustomInput";
import CustomButton from "@/components/ui/CustomButton";
import "@/global.css";
import { View, Alert, Pressable } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";

// Defino los tipos de las props
type LoginFormProps = {
  onLoginPress: () => void;
  onSwitchToRegister: () => void;
};

//Funcion para mandar aletaras en el inicio de sesion
export default function LoginForm({ onLoginPress, onSwitchToRegister }: LoginFormProps){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor completa todos los campos");//Cuando se intente inciar sesion pero no se ingrese ningun dato
      return;
    }
    
    console.log("Login:", { email, password });
    Alert.alert("Éxito", `Bienvenido ${email}`);//Cuando se ingrese correctamente los datos

    onLoginPress();
  };

  return (
    //Agregar los colores de fondo a las paginas
    <View className="bg-[#E2B878] w-screen h-screen flex justify-center items-center">
      <View className="w-4/5 bg-white rounded-2xl p-8 max-w-md shadow-xl">
        {/* Títulos para la bienvenida de la app */}
        <View className="mb-8">
          <CustomText variant="large" dark={true}>
            Bienvenido
          </CustomText>
          <View className="h-2"></View>
          <CustomText variant="medium" dark={true}>
            Inicia sesión para continuar
          </CustomText>
        </View>

    {/* Parte para ingresar el correo electronico */}
        <View className="mb-4">
          <CustomText variant="small" dark={true}>
            Correo Electrónico
          </CustomText>
          <View className="h-2"></View>
          <CustomInput
            placeholder="ejemplo@correo.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

    {/* Parte para ingresar la contraseña */}
        <View className="mb-6">
          <CustomText variant="small" dark={true}>
            Contraseña
          </CustomText>
          <View className="h-2"></View>
          <CustomInput
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={false}
          />
        </View>

    {/* Boton de inciar sesion */}
        <CustomButton onPress={handleLogin}>
          Iniciar Sesión
        </CustomButton>

    {/* Texto que indica un ¿No tienes cuenta? Regístrate */}
        <View className="items-center mt-3">
          <Pressable onPress={onSwitchToRegister}>
            <CustomText variant="small" dark={true}>
              ¿No tienes cuenta? Regístrate
            </CustomText>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

