import React from 'react';
import Todos from './components/Todos';
import Buttons from './components/Buttons';


function App() {
  return (
    <div className="App">
     <Todos items={["MukhammadBobur", "Pakhriev"]}/>
     <Buttons/>
    </div>
  );
}

export default App;
