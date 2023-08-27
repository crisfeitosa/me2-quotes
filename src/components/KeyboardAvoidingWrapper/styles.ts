import styled from "styled-components/native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const StyledContainer = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  padding-top: ${StatusBarHeight}px;
  justify-content: center;

  background: ${({ theme }: any) => theme.COLORS.BACKGROUND};
`;
