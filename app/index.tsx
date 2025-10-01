import CustomText from "@/components/ui/CustomText";
import "@/global.css";
import {View} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <View className="bg-[#026A75] w-screen h-screen">
        <CustomText variant="large" dark={false}>
          Hello World
        </CustomText>
      </View>
    </View>
  );
}
