import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PokemonCard from './components/PokemonCard';
import { getPokemon, getAllPokemons } from './services/pokemon';
import './App.css';

export default function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState('');
  const inicialUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData(){
      let response = await getAllPokemons(inicialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);

     

      setLoading(false);
    }

    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemons(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemons(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    console.log(data)
;    let _pokemonData = await Promise.all(
      data.map(async pokemon =>{
        let responsePokemonData = await getPokemon(pokemon.url);

        return responsePokemonData;
      })
    );

    setPokemonData(_pokemonData);
  };
  
  async function searchByName(){
    
      setLoading(true);
      setBusca(document.getElementById('buscaPoke').value);
      let response = await getAllPokemons(inicialUrl+'/'+busca);
      

      let pokeS = await loadPokemon(response.results);
      console.log(pokeS);

      setLoading(false);
    }
  
    

  return (
    <>
      <Navbar />
      <div>
<<<<<<< HEAD
        {loading ? <h1 style={{ textAlign: 'center' }}>Buscando Pokemons...</h1> : (
          <>
            <div className="btn">
              <button onClick={prev}>Anterior</button>
              <button onClick={next}>Próxima</button>
=======
        {loading ? <h1 style={{ textAlign: 'center' }}>Carregando...</h1> : (
          <>
            <div className="btn">
            <input type="text" placeholder="Buscar.." 
              name="buscar" id="buscaPoke" onChange={event => setBusca(event.target.value)}></input>
              <button type="submit" onClick={searchByName} ><i>Buscar</i></button>
            </div>
            <div className="btn">
              <button onClick={prev}>Anterior</button>
              <button onClick={next}>Próximo</button>
              
>>>>>>> b41338134876ef8d3134c8a6d4d3eb38e80bd5dc
            </div>
            
            
           
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <PokemonCard key={i} pokemon={pokemon} />
              })}
            </div>
            <div className="btn">
              <button onClick={prev}>Anterior</button>
<<<<<<< HEAD
              <button onClick={next}>Próxima</button>
=======
              <button onClick={next}>Próximo</button>
              
>>>>>>> b41338134876ef8d3134c8a6d4d3eb38e80bd5dc
            </div>
          </>
        )}
      </div>
    </>
  );
}