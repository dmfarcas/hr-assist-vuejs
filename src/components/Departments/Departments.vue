<template>
  <div>
    <departments-inline-form></departments-inline-form>
    <el-table
      :data="departments"
      stripe
      height="900"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Name">
      </el-table-column>
      <el-table-column
        prop="Description"
        label="description">
      </el-table-column>

      <el-table-column
        label="Operations">
        <template scope="scope">
          <el-button
            size="small"
            @click="edit(scope.$index, scope.row.id)"><i class="el-icon-edit"></i></el-button>
          <el-button
            size="small"
            @click="delete(scope.$index, scope.row.id)"><i class="el-icon-delete"></i></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DepartmentsForm from './DepartmentsForm';

export default {
  name: 'departments',
  methods: {
    ...mapActions([
      'GET_DEPARTMENTS',
      'DELETE_DEPARTMENT',
    ]),
    edit(index, id) {
      // TODO
      console.log(index, id);
    },
    delete(index, id) {
      console.log(index, id);
      this.$confirm('This will permanently delete this department. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed',
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled',
        });
      });
    },
  },
  computed: mapState({ departments: state => state.company.departments }),
  components: { DepartmentsForm },
  created() {
    this.GET_DEPARTMENTS();
  },
};
</script>
