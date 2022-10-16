import PokemonService from "../../services/PokemonService"
import Pokemon from "../../types/PokemonType"
import styles from "./pokeItem.module.css"

const PokeItem = ({pokemon,setSubOpen,setChosenPokemon}:{pokemon:Pokemon,setSubOpen:(a:boolean)=>void,setChosenPokemon:(a:Pokemon)=>void}) => {

    const deleteMethod = PokemonService.deletePokemon
    const setWindow = () =>{
        setSubOpen(true)
        setChosenPokemon(pokemon)
    }
    return(
        <tr className={styles.pokemonCard}>
            <td className={styles.margin}>{pokemon.name}</td>
            <td> 
                <img className={styles.img} src={pokemon.image} alt="" />
            </td>
            <td className={styles.margin}>{pokemon.attack.toString()}</td>
            <td className={styles.margin}>{pokemon.defense.toString()}</td>
            <td className={styles.buttonCont}> 
                <button 
                    className={styles.button} 
                    onClick={()=>setWindow()}>
                    
                </button> 
                <button 
                    className={styles.button} 
                    onClick={()=>deleteMethod(pokemon.id)}>
                         
                </button>
            </td>
        </tr>
    )
}
export default PokeItem;