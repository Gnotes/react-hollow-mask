## React Hollow Mask

> React 引导层示例

### 代码示例

```bash
npx create-react-app hollow-mask-demo
```

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HollowMask, { Rect, Content } from '@xing.he/react-hollow-mask';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLayer: false
    };
  }

  componentDidMount() {
    setTimeout(this.showLayer, 0);
  }

  showLayer = () => {
    this.setState({ showLayer: true });
  };

  hideLayer = () => {
    this.setState({ showLayer: false });
  };

  render() {
    const { showLayer } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="app-hollow">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
        <div onClick={this.showLayer}>Show Layer</div>
        <HollowMask visible={showLayer}>
          <Rect selector=".App-logo"></Rect>
          <Rect selector=".app-hollow"></Rect>
          <Rect selector=".App-link"></Rect>
          <Content>
            <div onClick={this.hideLayer}>Hide Layer</div>
          </Content>
        </HollowMask>
      </div>
    );
  }
}

export default App;
```
