import * as React from 'react';
import './App.css';

import List from './List';
import logo from './logo.svg';

export interface IMyCustomProps {      
  items: string[],
  value: ''
}; 
class App extends React.Component<{}, IMyCustomProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      value: ''
    }
  }

  public onChange = (event: any) => {
    this.setState({value: event.target.value});
  }

  public onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.value],
      value: ''
    });
  }
  
  public onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    service.checkSpelling(this.state.value).then(response => {
      // tslint:disable-next-line:no-console
      this.setState({
        items: [...this.state.items, this.state.value],
        value: ''
      });
    })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Todo App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <List items={this.state.items}/>
        <form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.value} onChange={this.onChange} />
            <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
