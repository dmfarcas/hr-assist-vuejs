<template>
  <div>
    First name <el-input placeholder="Please input" v-model="currentUserInformation.first_name"></el-input>
    Middle name <el-input placeholder="Please input" v-model="currentUserInformation.middle_name"></el-input>
    Last name<el-input placeholder="Please input" v-model="currentUserInformation.last_name"></el-input>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'employee-technologies',
  methods: {
    ...mapActions([
      'GET_EMPLOYEE_BASIC_INFO',
      'EMPLOYEE_FORM_DIRTY',
    ]),
  },
  computed: mapState({ currentUserInformation: state => state.currentUserInformation }),
  created() {
    this.GET_EMPLOYEE_BASIC_INFO(this.$route.params.uid);
  },
};
</script>
