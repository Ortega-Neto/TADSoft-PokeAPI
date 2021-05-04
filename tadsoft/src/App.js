import React, {useState, useEffect} from 'react';
import{ getAllPokemons } from './services/pokemon';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevtUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const inicialUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData(){
      let response = await getAllPokemons(inicialUrl);
      
      console.log(response);

      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setLoading(false);
    }

    fetchData();
  }, [])

  return (
    <div >
      { loading ? <h1>Loading...</h1> : (
        <h1> PokeDados recebidos!</h1>
      )}
    </div>
  );
}

export default App;
