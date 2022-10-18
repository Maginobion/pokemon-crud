import { render, screen } from '@testing-library/react';
import PokeList from './pokeList';

// jest.mock("./../../services/PokemonService.tsx")

describe('pokeList', ()=>{
    test('renders',async () => {
        render(<PokeList />);
        const linkElement = await screen.findByText('Nombre');
        expect(linkElement).toBeInTheDocument();
    });
})