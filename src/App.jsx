import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    let getData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const responseJson = await response.json();
      console.log(responseJson.results);
    };
    getData();
  }, []);

  return (
    <>
      <div style={{ width: '100vw', backgroundColor: 'red' }}>
        <table className="table" style={{ width: '90%' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
            </tr>
          </thead>
          <tbody>
            {pokeData.map((specie, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td> {specie.name} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
