import { useEffect, useState } from "react";
import PokemonService from "../services/PokemonService";
import FillableType from "../types/FillableType";

export function usePokemons(){
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        PokemonService.getPokemons()
            .then((res)=>setPokemons(res))
    })

    const addPokemon = (pokemon: FillableType) =>{
        PokemonService.postPokemon(pokemon)
    }

    return {
        pokemons,
        addPokemon,
    }
}