import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    let getAllData = async (url = '') => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error();
        console.log(response.ok);
      } catch (err) {
        console.error(err);
      }
    };
    return () => getAllData('https://pokeapi.co/api/v2/pokemon');
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
