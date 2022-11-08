import * as React from "react";
import { Box, Pressable, View } from "native-base";
import { Color } from "../../../constants/Color";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Tabbar: React.FC<{
  state: any;
  descriptors: any;
  navigation: any;
}> = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    console.log(16 + insets.bottom);
  }, []);

  return (
    <Box
      flexDirection="row"
      display="flex"
      backgroundColor={Color.MAIN}
      height={16}
      borderTopRadius={16}
      justifyContent="space-around"
    >
      {state.routes.map((route: any, index: number) => {
        if (route.name == "placeholder") {
          return (
            <Box position="relative" width={16} key={index}>
              <View
                position="absolute"
                height={20}
                width={20}
                backgroundColor={Color.MAIN}
                borderRadius={48}
                left={-8}
                bottom={1}
              />
              <Box
                position="absolute"
                height={16}
                width={16}
                backgroundColor={Color.SUB}
                borderRadius={48}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bottom={3}
              >
                <Feather name="edit-2" size={28} color={Color.WHITE_100} />
              </Box>
            </Box>
          );
        }
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            onPress={onPress}
            height={16}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Feather name={label} size={32} color={Color.WHITE_100} />
          </Pressable>
        );
      })}
    </Box>
  );
};
