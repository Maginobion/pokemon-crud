import { render, screen } from '@testing-library/react';
import PokeFinder from './pokeFinder';

https://bp-pokemons.herokuapp.com/

describe('pokeFinder', ()=>{
    test('rendering', () => {
        render(<PokeFinder text={'abc'} handleChange={()=>{}}/>);
        const linkElement = screen.getByPlaceholderText(/Buscar/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('', async () => {
        
    })
})
