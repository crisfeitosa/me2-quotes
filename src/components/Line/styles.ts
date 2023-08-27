import styled from "styled-components/native";

export const LineContainer = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }: any) => theme.COLORS.PRIMARY_500};
  margin-top: 16px;
  margin-bottom: 16px;
`;
