import React from 'react';
import {Switch} from 'react-native';
import {
  ViewCalculation,
  TouchableOpacity1,
  TbtnTex,
  ThemeSwitch,
  RowTheme,
  ResultTheme,
  TextResultTheme,
  CalculationTextTheme,
  ButtonsTheme,
  NumbersTheme,
  OperationsTheme,
  ContainerTheme,
} from './src/styles';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      resultText: '',
      output: '',
      switchValue: false,
    };
  }

  calculateResult() {
    if (['+', '-', '/', '*'].indexOf(this.state.resultText.slice(-1)) !== -1)
      {return;}
    const expression = this.state.resultText;
    this.setState({
      output: eval(expression),
    });
  }

  buttonPressed(num) {
    if (num == '=') {
      return this.calculateResult();
    }

    if (num == '.' && this.state.resultText.split('').pop() == '.') {return;}
    this.setState({resultText: this.state.resultText + num});
  }

  operate(op) {
    switch (op) {
      case 'Del':
        this.setState({resultText: this.state.resultText.slice(0, -1)});
        break;
      case '+':
        if (!this.state.resultText) {return;}
        if (
          ['+', '-', '/', '*'].indexOf(this.state.resultText.slice(-1)) !== -1
        )
          {return;}
        this.setState({resultText: this.state.resultText + '+'});
        break;
      case '*':
        if (!this.state.resultText) {return;}
        if (
          ['+', '-', '/', '*'].indexOf(this.state.resultText.slice(-1)) !== -1
        )
          {return;}
        this.setState({
          resultText: this.state.resultText + '*',
        });
        break;
      case '-':
        if (!this.state.resultText) {return;}
        if (
          ['+', '-', '/', '*'].indexOf(this.state.resultText.slice(-1)) !== -1
        )
          {return;}
        this.setState({
          resultText: this.state.resultText + '-',
        });
        break;
      case '/':
        if (!this.state.resultText) {return;}
        if (
          ['+', '-', '/', '*'].indexOf(this.state.resultText.slice(-1)) !== -1
        )
          {return;}
        this.setState({
          resultText: this.state.resultText + '/',
        });
        break;
    }
  }

  render() {
    let rows = [];
    let buttons = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['.', '0', '='],
    ];
    buttons.forEach(elems => {
      let row = [];
      elems.forEach(elem => {
        row.push(
          <TouchableOpacity1
            key={elem}
            onPress={() => this.buttonPressed(elem)}
            color={this.state.switchValue? "#f4fdfc":"#2E3B51"}>
            <TbtnTex colorText={this.state.switchValue? "#323943":"#88959B"}>{elem}</TbtnTex>
          </TouchableOpacity1>,
        );
      });
      rows.push(<RowTheme key={elems[0]}>{row}</RowTheme>);
    });

    let operations = ['Del', '+', '-', '*', '/'];
    let ops = [];
    operations.forEach(button => {
      ops.push(
        <TouchableOpacity1
          key={button}
          onPress={() => this.operate(button)}
          color={this.state.switchValue? "#f4fdfc":"#212B44"}>
          <TbtnTex colorText={this.state.switchValue? "#323943":"#17D3A3"} >{button}</TbtnTex>
        </TouchableOpacity1>,
      );
    });

    return (
      <ContainerTheme>
         <ThemeSwitch color={this.state.switchValue? "#f4fdfc":"#212b44"}>
            <Switch value={this.state.switchValue} onValueChange={(v)=>this.setState({switchValue:v})}/>
          </ThemeSwitch>
        <ViewCalculation color={this.state.switchValue? "#f4fdfc":"#212b44"}>
          <CalculationTextTheme colorText={this.state.switchValue? "#00AC81":"#88959B"}>{this.state.resultText}</CalculationTextTheme>
        </ViewCalculation>
        <ResultTheme color={this.state.switchValue? "#f4fdfc":"#212b44"}>
          <TextResultTheme colorText={this.state.switchValue? "#88959B":"#00AC81"}>{this.state.output}</TextResultTheme>
        </ResultTheme>
        <ButtonsTheme>
          <NumbersTheme color={this.state.switchValue? "#FFFFFF":"#2E3851"}>{rows}</NumbersTheme>
          <OperationsTheme color={this.state.switchValue?  "#FFFFFF":"#2E3851"}>{ops}</OperationsTheme>
        </ButtonsTheme>
      </ContainerTheme>
    );
  }
}

export default App;
