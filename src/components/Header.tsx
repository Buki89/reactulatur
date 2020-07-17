import React from "react";
import { GrReactjs } from "react-icons/gr";
import { BsBatteryFull } from "react-icons/bs";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const Header = () => {
  return (
    <Box>
      <BsBatteryFull size={40} />
      <GrReactjs size={40} />
    </Box>
  );
};

export default Header;
