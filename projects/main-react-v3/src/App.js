import React from "react";
import {createRoot} from 'react-dom/client';

import "./index.scss";
import Example from "./components/example";

class App extends React.Component {

  render() {
    return (
      <div>
        <Example></Example>
      </div> 
    )
  }
}

export default class MainElement extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(<App/>);
  }
}

customElements.define('main-react-element', MainElement);