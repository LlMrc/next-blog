


// import { Dispatch, SetStateAction, useState } from "react";
import SideBar from "./SideBar";
import { Box, PaletteMode, Switch, Typography, createTheme } from "@mui/material";
import styled from "@emotion/styled";
import { PropertyAssignment } from "typescript";

interface Props {
  children: React.ReactNode;

}

const Layout = styled("div")({
  display: "flex",
  position: "relative",
  height: "100vh",
  gap: "2rem",
  border: " 1px",
});

const SwitchStyle = styled('div')({

})

export default function BaseLayout({children}: Props) {

    // const [mode, setMode] = useState<PaletteMode>("light")

    // const darkTheme = createTheme({
    //     palette: {
    //       mode: mode 
    //      }
    //   });
    
  return (
    <>
      <Layout>
     
        <SideBar/>
    

         {children}
      </Layout>
     
    </>
  );
}
