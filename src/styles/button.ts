import styled from "styled-components";

interface BodyProps {
  value: string;
}

export const Body = styled.div<BodyProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 110px;
  background-color: ${(props) => (props.value === "=" ? "#E08119" : "#4d4d4d")};
  font-size: 40px;
  font-family: cursive;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;

    transition-duration: 1s;
  }
  &:focus {
    color: red;
  }
`;
