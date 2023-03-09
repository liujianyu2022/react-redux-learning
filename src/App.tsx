import React from 'react';
import ClassExample from "./classExample/Example"
import FuncExample from "./functionExample/Example"
import HookExample from './hookExample/Example';

function App() {
  return (
    <div className="App">
      <ClassExample />
      <hr />
      <FuncExample />
      <hr />
      <HookExample />
    </div>
  );
}

export default App;
