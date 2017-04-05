<template>
  <div>
    <!-- <h1>Employees</h1> -->
    <employees-table></employees-table>
  </div>
</template>

<script>
// import http from '../services/http';
import EmployeesTable from './EmployeesTable';

export default {
  name: 'employees',
  components: { EmployeesTable },
};
</script>
