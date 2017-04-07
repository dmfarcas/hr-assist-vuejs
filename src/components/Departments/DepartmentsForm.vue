<template>
  <div>
    <el-button @click="dialogFormVisible = true">Add Department</el-button>

    <el-dialog size="tiny" title="Add Department" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Name" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description" :label-width="formLabelWidth">
          <el-input v-model="form.description" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirm">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

/* eslint ignore:1 */
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        description: '',
      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    ...mapActions([
      'ADD_DEPARTMENT',
    ]),
    confirm() {
      this.dialogFormVisible = false;
      this.ADD_DEPARTMENT(this.form);
    }
  }
};
</script>

<style media="screen" lang="stylus" scoped>
  .el-button
    margin-bottom: 10px
</style>
