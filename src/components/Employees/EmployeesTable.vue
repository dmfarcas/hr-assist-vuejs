<template lang="html">
  <el-table
    :data="employees"
    stripe
    height="900"
    style="width: 100%">
  <el-table-column
    prop="first_name"
    label="First name"
    width="180">
  </el-table-column>
  <el-table-column
    prop="last_name"
    label="Last Name"
    width="180">
  </el-table-column>
  <el-table-column
    prop="address"
    label="Address">
  </el-table-column>
  <el-table-column
    prop="birthday"
    label="Birthday">
  </el-table-column>
  <el-table-column
    prop="email"
    label="Email">
  </el-table-column>
  <el-table-column
    prop="phone"
    label="Phone">
  </el-table-column>
  <el-table-column
    label="Operations">
    <template scope="scope">
      <el-button
        size="small"
        @click="handleEdit(scope.$index, scope.row.id)">Edit</el-button>
    </template>
  </el-table-column>
</el-table>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import EmployeesTableEdit from './EmployeesTableEdit';

export default {
  methods: {
    ...mapActions([
      'GET_EMPLOYEES',
    ]),
    handleEdit(index, id) {
      this.$router.push(`/employee/${id}`);
    },
  },
  computed: mapState({ employees: state => state.employees }),
  created() {
    this.GET_EMPLOYEES();
  },
  components: { EmployeesTableEdit },
};
</script>

<style lang="css">
</style>
