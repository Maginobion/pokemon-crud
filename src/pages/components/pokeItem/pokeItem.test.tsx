import { findByText, render, screen } from '@testing-library/react';
import Pokemon from '../../types/PokemonType';
import PokeItem from './pokeItem';

let a : Pokemon = {
    name:'Test',
    image: 'https://img.pokemondb.net/artwork/pikachu.jpg',
    attack: 50,
    defense: 50,
    hp: 90,
    id: 400,
    id_author:1, 
    type:'Fuego'
}

const xd = () =>{

}

describe('pokeItem', () => {
    test('rendering',async ()=>{
        render(
            <table>
                <tbody>
                    <PokeItem
                        pokemon={a}
                        deletePokemon={()=>xd()}
                        setSubOpen={()=>xd()} 
                        setChosenPokemon={()=>xd()}/>
                </tbody>
            </table>           
        );
        const linkElement = await screen.findByText('Test');
        expect(linkElement).toBeInTheDocument();
    })
    
});