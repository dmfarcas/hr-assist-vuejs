<template lang="html">
  <v-card>
    <v-table-overflow>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Birthday</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(employee, index) in employees">
            <tr>
              <td>{{employee.first_name}}</td>
              <td>{{employee.last_name}}</td>
              <td>{{employee.address}}</td>
              <td>{{employee.birthday}}</td>
              <td>{{employee.email}}</td>
              <td>{{employee.phone}}</td>
              <td><employees-table-edit :uid="employee.id"></employees-table-edit></td>
            </tr>
          </template>
        </tbody>
      </table>
    </v-table-overflow>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import EmployeesTableEdit from './EmployeesTableEdit';

export default {
  methods: {
    ...mapActions([
      'GET_EMPLOYEES',
    ]),
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
