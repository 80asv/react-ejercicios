import React from "react";
import CrudApi  from "./components/CrudApi";
import CrudApp from './components/CrudApp';
import SongSearch from "./components/SongSearch";

function App() {
  return (
      <div>
          <h1>Ejercicios con react</h1>
          <SongSearch/>
          <hr />
          <CrudApi/>
          <hr />
          <CrudApp/>
          <hr />
      </div>
  );
}

export default App;
