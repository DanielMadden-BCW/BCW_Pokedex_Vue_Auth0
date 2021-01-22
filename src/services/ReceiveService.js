import { AppState } from '../AppState'
import { pokeApi } from './AxiosService'

class ReceiveService {
    async getPokemon(query) {
        const res = await pokeApi.get('https://pokeapi.co/api/v2/pokemon')
        AppState.pokeList = res.data
    }

    async getOne(url) {
        const res = await pokeApi.get(url)
        AppState.pokeMan = res.data
        console.log(AppState.pokeMan)
    }
}

export const receiveService = new ReceiveService()
