import { Key } from "react";

type Pokemon = {
    id: Key,
    name: string,
    image: string,
    attack: number,
    defense: number,
    hp: number,
    type: string,
    id_author: number,
}

export default Pokemon;