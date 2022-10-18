import { Key, useCallback } from "react";
import FillableType from "../types/FillableType";
import Pokemon from "../types/PokemonType";

const PokemonService = () =>{

    const uri = 'https://bp-pokemons.herokuapp.com/'
    const extras = '?idAuthor=1/'

    const getPokemons = useCallback(async ():Promise<[Pokemon[], boolean]> => {
        const data = await fetch(uri+extras)
        if(data.ok){
            const pokes : Pokemon[] = await data.json()
            return [pokes, true]
        }
        return [[], false]
    },[])

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
    }

    return {
        getPokemons,
        postPokemon,
        deletePokemon,
        editPokemon
    }
}

export default PokemonService;