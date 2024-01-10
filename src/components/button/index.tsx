import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

const Button = ({
  children,
  ...buttonProps
}: TouchableOpacityProps): JSX.Element => {
  return (
    <OpacityButton {...buttonProps} activeOpacity={0.6}>
      <Label>{children}</Label>
    </OpacityButton>
  );
};

export default Button;

const OpacityButton = styled(TouchableOpacity)`
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #a9c7f2;
`;

const Label = styled.Text`
  font-size: 14px;
  color: black;
`;
