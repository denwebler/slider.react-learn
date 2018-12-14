import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
        <div className="wrapper">
          <SayHello hello="Hello" anything="World," guys="People!" smile=":D" linkMe="https://www.instagram.com/denis.hrudin/" linkReact="https://reactjs.org/docs/create-a-new-react-app.html"/>
        </div>
    );
  }
}

function SayHello(props) {
  return (
      <div>
        <h1> {props.hello} {props.anything} {props.guys} {props.smile}</h1>
        <a href={props.linkMe}> Created by Denis Hrudin </a>
        <a href={props.linkReact}> on the basis of React.js </a>
      </div>
    )
}

export default App;
