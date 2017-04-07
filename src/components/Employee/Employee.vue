<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="Basic Info"><employee-basic-info></employee-basic-info></el-tab-pane>
      <el-tab-pane label="Technologies"><employee-technologies></employee-technologies></el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import EmployeeTechnologies from './EmployeeTechnologies';
import EmployeeBasicInfo from './EmployeeBasicInfo';

export default {
  name: 'employee',
  components: { EmployeeTechnologies, EmployeeBasicInfo },
};
</script>
