import { Text, View } from "react-native";

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
        <Text className="">Edit app/index.tsx to edit this screen.</Text>
      </View>
    </View>
  );
}
