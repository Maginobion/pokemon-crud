import { findByText, render, screen } from '@testing-library/react';
import Pokemon from '../../types/PokemonType';
import PokeForm from './pokeForm';

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
    test('render edit mode',async ()=>{
        render(
            <PokeForm
                pokemon={a}
                method={()=>xd()}
                setOpen={()=>xd()}
                edit
                id={a.id}
            />       
        );
        const linkElement = await screen.findByText('Editar Pokemon');
        expect(linkElement).toBeInTheDocument();
    }),
    test('render add mode',async ()=>{
        render(
            <PokeForm
                pokemon={a}
                method={()=>xd()}
                setOpen={()=>xd()}
                id={a.id}
            />       
        );
        const linkElement = await screen.findByText('Nuevo Pokemon');
        expect(linkElement).toBeInTheDocument();
    })    
});