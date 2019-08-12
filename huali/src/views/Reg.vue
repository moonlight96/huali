<style src="../assets/reg.css" scoped>
</style>
<style scoped>
.van-cell-group {
  width: 98%;
  height: 100px;
}
.van-field {
  width: 98%;
  height: 50px;
  line-height: 50px;
}

</style>

<template>
  <div id="HuaLoginApp">
    <div class="header-bar">
      <div class="header-bar-left" @click="backTo">
        <i class="iconfont iconfont-arrow-left">
          <van-icon name="arrow-left" />
        </i>
      </div>
      <div class="header-bar-content"></div>
      <div class="header-bar-right"></div>
    </div>
    <section class="container">
      <div class="hualogo">手机号注册</div>
      <van-cell-group>
        <van-field
          v-model="username"
          clearable
          label="用户名"
          right-icon="question-o"
          left-icon="contact"
          placeholder="请输入用户名"
          error-message="用户名不能为空"
          @blur="methion"
          @click-right-icon="userToast('必须字母开头，允许5-16字节，允许字母数字下划线')"/>

        <van-field
          v-model="password"
          left-icon="closed-eye"
          right-icon="question-o"
          type="password"
          label="密码"
          placeholder="请输入密码"
          @blur="methion2"
          @click-right-icon="userToast('必须以字母开头，长度在6~18之间，只能包含字母、数字和下划线')"/>
        <van-field
          v-model="password2"
          @blur="methion3"
          type="password"
          label="确认密码"
          placeholder="请再次输入密码"/>
        <div class="form-contrl">
          <van-button type="primary" size="large" @click="onClickButtonSubmit">注册</van-button>
        </div>
      </van-cell-group>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
Vue.prototype.$toast = Toast;
export default {
  name: "login",
  data() {
    return {
      errors: [],
      username: "",
      password: "",
      password2: "",
      test:'0',
      test1:'0',
      test2:'0'
    };
  },
  methods: {
    userToast(text) {
      this.$toast(text);
    },
    methion() {
       let patter = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
       let result1 =patter.test(this.username);
      if (this.username.trim() == "") {
        this.$toast("用户名不能为空");
      } else if(!result1){
        this.$toast('用户名不符合规范');
      }else{
        this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://localhost:3008/login/test",
        data: this.$qs.stringify({
          username: this.username,
        })
      }).then(res => {
        // console.log(res);
        if(res.data=='可以注册'){
          this.$toast('可以注册');
          this.test ='1';
        }else{
          this.$toast('用户已存在');
        }
      });
      }
    },
    methion2() {
     let patter2 = /^[a-zA-Z]\w{5,17}$/;
       let result2 =patter2.test(this.password);

      if (this.password.trim() == "") {
        this.$toast("密码不能为空");
        
      }else if(!result2){
        this.$toast('密码不符合规范');
      }else{
        this.test1 ='1';
      }
    },
    methion3() {
      if (this.password2.trim() == "") {
        this.$toast("密码不能为空");
      }else if(this.password!=this.password2){
         this.$toast('两次密码不一致');
      }else{
        this.test2 ='1';
      }
    },
    onClickButtonSubmit() {
    if(this.test=='1'&&this.test2=='1'&&this.test1=='1'){
      this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://localhost:3008/login/reg",
        data: this.$qs.stringify({
          username: this.username,
          password: this.password
        })
      }).then(res => {
        this.$toast('注册成功');
        this.$router.go(-1);
     
      });
    
    }
    },
    
    backTo() {
      this.$router.go(-1);
    }
  }
};
</script>

