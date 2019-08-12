<style src="../assets/login.css" scoped>
</style>

<template>
  <div class="routerview">
    <div class="header-bar">
      <div class="header-bar-left" @click="backTo">
        <i class="iconfont iconfont-closed">
          <van-icon name="cross" />
        </i>
      </div>
      <div class="header-bar-content"></div>
      <div class="header-bar-right"></div>
    </div>
    <section class="container">
      <div class="hualogo">
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" />
      </div>
      <div class="formgroup">
        <div class="formgroup-input">
          <input placeholder="请输入用户名" autocomplete="off" type="tel" v-model="user" />
          <div class="formgroup-input-icon" style="display: none;">
            <i class="iconfont iconfont-emptytext"></i>
          </div>
        </div>
        <!---->
      </div>
      <!---->
      <div class="formgroup">
        <div class="formgroup-input">
          <input placeholder="请输入密码"  autocomplete="off" type="password" v-model="pwd" />
          <div class="formgroup-input-icon" style="display: none;">
            <i class="iconfont iconfont-emptytext"></i>
          </div>
        </div>
        <!-- <div class="formgroup-btn active">获取验证码</div> -->
      </div>
      <div class="form-contrl">
        <button type="button" class="formbtn" @click="loginTo">用户登录</button>
        <button type="button" class="formbtn formbtn-outline">非会员快速下单</button>
      </div>
      <div class="flex" style="margin-top: 16px;">
        <div class="flex-item">
          <a href="#/LoginAccount" class>
            账号密码登录
            <i class="iconfont iconfont-arrow-right"></i>
          </a>
        </div>
        <div class="flex-item flex-item-right">
          <a href="#/reg" class>
            注册
            <i class="iconfont iconfont-arrow-right">
              <van-icon name="arrow" />
            </i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import store from '../store'
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  methods: {
    backTo() {
      this.$router.go(-1);
    },
    init(){
      if (localStorage.getItem("isLogin")) {
        this._data.isLogin = localStorage.getItem("isLogin");
        // console.log(this._data.isLogin);
      } else {
        this._data.isLogin = this.$store.getters.getLogin;
      }
    },
    loginTo() {
      this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://localhost:3008/login/login",
        data: this.$qs.stringify({
          username: this.user,
          password: this.pwd
        })
      }).then(res => {
        // console.log(res);
        if (res.data == "登录成功！") {
          Toast.loading({
            mask: true,
            message: "加载中...",
            duration: 500
          });
         localStorage.setItem('isLogin',this.user);
          store.commit('setLogin', this.user)
          this.$router.go(-1);
        } else {
          Toast("用户名或密码错误");
        }
      });
    }
  },
  mounted () {
    // this.init();
  }
};
</script>

