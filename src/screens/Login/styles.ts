import styled from "styled-components/native";

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 32px;
  color: ${({ theme }: any) => theme.COLORS.BRAND};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${({ theme }: any) => theme.COLORS.TEXT_SECONDARY};
`;

export const StyledFormArea = styled.View`
  width: 100%;
`;

export const StyledTextInput = styled.TextInput`
  background: ${({ theme }: any) => theme.COLORS.PRIMARY_300};;
  padding: 16px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 8px;
  font-size: 16px;
  height: 60px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const StyledInputLabel = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.TEXT_SECONDARY};
  font-size: 14px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 16px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 16px;
  top: 38px;
  position: absolute;
  z-index: 1;
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
