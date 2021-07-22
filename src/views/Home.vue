<template>
  <div class="home">
    <div id="notes">
      <Note v-for="(note, index) in notes" :index="index" :key="note._id" :note="note" @del="deleteNote"/>
    </div>
  </div>
</template>

<script>

import Note from "@/components/Note.vue";

export default {
  name: "Home",
  components: {
    Note,
  },
  computed: {
    notes() {
      return this.$store.state.notes
    }
  },
  mounted() {
    this.$store.dispatch('getNotes');
  }
};
</script>

<style lang="scss">
#notes {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 1rem;
  padding: 1rem;
}
button {
  cursor: pointer;
  background-color: transparent;
  border: none;
  background-color: rgb(255, 255, 255, 0.1);
  color: rgb(255, 255, 255, 0.5);

  padding: 0.2rem 1rem;
  margin-right: 0.1rem;
  font-size: 3rem;
  border-radius: 1rem;
}
</style>
