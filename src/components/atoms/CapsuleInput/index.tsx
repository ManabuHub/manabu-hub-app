import * as React from "react";
import { Icon, Input, VStack, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Color } from "../../../constants/Color";
import { AntDesign } from '@expo/vector-icons';


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
    <VStack>
      <Text
        fontSize="xs"
        fontFamily="body"
        fontWeight={500}
        color={Color.TEXT}
        marginBottom="4px"
      >
        {label}
      </Text>
      <Input
        placeholder={placeholder}
        height="40px"
        width="300px"
        borderRadius="20px"
        backgroundColor={Color.WHITE_100}
        borderWidth={0}
        fontFamily="body"
        fontWeight={700}
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
    </VStack>
  );
};
