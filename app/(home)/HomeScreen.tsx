import "@/global.css";
import { View, Alert,Text } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import Information from "@/components/ui/Information";
import Music from "@/components/ui/Music";

export default function HomeScreen() {
  return (
   <View className="bg-[#E2B878] w-screen h-screen">
    <Information></Information>
    <Music></Music>
    <View className="w-max  bg-gray-500 rounded-2xl p-1 max-w-md shadow-xl center mb-4 ">
    <Link href="/NowPlayingScreen" className="font-semibold text-xl text-center">Now Playing</Link>
    </View>
    <View className="w-max  bg-gray-500 rounded-2xl p-1 max-w-md shadow-xl center ">
    <Link href="/" className=" font-semibold text-xl text-center">Salir de Sesion</Link>
    </View>
   </View>
  );
}