import React from "react";
import Chats from "./Chats";
import { Stack } from "@mui/material";

const GeneralApp = () => {

  return (
    <>
    <Stack direction={'row'} width={'100%'}>
      {/* Chats */}
      <Chats />
    </Stack>
    </>
  );
};

export default GeneralApp;
