import { AppState } from "../AppState"
import { bcwApi } from "./AxiosService"

class BcwService {
  async getPokemon() {
    const res = await bcwApi.get('')
    AppState.pokeTeam = res.data
  }

  async addToTeam(obj) {
    await bcwApi.post('', obj)
    this.getPokemon()
  }
}

export const bcwService = new BcwService()