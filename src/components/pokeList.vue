<template lang="">
  <div class="card" @click="setActive(pokemon.url)">
    <h1>{{ pokemon.name }}</h1>
  </div>
</template>
<script>
import { receiveService } from "../services/ReceiveService.js"
export default {
  name: 'PokeList',
  props: {
    pokemon: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    return {
      setActive(url) {
        receiveService.getOne(url)
      }
    }
  }
}
</script>
<style lang="">
</style>