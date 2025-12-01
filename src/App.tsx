import { Grid, Box } from "@chakra-ui/react";
import BackgroundAnimation from "./app_components/BackgroundAnimation";
import SideBar from "./app_components/SideBar";

const App = () => {
  return (
    <section className="gen-cont">
      <BackgroundAnimation />
      <Grid px={'1rem'} h={"100vh"} templateColumns="25vw 1fr 100px" gap="4">
        <Box h={"100%"}>
          <SideBar />
        </Box>
        <Box h="100%" bg={"blue"}></Box>
        <Box h="100%" bg={"orange"}></Box>
      </Grid>
    </section>
  );
};

export default App;
