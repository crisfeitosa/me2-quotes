import styled from "styled-components/native";
import Constants from "expo-constants";
import { FlatList, FlatListProps } from "react-native";
import { QuoteProps } from "../../components/Quote";

const StatusBarHeight = Constants.statusBarHeight;

export const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${StatusBarHeight}px;
  justify-content: center;

  background: ${({ theme }: any) => theme.COLORS.BACKGROUND};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
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

export const ContainerListQuotes = styled.View`
  padding-top: 16px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const ListQuotes = styled(FlatList as new (props: FlatListProps<QuoteProps>) => FlatList<QuoteProps>)`
  margin-bottom: 90px;
`;
