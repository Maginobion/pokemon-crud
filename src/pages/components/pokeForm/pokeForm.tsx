import React, { Key, useState } from 'react'
import usePokemons from '../../services/PokemonService'
import FillableType from '../../types/FillableType'
import Pokemon from '../../types/PokemonType'
import styles from './pokeForm.module.css'

const PokeForm = ({
    pokemon,
    edit=false,
    id,
    setOpen,
    method
}:{
    pokemon?:Pokemon,
    edit?:boolean,
    id?:number, 
    setOpen:(a:boolean)=>void,
    method:(a:FillableType)=>void,
}) =>{

    //if not edit, post

    const metodo = edit ? 'Editar' : 'Nuevo'
    const [poke, setPoke] = useState<FillableType>({
        name: pokemon?.name || ' ', 
        image: pokemon?.image || ' ', 
        attack: pokemon?.attack || 0, 
        defense: pokemon?.defense || 0,
        hp: pokemon?.hp || 0,
        type:'Fuego',
        idAuthor: 1,
        idPoke: id,
    })

    const handleFormChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(['attack','defense','hp'].indexOf(e.target.value)+1){
            console.log(parseInt(e.target.value))
            setPoke({...poke, [e.target.name]: parseInt(e.target.value)})
        }
        else setPoke({...poke, [e.target.name]: [e.target.value]})
    }

    return(
        <div className={styles.formCont}>
            <p className={styles.title}>{metodo} Pokemon</p>
            <div className={styles.interiorGrid}>
                <div>
                    Nombre: 
                    <input 
                        type="text"
                        name="name"
                        defaultValue={pokemon?.name} 
                        onChange={handleFormChange}/>
                </div>
                <div>
                    Imagen: 
                    <input 
                        type="text"
                        name="image"
                        defaultValue={pokemon?.image}                        
                        placeholder='url'
                        onChange={handleFormChange}/>                   
                </div>
                <div>
                    <div>
                        Ataque:
                    </div>
                    <div className={styles.rangeCont}>
                         0
                        <input
                            type="range"
                            name="attack"
                            defaultValue={pokemon?.attack || 0}
                            onChange={handleFormChange}/>100
                    </div>                 
                </div>
                <div>
                    <div>
                        Defensa:
                    </div>
                    <div className={styles.rangeCont}>
                        0
                        <input 
                        type="range"
                        name="defense"
                        defaultValue={pokemon?.defense || 0}                       
                        onChange={handleFormChange}/>100
                    </div>                 
                </div>
            </div>
            <div className={styles.buttonCont}>                
                <button onClick={()=>method(poke)}>
                    <span></span> Guardar
                </button>                  
                <button onClick={()=>setOpen(false)}>
                    <span></span> Cancelar
                </button>           
            </div>                  
        </div>
    )
}

export default PokeForm