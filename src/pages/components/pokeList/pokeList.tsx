import styles from './pokeList.module.css'
import PokemonService from '../../services/PokemonService';
import Pokemon from '../../types/PokemonType'
import PokeItem from '../pokeItem/pokeItem';
import PokeFinder from '../pokeFinder/pokeFinder';
import React, { useState } from 'react';
import PokeForm from '../pokeForm/pokeForm';

const PokeList = () =>{

    const pokemons = PokemonService.getPokemons()
    const [text, setText] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false)
    const [subOpen, setSubOpen] = useState<boolean>(false)
    const [chosenPokemon,setChosenPokemon] = useState<Pokemon>()
    const filteredPokemons = pokemons?.filter(poke => poke.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return(
        <main>
            { subOpen && <div className={styles.back}></div> }
            <div className={styles.flex}>
                <div>
                    <p>Listado de Pokemon</p>
                    <PokeFinder text={text} handleChange={handleChange}></PokeFinder>
                </div>
                <button onClick={()=>setOpen(!open)}>
                    <span className={open ? styles.rotateBack : styles.rotate}></span> Nuevo
                </button>
            </div>
            {
                open && (
                    <PokeForm setOpen={setOpen}/>
                )
            }
            {
                subOpen && (
                    <>
                    
                    <div className={styles.overAll}>                        
                        <PokeForm pokemon={chosenPokemon} edit setOpen={setSubOpen}/>                       
                    </div>
                    </>                             
                )
            }           
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Ataque</th>
                        <th>Defensa</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredPokemons?.map((pokemon:Pokemon)=>{
                            return <PokeItem 
                                        pokemon={pokemon} 
                                        key={pokemon.id}
                                        setSubOpen={setSubOpen}
                                        setChosenPokemon={setChosenPokemon}/>                                      
                        })
                    }
                </tbody>
            </table>
        </main>                      
    )
};

export default PokeList;