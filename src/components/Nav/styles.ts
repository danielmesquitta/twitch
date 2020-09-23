import styled from 'styled-components/native';

interface ITitleProps {
  selectedTitle: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  background: ${props => props.theme.primary};
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity<ITitleProps>`
  margin-right: 20px;
  margin-bottom: 7px;
  border-bottom-color: ${props => props.theme.purple};
  border-bottom-width: ${props => (props.selectedTitle ? '2px' : '0')};
`;

export const Title = styled.Text<ITitleProps>`
  color: ${props =>
    props.selectedTitle ? props.theme.purple : props.theme.black};

  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px 0;
`;
