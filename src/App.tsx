import React from 'react';
import './styles/_main.scss';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
