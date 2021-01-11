import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    parties: [],
    party: {},
  },
  mutations: {
    /**
     * Update parties data
     */
    updateParties(state, data) {
      state.parties = data;
    },
    /**
     * Update party data
     */
    updateParty(state, data) {
      state.party = data;
    },
  },
  actions: {
    /**
     * Get parties data from external source
     */
    getParties() {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_PARTIES_DATA_URL)
          .then((response) => {
            this.commit('updateParties', response.data.parties);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    /**
     * Set specific party
     */
    setParty(commit, party) {
      this.commit('updateParty', party);
    },
  },
  getters: {
    parties(state) { return state.parties; },
    party(state) { return state.party; },
  },
});
