import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface CustomButtonProps {
  children: string;
  onPress: () => void;
  variant?: "primario" | "secundario";
}

const CustomButton = ({ children, onPress, variant = "primario" }: CustomButtonProps) => {
  const backgroundColor = variant === "primario" ? "#0F626F" : "#E2B878";
  const textColor = variant === "primario" ? "#FFFFFF" : "#0F626F";
  
  return (
    <TouchableOpacity 
      onPress={onPress}
      className="rounded-lg py-4 mt-6 active:opacity-80"
      style={{ backgroundColor }}
    >
      <Text 
        className="font-semibold text-base text-center"
        style={{ color: textColor }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;