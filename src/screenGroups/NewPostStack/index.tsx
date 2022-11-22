import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenName } from "../../constants/ScreenName";
import { WriteBody } from "../../components/screens/WriteBody";
import { SelectHashTag } from "../../components/screens/SelectHashtag";

export type NewPostStackParamList = {
  [ScreenName.WRITE_BODY]: undefined;
  [ScreenName.SELECT_HASHTAG]: { title: string; body: string };
};

export const NewPostStack: React.FC = () => {
  const NewPostStack = createNativeStackNavigator<NewPostStackParamList>();

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
