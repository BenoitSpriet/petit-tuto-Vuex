<template>
  <div class="note">
    <div class="header">
      <h2>{{ note.title }}</h2>
      <button @click="goTo(note)">
        <img src="@/assets/read_more_white_24dp.svg" alt="See More" />
      </button>
    </div>
    <div class="content" v-for="(task, index) in note.content" :key="index">
      <p>{{ task }}</p>
    </div>
    <div class="footer">
      <button><img src="@/assets/edit_white_24dp.svg" alt="Edit" @click="goTo(note)" /></button>
      <button><img src="@/assets/delete_white_24dp.svg" alt="Delete" @click="deleteNote(note._id)" /></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes",
  props: {
    index: Number,
    key: String,
    note: {
      _id: String,
      title: String,
      content: Array,
    },
  },
  methods: {
    goTo(note) {
      this.$router.push(`/notes/${note._id}`);
    },
    deleteNote(id) {
      this.$store.dispatch("deleteNote", id);
    }
  }
};
</script>

<style scoped lang="scss">
.note {
  padding: 1rem;
  border-radius: 1rem;
  background-color: rgb(255, 255, 255, 0.3);
}

.header {
  display: flex;
  justify-content: space-between;
}

.header img {
  width: 2rem;
}

.content,
.add-content {
  background-color: rgb(255, 255, 255, 0.5);
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
}

.content p,
.add-content p {
  color: black;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: rgb(255, 255, 255, 0.5);

  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  border-radius: 1rem;
  color: rgb(0, 0, 0, 0.7);
}

.footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: sticky;
  top: 100%;
}
</style>
