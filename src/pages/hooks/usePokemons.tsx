import { Key, useCallback, useEffect, useState } from "react";
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
        const pokes = await getPokes()
        setPokemons(pokes)
    },[])

    const addPokemon = (pokemon: FillableType):void =>{
        postPoke(pokemon)
        getPokemons()
    }

    const editPokemon = (pokemon: FillableType):void =>{
        editPoke(pokemon)
        getPokemons()
    }

    const deletePokemon = (pokemon: Pokemon):void =>{
        delPoke(pokemon.id as Key)
        setPokemons(prev=>prev?.filter(poke=>poke.id!==pokemon.id))
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