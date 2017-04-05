<template>
  <div>
    <h1>Employee</h1>
    <employee-technologies></employee-technologies>
  </div>
</template>

<script>
import EmployeeTechnologies from './EmployeeTechnologies';

export default {
  name: 'employee',
  components: { EmployeeTechnologies },
};
</script>
