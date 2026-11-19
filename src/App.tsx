import { Box } from "@mui/material";
import Hero from "./sections/home/Hero";
import Header from "./components/layouts/Header";

function App() {
  return (
    <Box>
      <Header />

      <Box component="main">
        <Hero />
      </Box>
    </Box>
  );
}

export default App;
