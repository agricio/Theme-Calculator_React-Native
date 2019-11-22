
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

  module.exports = Controller;