import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [datas, setDatas] = useState([]);

  // useEffect(() => {
  //   async function isData() {
  //     const respons = await fetch('https://jsonplaceholder.typicode.com/users');
  
  //     const data = await respons.json();

  //     console.log(data);
  //     setDatas(data);
  //   }

  //   isData();
  // }, []);

  // indexedDB.databases();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* <main>
        {datas.map((item) => (
          <div key={item.id}>
            {item.name}
          </div>
        ))}
      </main> */}
    </div>
  );
}

export default App;
