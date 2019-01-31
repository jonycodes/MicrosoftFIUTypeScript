import * as React from 'react';
import './App.css';

import List from './List';
import logo from './logo.svg';
import { Config } from './utils/config';
import { Service } from './utils/service'

export interface IMyCustomProps {      
  items: string[]
  value: ''
}; 

const service = new Service(Config.key); 

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

  public async isCorrectSpelling(): Promise<boolean> {
    return await service.checkSpelling(this.state.value).then((response: any) => {
      if (response && response.flaggedToken.length > 0) {
        return false;
      } else {
        return true;
      }
    })
  }

  public onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (await this.isCorrectSpelling()) {
      this.setState({
        items: [...this.state.items, this.state.value],
        value: ''
      });
    }
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
