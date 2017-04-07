<template>
  <div>
    {{currentTechnologies}}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'employee-technologies',
  methods: {
    ...mapActions([
      'GET_TECHNOLOGIES',
    ]),
  },
  computed: mapState({ currentTechnologies: state => state.currentTechnologies }),
  created() {
    this.GET_TECHNOLOGIES(this.$route.params.uid);
  },
};
</script>
