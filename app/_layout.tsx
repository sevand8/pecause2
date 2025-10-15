import { Stack } from "expo-router";

const RootLayout = () => {
    return(
      <Stack>
              <Stack.Screen name="index" options={{ headerShown: false}}/>
              <Stack.Screen name="(home)" options={{ headerShown: false}}/>
      </Stack>
    );
};

export default RootLayout;