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
  data() {
    return {
      notes: [
        {
          _id: "1a1",
          title: "un titre",
          content: [
            "du contenu",
          ]
        },
        {
          _id: "1a2",
          title: "un deuxieme titre",
          content: [
            "un autre contenu",
          ]
        },
        {
          _id: "1a3",
          title: "un troisième titre",
          content: [
            "encore du contenu",
            "et toujours plus",
          ]
        },
      ]
    }
  },
  methods: {
    deleteNote(id) {
      let index = this.notes.findIndex(note =>note._id == id);
      this.notes.splice(index,1);
    }
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
