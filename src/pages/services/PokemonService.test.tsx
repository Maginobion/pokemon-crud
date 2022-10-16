import { render, screen } from "@testing-library/react"
import { enableFetchMocks } from 'jest-fetch-mock'
import PokemonService from "./PokemonService"

jest.mock("./PokemonService")

describe('PokemonService',()=>{
    test('works',()=>{
        const items = PokemonService.getPokemons()   
        expect(PokemonService.getPokemons).toHaveBeenCalledTimes(1)
    })
})