import styled from "styled-components/native";

export const Container = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: ${({ theme }: any) => theme.COLORS.INFO};
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
