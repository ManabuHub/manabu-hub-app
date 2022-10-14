import * as React from "react";
import {
  ButtonColorScheme,
  ButtonStyles,
} from "../../../constants/ButtonColorScheme";
import { FontType } from "../../../constants/Font";
import { IconName } from "../../../constants/IconName";
import { Box, Spacer, Text, VStack, HStack, Divider,Pressable } from "native-base";
import { Color } from "../../../constants/Color";

interface PostPreviewProps {
    accountName:string;
    postTitle:string;
  text: string;
  fontType?: FontType;
  icon?: IconName;
  colorScheme?: ButtonColorScheme;
  iconSize?: number;
  isLoading?: boolean;
  isDisabled?: boolean;
//   onPress: () => void;
}

const PostPreview: React.FC<PostPreviewProps> = ({
  accountName,
  postTitle,
  text,
  colorScheme = ButtonColorScheme.PRIMARY,
  isDisabled = false,
//   onPress,押せる仕様にするかどうか。。。
}) => {
  return (
    // <Pressable
    //   onPress={onPress}
    //   width={154}
    //   height={44}
    //   display="flex"
    //   alignItems="center"
    //   justifyContent="center"
    //   borderRadius={22}
    //   borderWidth={1}
    //   borderColor={ButtonStyles[colorScheme].borderColor}
    //   backgroundColor={ButtonStyles[colorScheme].bgColor}
    //   shadow={3}
    //   disabled={isDisabled}
    // >
    //   <Text
    //     fontFamily="body"
    //     fontWeight={700}
    //     color={ButtonStyles[colorScheme].itemColor}
    //     fontSize="xl"
    //   >
    //     {text}
    //   </Text>
    // </Pressable>
    
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" padding={5} _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
      <VStack display="flex" alignItems="center" space="1px">
        <Box>
          <HStack alignItems="flex-start" >
            {/* <Avatar></Avatar> */}
            <Text
              fontFamily="body"
              color={Color.MAIN}
              fontWeight={500}
              fontSize="2xl"
            >
              {accountName}
            </Text>
          </HStack>
        </Box>
      <Divider my={2}/>
        <Box>
            <Text
              fontFamily="body"
              color={Color.MAIN}
              fontWeight={500}
              fontSize="3xl"
            >
              {postTitle}
            </Text>

        </Box>
      <Divider my={2}/>
        <Box>
            <Text
              fontFamily="body"
              color={Color.MAIN}
              fontWeight={500}
            >
            {text}
            </Text>

        </Box>
        
      </VStack>
      
    </Box>
  );
};

const memoizedPostPreview = React.memo(PostPreview);
export { memoizedPostPreview as PostPreview };
