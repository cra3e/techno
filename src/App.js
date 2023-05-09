import React, {createContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MaterialTechno from "./components/MaterialTechno";
import Tabs from "./components/tabs";

export const AppContext = createContext();

function App() {
  const [inputFields, setInputFields] = useState({ field1: '', field2: '', field3: '' , mountOrNot: ''});
    const [image1, setImage1] = useState(null);

  return (
      <AppContext.Provider value={{ inputFields, setInputFields, image1, setImage1 }}>
        <Tabs/>
      </AppContext.Provider>
  );
}

export default App;
