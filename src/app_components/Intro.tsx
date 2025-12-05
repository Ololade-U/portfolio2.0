import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import main from "../assets/main logo.webp";
import { FaCheckDouble } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import myPic from "../assets/MyPicture2.png";

const Intro = () => {
  return (
    <>
      <Box
        p={"2rem"}
        w={"100%"}
        bg={"rgba(33, 34, 35, .8)"}
        borderRadius={"1.6rem"}
      >
        <Stack alignItems={"flex-start"} gap={"1.5rem"}>
          <Flex
            alignItems={"center"}
            gap={".5rem"}
            p={".5rem 1.2rem"}
            border={"1px solid #3d3d3dff"}
            borderRadius={"1.5rem"}
          >
            <IoHome size={".7rem"} fill={"#00BC91"} />
            <Text color={"white"} fontSize={".7rem"}>
              INTRODUCTION
            </Text>
          </Flex>
          <HStack
            w={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex flexDirection={"column"} gap={"1.5rem"}>
              <Image src={main} w={"15rem"} />
              <Heading
                fontSize={"3xl"}
                fontWeight={"bold"}
                color={"white"}
                lineHeight={1}
              >
                Bringing Your <br />{" "}
                <Heading
                  fontSize={"3xl"}
                  fontWeight={"bold"}
                  color={"#00BC91"}
                  lineHeight={1}
                >
                  Dreams to Reality
                </Heading>{" "}
              </Heading>
              <Text color={"#999999"} maxW={"40ch"}>
                Welcome to the official website of Uthman Adebayo, a
                multidisciplinary specialist in product design, graphics & web
                design, software engineering, project management, and IT
                consultancy.
              </Text>
              <HStack gap={"2rem"}>
                <Flex alignItems={"center"} gap={".5rem"}>
                  <FaCheckDouble fill="#00BC91" />
                  <Text color={"#999999"}>Available for work</Text>
                </Flex>
                <Flex alignItems={"center"} gap={".5rem"}>
                  <FaCheckDouble fill="#00BC91" />
                  <Text color={"#999999"}>Full/Part Time Job</Text>
                </Flex>
              </HStack>
              <Button
                fontSize={"1.1rem"}
                w={"50%"}
                bg={"#00BC91"}
                py={"1.8rem"}
                borderRadius={"2rem"}
              >
                <FaTelegramPlane size={"1.3rem"} fill="white" />
                LET'S TALK
              </Button>
            </Flex>
            <Image borderRadius={"3rem"} w={"23vw"} src={myPic} h={"60vh"} />
          </HStack>
        </Stack>
      </Box>
    </>
  );
};

export default Intro;
