import React from "react";
import Navbar from "../Navbar";
import { GridItem, Grid } from "@chakra-ui/react";

function MainPage() {
  return (
    <Grid
      templateAreas={`"nav" "headerSection" "newsSection"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem bg="coral" area={"headerSection"}>
        headerSection
      </GridItem>
      <GridItem bg="teal" area={"newSection"}>
        newSection
      </GridItem>
    </Grid>
  );
}

export default MainPage;
