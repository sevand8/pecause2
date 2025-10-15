import { View, Text, ScrollView } from 'react-native';
import CustomText from "@/components/ui/CustomText";

export default function Music() {
  return (
      <View className="w-max rounded-2xl mb-4 p-8 max-w-md shadow-xl center bg-[#2984D1]">
        <CustomText variant="type1" dark={true} >Tipos de musica</CustomText>

        <View className="w-max rounded-lg  p-4  mb-4  shadow-xl center bg-[#A3B3FF]">
          <Text className=" text-center text-lg font-bold text-white">
            Electronic
          </Text>
        </View>

        <View className="w-max rounded-lg  p-4  mb-4  shadow-xl center bg-[#A3B3FF]">
          <Text className="text-center text-lg font-bold text-white">
            Indie Pop
          </Text>
        </View>

        <View className="w-max rounded-lg  p-4  mb-4  shadow-xl center bg-[#A3B3FF]">
          <Text className="text-center text-lg font-bold text-white">
            Rock Latino
          </Text>
        </View>
    </View>
  );
}