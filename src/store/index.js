import { createStore } from 'vuex';
import axios from 'axios';

const sortPartiesByGeneralCompliance = (a, b) => {
  const partyTopicA = a.overview
    .reduce((acc, obj) => acc + obj.score, 0) / a.overview.length;
  const partyTopicB = b.overview
    .reduce((acc, obj) => acc + obj.score, 0) / b.overview.length;
  return partyTopicB - partyTopicA;
};

const parseScore = (num) => (!Number.isNaN(num) && !Number.isNaN(parseFloat(num)) ? +num.replace(',', '.') : 0);

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
      state.topics = data.topics
        .sort((a, b) => a.name.localeCompare(b.name));
    },
    /**
     * Update parties data
     */
    updateParties(state, data) {
      const topics = new Map();
      data.topics.forEach((topic) => topics.set(topic.id, topic.name));

      // Sort commitments alphabetically before assigning
      state.parties = data.parties
        .map((party) => ({
          ...party,
          overview: party.overview
            .map((topic) => ({ ...topic, score: parseScore(topic.score) })),
          commitments: party.commitments
            .map((commitment) => ({
              ...commitment,
              commits: commitment.commits
                .map((commit) => ({
                  ...commit,
                  initiatives: commit.initiatives.filter((i) => i.link.length > 0),
                })),
            }))
            .sort((a, b) => topics.get(a.id).localeCompare(topics.get(b.id))),
        }))
        .sort(sortPartiesByGeneralCompliance);
    },
    /**
     * Update party data
     */
    updateParty(state, data) {
      state.party = data;
    },
    /**
     * Sort parties list
     */
    sortParties(state, topic) {
      if (topic) {
        state.parties = state.parties.sort((a, b) => {
          const partyTopicA = a.overview.find((o) => o.id === topic);
          const partyTopicB = b.overview.find((o) => o.id === topic);
          if (partyTopicA === undefined && partyTopicB === undefined) return 0;
          if (partyTopicA === undefined) return -1;
          if (partyTopicB === undefined) return 1;
          return partyTopicB.score - partyTopicA.score;
        });
      } else {
        state.parties = state.parties.sort(sortPartiesByGeneralCompliance);
      }
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
    /**
     * Sort party list by topic score
     */
    sortParties(commit, topicName) {
      this.commit('sortParties', topicName);
    },
  },
  getters: {
    topics(state) { return state.topics; },
    parties(state) { return state.parties; },
    party(state) { return state.party; },
  },
});
