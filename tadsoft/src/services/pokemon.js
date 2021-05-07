export async function getAllPokemons(url){
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
    })
};

export async function getPokemon(url){
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
    })
};

<<<<<<< HEAD

=======
export async function searchPokemon(url){
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
    })
};
>>>>>>> b41338134876ef8d3134c8a6d4d3eb38e80bd5dc
