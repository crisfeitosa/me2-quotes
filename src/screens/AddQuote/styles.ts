import styled from "styled-components/native";

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
`;

export const Header = styled.View`
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

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-top: 32px;
  margin-bottom: 16px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${({ theme }: any) => theme.COLORS.TEXT_SECONDARY};
`;

export const StyledFormArea = styled.View`
  width: 100%;
`;

export const StyledButtonLoading = styled.TouchableOpacity`
  padding: 16px;
  background: ${({ theme }: any) => theme.COLORS.BRAND};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  height: 60px;
`;
