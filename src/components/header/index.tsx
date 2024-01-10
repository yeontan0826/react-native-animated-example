import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const Header = ({
  navigation,
  options,
  route,
}: NativeStackHeaderProps): JSX.Element => {
  const title = options.headerTitle ?? options.title ?? route.name;
  return (
    <Container>
      <BackButton activeOpacity={0.6} onPress={navigation.goBack}>
        <Ionicons name="arrow-back" size={24} color={'black'} />
      </BackButton>
      <Title>{title as string}</Title>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: black;
`;
