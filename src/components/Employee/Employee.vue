<template>
  <div>
    <h1>Employee!</h1>
    {{this.$route.params.uid}}
  </div>
</template>

<script>
export default {
  name: 'employee',
};
</script>
