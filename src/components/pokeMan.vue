<template lang="">
  <div class="card" @click="addPokeman()" >
    <h1>{{ pokeMan.name }}</h1>
    <img :src="pokeMan.sprites.front_default"/>
  </div>
</template>
<script>
import { bcwService } from "../services/BcwService.js"
export default {
  name: 'Pokeman',
  props: {
    pokeMan: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      addPokeman() {
        bcwService.addToTeam({
          name: props.pokeMan.name,
          img: props.pokeMan.sprites.front_default
        })
      }
    }
  }
}
</script>
<style scoped>
img {
  width: 250px;
  height: 250px;
}
</style>
