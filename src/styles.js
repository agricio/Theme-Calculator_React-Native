import styled from 'styled-components/native';

export const ContainerTheme = styled.View`
    flex: 1;
`;

export const ViewCalculation = styled.View`
    flex: 1;
    padding: 2px;
    background-color:${props => props.color};
    justify-content: center;
    align-items: flex-end;
`;

export const TouchableOpacity1 = styled.TouchableOpacity`
    flex: 1;
    height: 100;
    width: 80;
    alignItems: center;
    justifyContent: center;
    alignSelf: stretch;
    background-color: ${props => props.color};
    borderRadius: 90;
    borderWidth: 11;
    borderColor: transparent;
    shadowColor: black;
`;

export const TbtnTex = styled.Text`
    color: ${props => props.colorText};
    fontSize: 35;
    alignContent: stretch;
    fontFamily: print_bold_tt;
`;

export const ThemeSwitch = styled.View`
    height: 50px;
    background-color: ${props => props.color};
    justifyContent: center;
`;

export const RowTheme = styled.View`
    flexDirection: row;
    justifyContent: space-around;
`;

export const ResultTheme = styled.View`
    flex: 2;
    padding: 10px;
    backgroundColor: ${props => props.color};
    justifyContent: center;
    alignItems: flex-end;
`;

export const TextResultTheme = styled.Text`
    color: ${props => props.colorText};
    fontSize: 55;
    fontFamily: print_bold_tt;
`;

export const CalculationTextTheme = styled.Text`
    color: ${props => props.colorText};
    fontSize: 24;
    fontFamily: print_bold_tt;
`;

export const ButtonsTheme = styled.View`
    flex: 7;
    flexDirection: row;
`;

export const NumbersTheme = styled.View`
    flex: 3;
    background-color: ${props => props.color};
    justifyContent: space-around;
`;

export const OperationsTheme = styled.View`
    flex: 1;
    background-color: ${props => props.color};
    justifyContent: space-around;
`;