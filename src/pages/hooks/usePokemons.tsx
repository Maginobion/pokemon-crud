import { useCallback, useEffect, useState } from "react";
import PokemonService from '../services/PokemonService'
import FillableType from "../types/FillableType";
import Pokemon from "../types/PokemonType";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>()

    const { 
        getPokemons: getPokes, 
        postPokemon: postPoke, 
        editPokemon: editPoke, 
        deletePokemon: delPoke 
    } = PokemonService()

    const getPokemons = useCallback(async (): Promise<any>=>{
        const [pokes, isok] = await getPokes()
        if (isok) setPokemons(pokes)
    },[getPokes])

    const addPokemon = (pokemon: FillableType):void =>{
        postPoke(pokemon).then(()=>getPokemons())
    }

    const editPokemon = (pokemon: FillableType):void =>{
        editPoke(pokemon).then(()=>getPokemons())
    }

    const deletePokemon = (pokemon: Pokemon):void =>{
        delPoke(pokemon.id).then(()=>getPokemons())
    }

    useEffect(() => {
        getPokemons()
    },[getPokemons])

    return {
        pokemons,
        getPokemons,
        addPokemon,
        editPokemon,
        deletePokemon
    }
}

export default usePokemons