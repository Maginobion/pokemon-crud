import React from 'react';
import { render, screen } from '@testing-library/react';
import PokeList from './pages/components/pokeList/pokeList';
import PokeFinder from './pages/components/pokeFinder/pokeFinder';


describe('app', () => {
  test('renders pokeList',()=>{
    render(<PokeList />);
    const linkElement = screen.getByText(/Listado de Pokemon/i);
    expect(linkElement).toBeInTheDocument();
  }); 
  test('renders pokeItem',()=>{
    render(<PokeFinder handleChange={jest.mock} text={''} />);
    const linkElement = screen.getByPlaceholderText(/Buscar/i);
    expect(linkElement).toBeInTheDocument();
  });   
});
