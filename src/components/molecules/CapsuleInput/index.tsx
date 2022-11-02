import * as React from "react";
import { Icon, Input, VStack, Box } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Color } from "../../../constants/Color";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { StyleSheet } from "react-native";

interface CapsuleInputProps {
  value: string;
  iconName: string;
  label: string;
  placeholder: string;
  onChange: (text: string) => void;
}

export const CapsuleInput: React.FC<CapsuleInputProps> = ({
  value,
  iconName,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <VStack space={1}>
      <CustomText fontType={FontType.SMALL} color={Color.TEXT}>
        {label}
      </CustomText>
      <Box shadow={2}>
        <Input
          backgroundColor={Color.WHITE_100}
          borderWidth={0}
          height={10}
          width={"100%"}
          borderRadius={50}
          placeholder={placeholder}
          fontFamily="body"
          fontWeight={500}
          placeholderTextColor={Color.MEDIUM_GRAY}
          fontSize="xs"
          InputLeftElement={
            <Icon
              as={<MaterialIcons name={iconName as any} />}
              size={5}
              ml="2"
              color={Color.MEDIUM_GRAY}
              marginLeft="5"
            />
          }
          value={value}
          onChangeText={(text) => {
            onChange(text);
          }}
        />
      </Box>
    </VStack>
  );
};
