import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);



function Example() {


const [data, setData] = useState(null);

function handleClick() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.example.com/data');
  xhr.onload = function() {
    if (xhr.status === 200) {
      setData(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
}

return (
  <div>
    <button onClick={handleClick}>Get Data</button>
    {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
  </div>
);

}