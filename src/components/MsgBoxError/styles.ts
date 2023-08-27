import styled from "styled-components/native";

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${({ theme }: any) => theme.COLORS.FAILURE};
`;
