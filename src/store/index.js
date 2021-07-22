import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [],
  },
  mutations: {
    SET_Notes(state, notes) {
      state.notes = notes;
    },
  },
  actions: {
    getNotes({ commit }) {
      fetch(`${process.env.VUE_APP_ENDPOINT}/notes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              console.log("test");
              commit("SET_Notes", data.notes);
            });
          } else {
            throw new Error("sorry seems like we have a problem");
          }
        })
        .catch((error) => {
          commit("ERROR", error.message);
        });
    },
    deleteNote({ dispatch, commit }, id) {
      fetch(`${process.env.VUE_APP_ENDPOINT}/notes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then(() => {
              dispatch("getNotes");
            });
          } else if (response.status == 400 || response.status == 404) {
            response.json().then((data) => {
              commit("ERROR", data.error.message);
            });
          } else {
            throw new Error("sorry seems like we have a problem");
          }
        })
        .catch((error) => {
          commit("ERROR", error.message);
        });
    },
  },
  modules: {},
});
