import {
  AbsoluteCenter,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  ProgressCircle,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import myImage from "../assets/MyImage.png";
import TextRotator from "./TextRotator";

const SideBar = () => {
  return (
    <>
      <Stack
        w={"100%"}
        h={"100%"}
        alignItems={"center"}
        bg={"#212223"}
        p={".5rem 0"}
      >
        <Flex
          mb={"1rem"}
          gap={"0"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box
            w={"9rem"}
            h={"9rem"}
            border={"5px solid #2F2F2F"}
            borderRadius={"50%"}
          >
            <Image w={"100%"} borderRadius={"50%"} h={"100%"} src={myImage} />
          </Box>
          <Heading color={"white"} fontWeight={"bolder"}>
            Uthman Adebayo
          </Heading>
          <TextRotator />
        </Flex>
        <Separator borderColor={"#3d3d3dff"} w={"80%"} />
        <Box
          display={"flex"}
          mb={".9rem"}
          gap={".3rem"}
          flexDirection={"column"}
          w={"80%"}
        >
          <Flex w={"100%"} justifyContent={"space-between"}>
            <Text fontSize={".9rem"} color={"white"}>
              Residence:
            </Text>
            <Text fontSize={".9rem"} color={"#999999"}>
              Nigeria, Uk
            </Text>
          </Flex>
          <Flex w={"100%"} justifyContent={"space-between"}>
            <Text fontSize={".9rem"} color={"white"}>
              Location:
            </Text>
            <Text fontSize={".9rem"} color={"#999999"}>
              Lagos/London
            </Text>
          </Flex>
          <Flex w={"100%"} justifyContent={"space-between"}>
            <Text fontSize={".9rem"} color={"white"}>
              Hobbies:
            </Text>
            <Text fontSize={".9rem"} color={"#999999"}>
              Coding, Video Games
            </Text>
          </Flex>
        </Box>
        <Box
          p={"1rem 1rem .2rem"}
          w={"93%"}
          borderRadius={"1rem"}
          bg={"#2D2E2F"}
          h={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={".5rem"}
        >
          <Heading fontSize={"md"} color={"white"}>
            Skills
          </Heading>
          <HStack justifyContent={"space-between"}>
            <Stack alignItems={"center"} gap={".5rem"}>
              <ProgressCircle.Root
                borderRadius={"50%"}
                w={"2.5rem"}
                color={"#e3e3e3"}
                fontWeight={"bolder"}
                position={"relative"}
                size={"md"}
                value={90}
                colorPalette={"green"}
              >
                <ProgressCircle.Circle css={{ "--thickness": "2px" }}>
                  <ProgressCircle.Track />
                  <ProgressCircle.Range />
                </ProgressCircle.Circle>
                <AbsoluteCenter>
                  <ProgressCircle.ValueText />
                </AbsoluteCenter>
              </ProgressCircle.Root>
              <Text color={"white"}>React</Text>
            </Stack>
            <Stack alignItems={"center"} gap={".5rem"}>
              <ProgressCircle.Root
                borderRadius={"50%"}
                w={"2.5rem"}
                color={"#e3e3e3"}
                fontWeight={"bolder"}
                position={"relative"}
                size={"md"}
                value={80}
                colorPalette={"green"}
              >
                <ProgressCircle.Circle css={{ "--thickness": "2px" }}>
                  <ProgressCircle.Track />
                  <ProgressCircle.Range />
                </ProgressCircle.Circle>
                <AbsoluteCenter>
                  <ProgressCircle.ValueText />
                </AbsoluteCenter>
              </ProgressCircle.Root>
              <Text color={"white"}>NextJs</Text>
            </Stack>
            <Stack alignItems={"center"} gap={".5rem"}>
              <ProgressCircle.Root
                borderRadius={"50%"}
                w={"2.5rem"}
                color={"#e3e3e3"}
                fontWeight={"bolder"}
                position={"relative"}
                size={"md"}
                value={60}
                colorPalette={"green"}
              >
                <ProgressCircle.Circle css={{ "--thickness": "2px" }}>
                  <ProgressCircle.Track />
                  <ProgressCircle.Range />
                </ProgressCircle.Circle>
                <AbsoluteCenter>
                  <ProgressCircle.ValueText />
                </AbsoluteCenter>
              </ProgressCircle.Root>
              <Text color={"white"}>NodeJs</Text>
            </Stack>
            <Stack alignItems={"center"} gap={".5rem"}>
              <ProgressCircle.Root
                borderRadius={"50%"}
                w={"2.5rem"}
                color={"#e3e3e3"}
                fontWeight={"bolder"}
                position={"relative"}
                size={"md"}
                value={65}
                colorPalette={"green"}
              >
                <ProgressCircle.Circle css={{ "--thickness": "2px" }}>
                  <ProgressCircle.Track />
                  <ProgressCircle.Range />
                </ProgressCircle.Circle>
                <AbsoluteCenter>
                  <ProgressCircle.ValueText />
                </AbsoluteCenter>
              </ProgressCircle.Root>
              <Text color={"white"}>Python</Text>
            </Stack>
          </HStack>
          <Button
            mt={".2rem"}
            py={"1.3rem"}
            borderRadius={"2rem"}
            alignSelf={"center"}
            w={"90%"}
            bg={"#00BC91"}
            _hover={{bg : 'rgba(2, 116, 90, 1)'}}
          >
            VIEW/DOWNLOAD CV
          </Button>
          <Button
            mt={".2rem"}
            py={"1.3rem"}
            borderRadius={"2rem"}
            alignSelf={"center"}
            w={"90%"}
            bg={"none"}
            border={"1px solid #00BC91"}
            color={"#00BC91"}
            _hover={{ color: "white", bg: "#00BC91" }}
          >
            View LinkedIn Profile
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default SideBar;
