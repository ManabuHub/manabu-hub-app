import * as React from "react";
import { Input, VStack, Box } from "native-base";
import { Color } from "../../../constants/Color";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { IconName } from "../../../constants/IconName";

interface CapsuleInputProps {
  value: string;
  iconName: IconName;
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
            <Box ml="20px">
              <CustomMaterialIcon
                name={iconName}
                size="20px"
                color={Color.MEDIUM_GRAY}
              />
            </Box>
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
