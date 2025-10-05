import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-rubik-extrabold text-blue-500 mb-4">
        Welcome to Nativewind!
      </Text>
      <Link href="/sign-in" className="text-blue-500 text-lg">
        Sign in
      </Link>
    </View>
  );
}
