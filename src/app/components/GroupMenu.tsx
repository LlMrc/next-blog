"use client";

import { Box, Divider, Typography } from "@mui/material";

import {
  Diversity1,
  DownhillSkiing,
  DriveEta,
  Euro,
  Home,
  Movie,
  TravelExplore,
  Vrpano,
} from "@mui/icons-material";
import SideMenu from "./commun/SideMenu";
import Link from "next/link";

export default function GroupMenu() {
  return (
    <>
      <Box
        sx={{
          width: "20%",
          maxHheight: "100vh",
          p: "14px",
          backgroundColor: "#27374D",
          color: "white",
          borderRadius: 2,
          display: { md: "block", xs: "none" },
        }}
      >
        <Typography m={2} variant="h4" textTransform="uppercase">
          CATEGORY
        </Typography>

        <Divider variant="middle" sx={{ background: "white" }} />
        <Box m={2} />
        <Link
          href="/group/pages/photography"
          style={{ textDecoration: "none" }}
        >
          <SideMenu icon={<Vrpano />} title="Photography" />
        </Link>

        <Link href="/group/pages/finance" style={{ textDecoration: "none" }}>
          <SideMenu icon={<Euro />} title="finance" />
        </Link>

        <Link href="/group/pages/travel" style={{ textDecoration: "none" }}>
          <SideMenu icon={<TravelExplore />} title="Travel" />
        </Link>

        <Link href="/group/pages/cinema" style={{ textDecoration: "none" }}>
          <SideMenu icon={<Movie />} title="Cinema" />
        </Link>

        <Link href="/group/pages/sport" style={{ textDecoration: "none" }}>
          <SideMenu icon={<DownhillSkiing />} title="Sport" />
        </Link>

        <Link href="/group/pages/art" style={{ textDecoration: "none" }}>
          <SideMenu icon={<Diversity1 />} title="Street Art" />
        </Link>

        <Link href="/group/pages/car" style={{ textDecoration: "none" }}>
          <SideMenu icon={<DriveEta />} title="Car trick" />
        </Link>
      </Box>
    </>
  );
}
