import { useObserve } from "../hooks/Observe";
import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { IoMdPerson } from "react-icons/io";
import useStoreQuery from "./Store";
import { useEffect } from "react";

const About = () => {
  const { componentRef, isInView } = useObserve();
  const setActive = useStoreQuery((s) => s.setActiveNav);
  useEffect(() => {
        if (isInView) {
            setActive("About");
        }
    }, [isInView, setActive]);

  return (
    <>
      <Box
        ref={componentRef}
        p={"2rem"}
        w={"100%"}
        bg={"rgba(33, 34, 35, .95)"}
        borderRadius={"1.6rem"}
        mb={"3rem"}
      >
        <Stack alignItems={"flex-start"} gap={"2rem"}>
          <Flex
            alignItems={"center"}
            gap={".5rem"}
            p={".5rem 1.2rem"}
            border={"1px solid #3d3d3dff"}
            borderRadius={"1.5rem"}
          >
            <IoMdPerson size={".7rem"} fill={"#00BC91"} />
            <Text color={"white"} fontSize={".7rem"}>
              ABOUT ME
            </Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"2rem"}>
            <Heading
              fontWeight={"bold"}
              color={"white"}
              display={"flex"}
              gap={".4rem"}
              fontSize={"4xl"}
            >
              About{" "}
              <Heading fontSize={"4xl"} fontWeight={"bold"} color={"#00BC91"}>
                Me
              </Heading>
            </Heading>
            <Text color={"#999999"} fontSize={"1.1rem"}>
              Seasoned business professional with over a decade years of
              experience in co-founding and scaling startups across EdTech,
              AgriTech, and FinTech sectors. Proven track record in driving
              revenue growth, enhancing operational efficiency, and forging
              strategic partnerships. Passionate about leveraging technology to
              solve real-world problems and committed to fostering innovation in
              emerging markets.
            </Text>
            <HStack justifyContent={"space-between"} color={"#999999"}>
              <Text
                border={"1px dashed #585858ff"}
                p={".2rem 1rem"}
                borderRadius={"1rem"}
              >
                {"Microsoft Office (95%)"}
              </Text>
              <Text
                border={"1px dashed #585858ff"}
                p={".2rem 1rem"}
                borderRadius={"1rem"}
              >
                {"Project Mgt (90%)"}
              </Text>
              <Text
                border={"1px dashed #585858ff"}
                p={".2rem 1rem"}
                borderRadius={"1rem"}
              >
                {"Research (90%)"}
              </Text>
              <Text
                border={"1px dashed #585858ff"}
                p={".2rem 1rem"}
                borderRadius={"1rem"}
              >
                {"Research (85%)"}
              </Text>
            </HStack>
            <HStack w={"100%"} gap={"5.5rem"} justifyContent={"center"}>
              <Stack>
                <Flex w={"24vw"} justifyContent={"space-between"}>
                  <Box
                    display={"flex"}
                    w={"40%"}
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={".9rem"} color={"#999999"}>
                      Phone
                    </Text>
                    <Text fontSize={".9rem"} color={"#999999"}>
                      :
                    </Text>
                  </Box>
                  <Text
                    fontSize={".9rem"}
                    w={"50%"}
                    textAlign={"left"}
                    color={"white"}
                  >
                    {"+(234) 000 0000 000"}
                  </Text>
                </Flex>
                <Flex w={"24vw"} justifyContent={"space-between"}>
                  <Box
                    display={"flex"}
                    w={"40%"}
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={".9rem"} color={"#999999"}>
                      WhatsApp
                    </Text>
                    <Text fontSize={".9rem"} color={"#999999"}>
                      :
                    </Text>
                  </Box>
                  <Text
                    fontSize={".9rem"}
                    w={"50%"}
                    textAlign={"left"}
                    color={"white"}
                  >
                    {"+(234) 000 0000 000"}
                  </Text>
                </Flex>
                <Flex w={"24vw"} justifyContent={"space-between"}>
                  <Box
                    display={"flex"}
                    w={"40%"}
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={".9rem"} color={"#999999"}>
                      Language
                    </Text>
                    <Text fontSize={".9rem"} color={"#999999"}>
                      :
                    </Text>
                  </Box>
                  <Text
                    fontSize={".9rem"}
                    w={"50%"}
                    textAlign={"left"}
                    color={"white"}
                  >
                    English
                  </Text>
                </Flex>
              </Stack>
              <Stack>
                <Flex
                  alignItems={"center"}
                  w={"25vw"}
                  justifyContent={"space-between"}
                >
                  <Box
                    display={"flex"}
                    w={"40%"}
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={".9rem"} color={"#999999"}>
                      Email
                    </Text>
                    <Text fontSize={".9rem"} color={"#999999"}>
                      :
                    </Text>
                  </Box>
                  <Text
                    fontSize={".8rem"}
                    w={"50%"}
                    textAlign={"left"}
                    color={"white"}
                  >
                    Oscar.Obiora@arravo.co
                  </Text>
                </Flex>
                <Flex w={"25vw"} justifyContent={"space-between"}>
                  <Box
                    display={"flex"}
                    w={"40%"}
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={".9rem"} color={"#999999"}>
                      LinkedIn
                    </Text>
                    <Text fontSize={".9rem"} color={"#999999"}>
                      :
                    </Text>
                  </Box>
                  <Text
                    fontSize={".8rem"}
                    w={"50%"}
                    textAlign={"left"}
                    color={"white"}
                  >
                    linkedin.com/in/oscarobiora
                  </Text>
                </Flex>
                <Flex w={"25vw"} justifyContent={"space-between"}>
                  <Box
                    display={"flex"}
                    w={"40%"}
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={".9rem"} color={"#999999"}>
                      Portfolio
                    </Text>
                    <Text fontSize={".9rem"} color={"#999999"}>
                      :
                    </Text>
                  </Box>
                  <Text
                    fontSize={".9rem"}
                    w={"50%"}
                    textAlign={"left"}
                    color={"white"}
                  >
                    ***********
                  </Text>
                </Flex>
              </Stack>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Stack gap={"0"}>
                <Heading fontSize={"3xl"} fontWeight={"bold"} color={"#00BC91"}>
                  10+
                </Heading>
                <Text color={"#999999"}>Years Of Experience</Text>
              </Stack>
              <Stack gap={"0"}>
                <Heading fontSize={"3xl"} fontWeight={"bold"} color={"#00BC91"}>
                  30+
                </Heading>
                <Text color={"#999999"}>Handled Projects</Text>
              </Stack>
              <Stack gap={"0"}>
                <Heading fontSize={"3xl"} fontWeight={"bold"} color={"#00BC91"}>
                  100+
                </Heading>
                <Text color={"#999999"}>People Trained</Text>
              </Stack>
              <Stack gap={"0"}>
                <Heading fontSize={"3xl"} fontWeight={"bold"} color={"#00BC91"}>
                  20+
                </Heading>
                <Text color={"#999999"}>Consultancy Services</Text>
              </Stack>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default About;
