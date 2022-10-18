import { Key, useCallback } from "react";
import FillableType from "../types/FillableType";
import Pokemon from "../types/PokemonType";

const PokemonService = () =>{

    const uri = 'https://bp-pokemons.herokuapp.com/'
    const extras = '?idAuthor=1/'

    const getPokemons = async ():Promise<Pokemon[]> => {
        const data : Pokemon[] = await fetch(uri+extras).then(res=>res.json())
        return data
    }

    const postPokemon = async (pokemon:FillableType, id?:Key|undefined) =>{
        return await fetch(uri+extras+id,{
            method: 'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(pokemon),
        }).catch(err=>console.log(err))
    }   

    const deletePokemon = async (id:Key) => {
        return await fetch(uri+id,{
            method:'delete'
        }).catch(err=>console.log(err))
    }

    const editPokemon = async (pokemon:FillableType) =>{
        return await fetch(uri+pokemon.idPoke,{
            method: 'PUT',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(pokemon),
        }).catch(err=>console.log(err))
        .then(()=>window.alert('Editado con éxito.'))
        .finally(()=>window.location.reload()) 
    }

    return {
        getPokemons,
        postPokemon,
        deletePokemon,
        editPokemon
    }
}

export default PokemonService;