<template>
  <div class="party-chip" @click="goToParty">
    <div class="party-chip__name">
      {{party.shortName}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartyChip',
  props: {
    party: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    goToParty() {
      this.$store.dispatch('setParty', this.party);
      this.$router.push({
        name: 'party',
        params: {
          party: this.party.shortName,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.party-chip {
  cursor: pointer;
  background: rgba(255,255,255,0.1);
  border: 3px solid white;
  border-radius: 30px;
  padding: 6px 18px;
  margin-bottom: 16px;
  transition: background-color 250ms ease;
  &:hover {
    background: rgba(255,255,255,0.3);
  }

  &__name {
    font-weight: 700;
    font-size: 24px;
  }
}
</style>
