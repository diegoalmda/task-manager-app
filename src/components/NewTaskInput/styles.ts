import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../styles/theme';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View.attrs({
  shadowColor: `${theme.colors.text}`,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
})`
  height: 56px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background_details};
  margin-bottom: 8px;
  border-width: 2px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.main};
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  background-color: transparent;
`;

export const AddButton = styled.TouchableOpacity<Props>`
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: `${theme.colors.text_placeholder}`,
})`
  flex: 1;
  height: 46px;
  background-color: ${({ theme }) => theme.colors.background_details};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding-top: 10px;
  
  border-bottom-color: transparent;
  border-bottom-width: 1px;

  margin-left: 23px;

  ${({ isFocused, theme }) => isFocused && css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.shape};
  `};
`;
