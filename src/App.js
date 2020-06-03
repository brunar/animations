import React, { Component } from "react";
import Transition from 'react-transition-group/Transition'; //can be any name for the component

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() =>
          this.setState(prevState => ({ showBlock: !prevState.showBlock }))}
        >Toggle</button>
        <br />
        {/* to show and remove element from the dom 
            mountOnEnter and unmountOnExit */}
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit>
          {/* {state => <p>{state}</p>} 
              To see the state entering/entered VS exiting/exited */}
          {state => (
            <div style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "10px auto",
              transition: "opacity 1s ease-out",
              opacity: state === 'exiting' ? 0 : 1
            }}></div>
          )}
        </Transition>
        {this.state.modalIsOpen ? <Modal show={this.state.modalIsOpen} closed={this.closeModal} /> : null}
        {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
