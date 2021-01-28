import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    topics: [],
    parties: [],
    party: {},
  },
  mutations: {
    /**
     * Update topics
     */
    updateTopics(state, data) {
      state.topics = data.topics;
    },
    /**
     * Update parties data
     */
    updateParties(state, data) {
      const topics = new Map();
      data.topics.forEach((topic) => topics.set(topic.id, topic.name));

      // Sort commitments alphabetically before assigning
      state.parties = data.parties.map((party) => ({
        ...party,
        commitments: party.commitments
          .sort((a, b) => topics.get(a.id).localeCompare(topics.get(b.id))),
      }));
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
            this.commit('updateTopics', response.data);
            this.commit('updateParties', response.data);
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
    topics(state) { return state.topics; },
    parties(state) { return state.parties; },
    party(state) { return state.party; },
  },
});
