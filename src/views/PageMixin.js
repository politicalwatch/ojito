export default {
  mounted() {
    window.addEventListener('keyup', this.escapeKeyPress);
  },
  methods: {
    escapeKeyPress(event) {
      if (event.key === 'Escape') {
        window.location.href = '/';
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener('keyup', this.escapeKeyPress);
  },
};
