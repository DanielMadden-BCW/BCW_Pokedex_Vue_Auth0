<template lang="">
  <div class="card">
    <h5>{{ pokeMember.name }}</h5>
    <img :src="pokeMember.img"/>
  </div>
</template>
<script>
export default {
  name: 'Pokeman',
  props: {
    pokeMember: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {

    }
  }
}
</script>
<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
