import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  
const [data, setData] = useState(null);

function handleClick() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:6152/hello');
  xhr.onload = function() {
    if (xhr.status === 200) {
      //setData(JSON.parse(xhr.responseText));
      setData(xhr.responseText)

    }
  };
  xhr.send();
}

return (
  <div>
    <button onClick={handleClick}>Get Data</button>
   
   {data ? <div>data </div> : <div>Loading...</div>} 
  </div>
);
}

export default App;
