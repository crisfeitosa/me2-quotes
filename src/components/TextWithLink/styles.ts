import styled from "styled-components/native";

export const TextWithLinkContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

export const Text = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${({ theme }: any) => theme.COLORS.PRIMARY_500};
  font-size: 16px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.BRAND};
  font-size: 16px;
`;
