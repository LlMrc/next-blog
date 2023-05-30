"use client"

import { Box, Stack,  styled } from "@mui/material";
import SideBar from "./SideBar";
import NavBar from "./NavBar";


interface Props {
  children: React.ReactNode;
}

const StyleToolBar = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));



export default function BaseLayout({ children }: Props) {
  // const [mode, setMode] = useState<PaletteMode>("light")

  // const darkTheme = createTheme({
  //     palette: {
  //       mode: mode
  //      }
  //   });
 
  return (
    <>
      <NavBar />
    <StyleToolBar/>
      <Stack
        direction="row"
        sx={{
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
          height="100vh"
          width={275}
        >
        
          <SideBar />
          
        </Box>
        

        <Box flex={1}>{children} </Box>
      </Stack>
    </>
  );
}
