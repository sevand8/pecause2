import CustomText from "@/components/ui/CustomText";
import "@/global.css";
import { View } from "react-native";

export default function Index() {
  return (
        <View className="bg-[#E2B878] w-screen h-screen">
        <CustomText variant="large" dark={false}>
          Hello World
        </CustomText>
      </View>

  );
}
