import styled from "styled-components";

interface ResultProps {
  textLength: number;
}

export const Result = styled.div<ResultProps>`
  font-size: ${({ textLength }) => (textLength > 12 ? "45px" : "55px")};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const Expression = styled.div`
  font-size: 25px;
  height: 30px;
  display: flex;
  align-items: center;
`;
export const Box = styled.div`
  padding: 5px;
  background-color: #fff;
`;
