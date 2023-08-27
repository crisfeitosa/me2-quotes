import styled from "styled-components/native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 24px;
  padding-top: ${StatusBarHeight}px;
  justify-content: center;

  background: ${({ theme }: any) => theme.COLORS.BACKGROUND};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const ProfileContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px 32px;
  justify-content: center;
`;

export const ProfileImage = styled.Image`
  height: 50%;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 8px;
  color: ${({ theme }: any) => theme.COLORS.BRAND};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: normal;
  text-align: center;
  color: ${({ theme }: any) => theme.COLORS.TEXT_SECONDARY};
`;
