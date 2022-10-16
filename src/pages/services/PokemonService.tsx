import { Key, useEffect, useState } from "react";
import FillableType from "../types/FillableType";
import Pokemon from "../types/PokemonType";

class PokemonService{

    getPokemons = async () => {
        return await fetch('https://bp-pokemons.herokuapp.com/?idAuthor=1')
        .then(res => res.json())
    }

    postPokemon = (pokemon:FillableType, id?:Key|undefined) =>{
        const uri = 'https://bp-pokemons.herokuapp.com/?idAuthor=1'
        fetch(uri,{
            method: 'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(pokemon),
        }).catch(err=>console.log(err))
        .then(()=>window.alert('Agregado con éxito.'))
        .finally(()=>window.location.reload())  
    }   

    deletePokemon = (id:Key) => {
        const uri = 'https://bp-pokemons.herokuapp.com/';
        fetch(uri+id,{
            method:'delete'
        }).then(()=>window.alert('Eliminado con éxito.'))
            .finally(()=>window.location.reload())
    }

    editPokemon = (pokemon:FillableType) =>{

        const uri = 'https://bp-pokemons.herokuapp.com/'
        fetch(uri+pokemon.idPoke,{
            method: 'PUT',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(pokemon),
        }).catch(err=>console.log(err))
        .then(()=>window.alert('Editado con éxito.'))
        .finally(()=>window.location.reload()) 
    }
}

export default new PokemonService();