import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Dimensions } from 'react-native';
interface Props {
  finished?: boolean;
}

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  height: 220px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.main};
  justify-content: space-between;
  align-items: center;
`;

export const AppHeroContainer = styled.View`
  margin-top: 70px;
  width: 100%;  
  justify-content: center;
  align-items: center;
`;

export const TaskInputContainer = styled.View`
  width: 100%;
  margin: 0;
  margin-bottom: -32px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.title};
  margin-left: 5px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.shape};
  line-height: ${RFValue(20)}px;
  margin-top: 0;
`;

export const Body = styled.View`
  padding: 0 24px;
`;

export const TaskCountersContainer = styled.View`
  margin-top: 46px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const CounterContainer = styled.View<Props>`
  flex-direction: row; 
  padding: 4px 8px;
  border-radius: 6px;
  background-color: ${({ theme, finished }) => finished ? theme.colors.main : theme.colors.background_details};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.main};
`;

export const TasksInfo = styled.Text<Props>`
  margin-right: 10px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme, finished }) => finished ? theme.colors.background_details : theme.colors.main};
`;

export const TasksCount = styled.Text<Props>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme, finished }) => finished ? theme.colors.background_details : theme.colors.main};
`;

export const TasksListContainer = styled.View`
  height: ${Dimensions.get('window').height - 360}px;
  padding-top: 16px;
  padding-bottom: ${getBottomSpace() + 2}px;
`;

export const EmptyListContainer = styled.View`
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
`;

export const EmptyListMainMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(8)}px;
  line-height: ${RFValue(20)}px;
`;

export const EmptyListSecondaryMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(12)}px;
  text-align: center;
`;

export const EmptyListFeaturedTextIcon = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.shape_dark};
  font-size: ${RFValue(20)}px;
`;