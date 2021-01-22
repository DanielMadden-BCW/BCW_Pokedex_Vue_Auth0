<template lang=''>
    <div class="col-4" >
        <poke-list v-for="pokeman in state.pokemon" :key="pokeman.name" :pokemon="pokeman" ></poke-list>
    </div>
    <div class="col-4" v-if="state.pokeman" >
      <poke-man :poke-man="state.pokeman" ></poke-man>
    </div>
    <div class="col-4" v-if="state.pokeTeam" >
      <div class="row" >
      <poke-member class="m-1 p-2" v-for="pokeMember in state.pokeTeam" :key="pokeMember.name" :poke-member="pokeMember" ></poke-member>
      </div>
    </div>
</template>
<script>
import { computed, onMounted, reactive } from 'vue'
import { receiveService } from '../services/ReceiveService.js'
import { AppState } from "../AppState.js"
import pokeMan from "../components/pokeMan"

import pokeMember from "../components/pokeMember"
import { bcwService } from "../services/BcwService.js"
export default {
  name: 'PokePage',
  setup() {
    let state = reactive({
      pokemon: computed(() => AppState.pokeList.results),
      pokeman: computed(() => AppState.pokeMan),
      pokeTeam: computed(() => AppState.pokeTeam)
    })
    onMounted(async () => {
      await receiveService.getPokemon()
      await bcwService.getPokemon()
    })
    return {
      state
    }
  },
  components: {
    pokeMan,
    pokeMember
  }
}
</script>