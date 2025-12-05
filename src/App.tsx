import { Grid, Box } from "@chakra-ui/react";
import BackgroundAnimation from "./app_components/BackgroundAnimation";
import SideBar from "./app_components/SideBar";
import NavBar from "./app_components/NavBar";
import MainPage from "./app_components/MainPage";

const App = () => {
  return (
    <section className="gen-cont">
      <BackgroundAnimation />
      <Grid px={"1rem"} h={"100vh"} templateColumns="25vw 1fr 100px" gap="4">
        <Box h={"100%"}>
          <SideBar />
        </Box>
        <Box zIndex={'2000'} h="100%" pt={'4rem'} overflowY={'auto'} scrollbar={'hidden'}>
          <MainPage/>
        </Box>
        <Box h="100%">
          <NavBar />
        </Box>
      </Grid>
    </section>
  );
};

export default App;
