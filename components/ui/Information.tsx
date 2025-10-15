import React from 'react';
import CustomText from "@/components/ui/CustomText";
import { View, Text, ScrollView } from 'react-native';

export default function Information() {
  return (
    <View className='bg-[#FFB86A]'>
        <CustomText variant='type1' dark={true}>Sebastian Andrade</CustomText>
        <CustomText variant='type2' dark={true}>Estudiante</CustomText>
    </View>
    );
}