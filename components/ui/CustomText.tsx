import React from 'react';
import { Text } from 'react-native';

interface CustomTextProps {
  variant: "small" | "medium" | "large" | "type1" | "type2";
  dark?: boolean;
  children: React.ReactNode;
}

const CustomText = ({variant, dark = false, children}: CustomTextProps) => {
  return (
    <Text className={styleSelector(variant, dark)}>
      {children}
    </Text>
  );
}

function styleSelector(variant: any, dark: boolean) {
  let style = "";
  
  if (dark === false) {
    style += "text-white ";
  } else {
    style += "text-[#0F626F] ";
  }
  
  switch (variant) {
    case "small":
      return style + "font-semibold text-sm";
    case "medium":
      return style + "font-semibold text-base";
    case "large":
      return style + "font-semibold text-xl";
    case "type1":
        return style + "font-semibold text-xl text-center" ;
    case "type2":
        return style + " font-semibold text-base text-center text-gray-500" ;  
  }
}

export default CustomText;
