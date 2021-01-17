
let idx = 0;
let _internalState = [];

const React = {
  createElement: () => {},
  Component: class {},
  // A very basic example of react use state. Real implementation is far more complex with unmounting components.
  useState: (initValue) => {
    // This assignment makes sure that even though setState is called from any component it always updates the right index.
    let _idx = idx;
    let state = _internalState[_idx] || initValue;
    const setState = (state) => {
      _internalState[_idx] = state;
    }
    return [state, setState];
  }
}

const ReactDOM = {
  render: () => {}
}

// The following react code gets converted in to something like this.
/*
const RenderProp = (props) => {
  const { render, comp } = props;
  return (
    <div>
      {render()}
      {comp}
    </div>
  );
};

class App extends React.Component {
  render() {
    return <RenderProp render={(prop) => <div />} comp={<div />}></RenderProp>;
  }
}

ReactDOM.render(
  <App toWhat="World" />,
  document.getElementById('root')
);
 */


//Converted code. Take a look at how the render function and component prop are converted. Different faces of the same coin.
const RenderProp = props => {
  const {
    render,
    comp
  } = props;
  return /*#__PURE__*/React.createElement("div", null, render(), comp);
};

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(RenderProp, {
      render: prop => /*#__PURE__*/React.createElement("div", null),
      comp: /*#__PURE__*/React.createElement("div", null)
    });
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, {
  toWhat: "World"
}), document.getElementById('root'));


// How React works -
/*

when a ReactDOM.render method is called a root element is created and is assigned a fixed Id. Say root id= 'some-id' and is used to check if the component is root or not.
Recursion is the main thing in react.
When the rendering order from the component is changed say it was returning a <button/> element but now due to some condition returns a <input/> all the underlying children of the componennt will
be remounted.

Refer here for a complete picture - https://reactjs.org/docs/implementation-notes.html


 */
