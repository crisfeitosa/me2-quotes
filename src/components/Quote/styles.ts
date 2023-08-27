import styled from "styled-components/native";

export const QuoteCard = styled.View`
  background-color: ${({ theme }: any) => theme.COLORS.PRIMARY_300};
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 32px;
`;

export const Text = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.PRIMARY_800};  
  font-size: 18px;
  margin-top: 24px;
`;

export const Author = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.PRIMARY_700};  
  font-size: 14px;
  margin-top: 8px;
`;
