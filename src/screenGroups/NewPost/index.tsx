import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenName } from "../../constants/ScreenName";
import { WriteBody } from "../../components/screens/WriteBody";
import { SelectHashTag } from "../../components/screens/SelectHashtag";

export const NewPost: React.FC = () => {
  const NewPostStack = createNativeStackNavigator();

  return (
    <NewPostStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <NewPostStack.Screen name={ScreenName.WRITE_BODY} component={WriteBody} />
      <NewPostStack.Screen
        name={ScreenName.SELECT_HASHTAG}
        component={SelectHashTag}
      />
    </NewPostStack.Navigator>
  );
};
