import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function AppLayout() {
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header />
        <Box flex="1">
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default AppLayout;
