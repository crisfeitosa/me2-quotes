import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
`;

export const TitleHeader = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }: any) => theme.COLORS.BRAND};
`;
