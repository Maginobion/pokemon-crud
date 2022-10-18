import {
    rest
} from 'msw'

const response = [{
    "id": 4446,
    "name": "Bulbasaur",
    "image": "https://img2.freepng.es/20190628/fyp/kisspng-squirtle-wartortle-coloring-book-charmander-drawin-tiny-turtle-pokemon-squirtle-hides-in-its-shell-fo-5d15bfd5c87127.941642801561706453821.jpg",
    "attack": 74,
    "defense": 48,
    "hp": 100,
    "type": "Fuego",
    "id_author": 1
}, {
    "id": 4447,
    "name": "Venasaur",
    "image": "https://w7.pngwing.com/pngs/800/234/png-transparent-venusaur-pokemon-go-ivysaur-pokedex-pokemon-go-flower-fictional-character-pokemon-thumbnail.png",
    "attack": 70,
    "defense": 74,
    "hp": 700,
    "type": "Grass",
    "id_author": 1
}, {
    "id": 4449,
    "name": "Feraligator",
    "image": "https://urpgstatic.com/images/pokemon-home.png",
    "attack": 0,
    "defense": 39,
    "hp": 10,
    "type": "pokemon",
    "id_author": 1
}, {
    "id": 4452,
    "name": "Pikachu.exe",
    "image": "https://i.ytimg.com/vi/2_vCE1kodyE/maxresdefault.jpg",
    "attack": 100,
    "defense": 100,
    "hp": 100,
    "type": "pokemon",
    "id_author": 1
}]

export const handlers = [
    rest.post('/login', (req, res, ctx) => {
        // Persist user's authentication in the session
        sessionStorage.setItem('is-authenticated', 'true')
        return res(
            // Respond with a 200 status code
            ctx.status(200),
        )
    }),
    rest.get('https://bp-pokemons.herokuapp.com/', (req, res, ctx) => {
        const letsgo = req.url.searchParams.get('idAuthor=1')
        return res(
            ctx.status(200),
            ctx.json(response),
        )
    }),
]