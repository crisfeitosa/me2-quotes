import styled from "styled-components/native";

export const StyledButton = styled.TouchableOpacity`
  padding: 16px;
  background: ${({ theme }: any) => theme.COLORS.BRAND};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  height: 60px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.TEXT_PRIMARY};
  font-size: 16px;
  font-weight: bold;
`;
