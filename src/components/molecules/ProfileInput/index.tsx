import * as React from "react";
import { Input, VStack, Box, HStack } from "native-base";
import { Color, ColorType } from "../../../constants/Color";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { IconName } from "../../../constants/IconName";

interface ProfileInputProps {
  value: string;
  iconName: IconName;
  iconColor: ColorType;
  label: string;
  placeholder: string;
  isTextarea?: boolean;
  onChange: (text: string) => void;
}

export const ProfileInput: React.FC<ProfileInputProps> = ({
  value,
  iconName,
  iconColor,
  label,
  placeholder,
  isTextarea = false,
  onChange,
}) => {
  return (
    <VStack space="6px">
      <HStack alignItems="center" space="6px" flexDirection="row">
        <CustomMaterialIcon name={iconName} size="16px" color={iconColor} />
        <CustomText fontType={FontType.SMALL_BOLD} color={Color.TEXT}>
          {label}
        </CustomText>
      </HStack>
      <Box shadow={2}>
        {isTextarea ? (
          <Input
            multiline={true}
            backgroundColor={Color.WHITE_100}
            borderWidth="0"
            height="140px"
            width="100%"
            borderRadius="10px"
            fontFamily="body"
            fontWeight={500}
            placeholder={placeholder}
            placeholderTextColor={Color.MEDIUM_GRAY}
            fontSize="xs"
            value={value}
            onChangeText={(text) => {
              onChange(text);
            }}
            autoComplete="off"
            textAlignVertical="top"
            alignItems="flex-start"
            paddingTop="8px"
            lineHeight="20px"
            numberOfLines={5}
          />
        ) : (
          <Input
            backgroundColor={Color.WHITE_100}
            borderWidth="0"
            height="40px"
            width="100%"
            borderRadius="10px"
            fontFamily="body"
            fontWeight={500}
            placeholder={placeholder}
            placeholderTextColor={Color.MEDIUM_GRAY}
            fontSize="xs"
            value={value}
            onChangeText={(text) => {
              onChange(text);
            }}
          />
        )}
      </Box>
    </VStack>
  );
};
