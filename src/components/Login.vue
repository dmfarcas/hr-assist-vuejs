<template>
  <el-card class="box-card login-card">
    <img src="../assets/logo.png">
    <el-form :model="user" :rules="rules" ref="user">
      <el-form-item prop="email">
        <el-input
            placeholder="Enter your username"
            v-model="user.email"
            type="email">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="Enter your password"
          type="password"
          v-model="user.password">
        </el-input>
      </el-form-item>

      <el-alert
        style="margin-bottom: 15px"
        v-if="failed"
        title="Authentication failed."
        :closable="false"
        type="error">
      </el-alert>

      <el-button
          @click="login()"
          style="margin:0 auto; display: block"
          type="primary">
          Log In
          <i class="el-icon-d-arrow-right"></i>
      </el-button>

    </el-form>
  </el-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      failed: false,
      rules: {
        email: [
          { type: 'email', required: true, message: 'Please input email', trigger: 'blur' },
          { min: 3, message: 'Please input email', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Please input pass', trigger: 'blur' },
        ],
      },
    };
  },

  methods: {
    ...mapActions([
      'USER_LOGIN',
    ]),
    login() {
      this.$refs.user.validate((valid) => {
        if (valid) {
          this.USER_LOGIN(this.user)
            .then(() => {
              this.$router.replace({ path: '/dashboard' });
            })
            .catch(() => {
              this.failed = true;
            });
          this.failed = false;
          // Reset the password so that the next login will have this field empty.
          this.password = '';
        } else {
          return false;
        }
        return false;
      });
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  margin-bottom: 20px
}

div {
  max-width:340px;
}

.login-card {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 350px;
  max-height: 350px;
}
</style>
