<script>
  import CSRF from 'components/shared/csrf.vue';

  export default {
    components: {
      csrf: CSRF
    },

    props: {
      errors: Array
    },

    data: function() {
      return ({
        user: {
          email: '',
          password: '',
          password_confirmation: ''
        },
        rules: {
          email: [
            {
              type: 'email',
              trigger: 'blur,change'
            }
          ]
        }
      });
    }
  };
</script>

<template>
  <div class="">
    <h2>Sign up</h2>
    <el-alert
      v-for="error in errors"
      type="error"
      :title="error"
      :closable="false">
    </el-alert>
    <el-form :model="user" :rules="rules" method="post" action="/users">
        <csrf></csrf>

        <el-form-item label="Email" prop="email" required>
          <el-input name="user[email]" v-model="user.email" type="email" auto-complete="email"></el-input>
        </el-form-item>

        <el-form-item label="Password" prop="password" required>
          <el-input name="user[password]" v-model="user.password" type="password" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="Password confirmation" prop="password" required>
          <el-input name="user[password_confirmation]" v-model="user.password_confirmation" type="password" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button native-type="submit" type="primary">
            Sign up
          </el-button>
        </el-form-item>
    </el-form>
  </div>
</template>


