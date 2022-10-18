import styles from './pokeList.module.css'
import Pokemon from '../../types/PokemonType'
import PokeItem from '../pokeItem/pokeItem';
import PokeFinder from '../pokeFinder/pokeFinder';
import React, { useState } from 'react';
import PokeForm from '../pokeForm/pokeForm';
import usePokemons from '../../hooks/usePokemons';

const PokeList = () =>{

    const { pokemons, addPokemon, deletePokemon, editPokemon } = usePokemons()

    const [text, setText] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false)
    const [subOpen, setSubOpen] = useState<boolean>(false)

    const [chosenPokemonId, setChosenPokemonId] = useState<number>()
    const chosenPokemon = pokemons?.find(poke=>poke.id===chosenPokemonId)
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
                    <PokeFinder 
                        text={text} 
                        handleChange={handleChange}
                    />
                </div>
                <button onClick={()=>setOpen(!open)}>
                    <span className={open ? styles.rotateBack : styles.rotate}></span> Nuevo
                </button>
            </div>
            {
                open && (
                    <PokeForm 
                        setOpen={setOpen}
                        method={addPokemon}
                    />
                )
            }
            {
                subOpen && (
                    <>                   
                        <div className={styles.overAll}>                        
                            <PokeForm 
                                pokemon={chosenPokemon} 
                                edit
                                id={chosenPokemonId}
                                setOpen={setSubOpen}
                                method={editPokemon}
                            />                       
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
                            return(
                                <PokeItem 
                                    pokemon={pokemon} 
                                    key={pokemon.id}
                                    setSubOpen={setSubOpen}
                                    setChosenPokemon={setChosenPokemonId}
                                    deletePokemon={deletePokemon}
                                />  
                            )                                     
                        })
                    }
                </tbody>
            </table>
        </main>                      
    )
};

export default PokeList;