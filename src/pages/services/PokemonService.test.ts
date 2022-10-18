import { render, screen } from "@testing-library/react"
import { enableFetchMocks } from 'jest-fetch-mock'
import usePokemons from "../hooks/usePokemons"
import PokemonService from "./PokemonService"

// jest.mock("./PokemonService")

describe('PokemonService',()=>{
    test('works', async ()=>{
        const { getPokemons } = PokemonService()
        
        const getPokesMock = jest.fn(getPokemons)

        const pokemons = await getPokesMock()

        expect(pokemons.length).toBe(4)
        expect(getPokesMock).toHaveBeenCalledTimes(1)
    })
})