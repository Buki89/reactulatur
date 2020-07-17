import React, { useState } from "react";
import styled from "styled-components";
import Display from "./Display";
import Header from "./Header";

const Frame = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 5px 10px #888888;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 500px;
  height: 800px;
`;

const Body = () => {
  const [value, setValue] = useState(0);
  return (
    <Frame>
      <Header />
      <Display value={value} />
    </Frame>
  );
};

export default Body;
