import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";


import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Stack direction={"row"}>
        {/* SideBar */}
        <SideBar />
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
