<template>
  <div class="mine">
    <header class="headerbar">
      <div class="headerbar-left">
        <a @click="backTo" class="navigation">
          <i class="iconfont iconfont-arrow-left">
            <van-icon color="#999" size="25px" name="arrow-left" />
          </i>
        </a>
      </div>
      <div class="headerbar-center">
        <p class="headerbar-content">个人中心</p>
      </div>
      <div class="headerbar-right"></div>
    </header>
    <section
      class="main"
      style="background-image: url('https://img02.hua.com/m/member/center/backgroundv3.png');"
    >
      <!--Dev::第三方登录:添加class：userinformation-hastips-->
      <div class="userinformation">
        <div class="userinformation-notlogin">
          <p class="userinformation-notlogin-hi">Hi,欢迎来到花礼网</p>
          <p class="userinformation-notlogin-gologin">
            <a href="/Passport/Login/?ReturnUrl=/Member/MemberCenter/">登录/注册</a>
          </p>
        </div>
        <!--Dev::第三方登录-->
      </div>
      <div id="stoporder" class="tips" style="padding:0;height:auto;">
        <img src="//img02.hua.com/zhuanti/qixi/2019/m_stoporder_myinfo.png" width="100%" />
      </div>

      <!--Order-->
      <div class="panel">
        <div class="panel-head">
          <div class="panel-head-title">我的订单</div>
          <div class="panel-head-right">
            <a href="/Member/Order/">
              全部订单
              <van-icon name="arrow" />
            </a>
          </div>
        </div>
        <div class="panel-body">
          <div class="order">
            <div class="order-item">
              <a href="/Member/Order?oper=dfk" class="navigation">
                <img
                  class="order-item-icon"
                  src="https://img02.hua.com/m/member/center/myinfo_pendingpay.png"
                />
                <p class="order-item-reddot" id="dfk"></p>
                <p class="order-item-txt">待付款</p>
              </a>
            </div>
            <div class="order-item">
              <a href="/Member/Order?oper=jrps" class="navigation">
                <img
                  class="order-item-icon"
                  src="https://img02.hua.com/m/member/center/myinfo_distribution.png"
                />
                <p class="order-item-reddot" id="jrps"></p>
                <p>今日配送</p>
              </a>
            </div>
            <div class="order-item">
              <a href="/Member/Order?oper=dpj" class="navigation">
                <img
                  class="order-item-icon"
                  src="https://img02.hua.com/m/member/center/myinfo_evaluation.png"
                />
                <p class="order-item-reddot" id="dpj"></p>
                <p>待评价</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--OrderComment-->
      <!--Jiugongge 1-->
      <div class="panel">
        <div class="panel-body">
          <div class="linkbox">
            <div class="linkbox-item">
              <a href="/Member/Payment/MyCoupon" class="navigation">
                <van-icon name="after-sale" size="22px" />
                <p class="linkbox-item-txt">优惠券</p>
              </a>
            </div>
            <div class="linkbox-item">
              <a href="/Member/Payment/MyEquitiesCard" class="navigation">
                <van-icon name="vip-card-o" size="22px" />
                <p class="linkbox-item-txt">权益卡</p>
              </a>
            </div>
            <div class="linkbox-item">
              <a href="/Member/Payment/MyVirtualAccount" class="navigation">
                <van-icon name="gold-coin-o" size="22px" />
                <p class="linkbox-item-txt">余额</p>
              </a>
            </div>
            <div class="linkbox-item">
              <a href="/Member/Payment/Points" class="navigation">
                <van-icon name="gem-o" size="22px" />
                <p class="linkbox-item-txt">会员积分</p>
              </a>
            </div>
          </div>
          <div class="linkbox">
            <div class="linkbox-item">
              <a href="/Member/AccountSetting/AddressList" class="navigation">
                <van-icon name="location-o" size="22px" />
                <p class="linkbox-item-txt">收货地址</p>
              </a>
            </div>
            <div class="linkbox-item">
              <a href="/Member/Remind/" class="navigation">
                <van-icon name="bulb-o" size="22px" />
                <p class="linkbox-item-txt">生日纪念提醒</p>
              </a>
            </div>
            <div class="linkbox-item">
              <a href="/Member/MemberCenter/GuanZhu" class="navigation">
                <van-icon name="star-o" size="22px" />
                <p class="linkbox-item-txt">我的收藏</p>
              </a>
            </div>
            <div class="linkbox-item">
              <a href="/Member/MemberCenter/LiuLanJiLu/" class="navigation">
                <van-icon name="clock-o" size="22px" />
                <p class="linkbox-item-txt">浏览记录</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--Jiugongge 2-->
      <div class="panel">
        <div class="panel-body">
          <div class="linkbox">
            <div class="linkbox-item">
              <a href="/chat/" class="navigation">
                <van-icon name="service-o" size="22px" />
                <p class="linkbox-item-txt">联系客服</p>
              </a>
            </div>
            <div class="linkbox-item">
              <a href="/help/" class="navigation">
                <van-icon name="question-o" size="22px" />
                <p class="linkbox-item-txt">帮助中心</p>
              </a>
            </div>
            <div class="linkbox-item">
              <a href="/profile/about.htm" class="navigation">
               <van-icon name="info-o" size="22px" />
                <p class="linkbox-item-txt">关于花礼</p>
              </a>
            </div>
            <div class="linkbox-item">
              <a href="/Member/AccountSetting/AccountManageV1" class="navigation">
               <van-icon name="setting-o" size="22px" />
                <p class="linkbox-item-txt">设置</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import "../../assets/membercenter.css";
export default {
  methods: {
    backTo(){
      this.$router.go(-1);
    }
  }
};
</script>
<style src="../../assets/membercenter.css" scoped></style>
<style scoped>
.headerbar {
  justify-content: flex-start;
  align-items: inherit;
  color: black;
}
.headerbar-center {
  max-width: calc(100% - 9.571429rem);
}
.headerbar-left > .navigation,
.headerbar-right > .navigation {
  text-align: left;
}
</style>


