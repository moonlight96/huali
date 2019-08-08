<template>
  <div class="bag">
    <header class="headerbar">
      <div class="headerbar-left">
        <a @click="backTo" class="navigation">
          <i class="iconfont iconfont-arrow-left"><van-icon color="#999" size="25px" name="arrow-left" /></i>
        </a>
      </div>
      <div class="headerbar-center">
        <p class="headerbar-content">购物车</p>
      </div>
      <div class="headerbar-right"></div>
    </header>
    <section class="main">
      <div class="emptycart">
        <img class="img" src="//img02.hua.com/m/images/m_emptycart.png" alt />
        <p class="text">这里什么都没有呀...</p>
      </div>
      <div class="guess">
        <div class="guess-title">猜你喜欢</div>
        <div class="guess-list">
          <div class="guess-item">
            <a href="/product/9010966.html">
              <div class="guess-item-img">
                <img src="//img01.hua.com/uploadpic/newpic/9010966.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <span class="guess-item-name">一往情深</span>·
                  <span class="guess-item-desc">精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</span>
                </div>
                <div class="guess-item-price">¥239</div>
              </div>
            </a>
          </div>
          <div class="guess-item">
            <a href="/product/9012177.html">
              <div class="guess-item-img">
                <img src="//img01.hua.com/uploadpic/newpic/9012177.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <span class="guess-item-name">不变的承诺</span>·
                  <span class="guess-item-desc">99枝红玫瑰</span>
                </div>
                <div class="guess-item-price">¥599</div>
              </div>
            </a>
          </div>
          <div class="guess-item">
            <a href="/product/9010011.html">
              <div class="guess-item-img">
                <img src="//img01.hua.com/uploadpic/newpic/9010011.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <span class="guess-item-name">一心一意</span>·
                  <span class="guess-item-desc">玫瑰11枝，粉色勿忘我0.3扎</span>
                </div>
                <div class="guess-item-price">¥141</div>
              </div>
            </a>
          </div>
          <div class="guess-item">
            <a href="/product/9012154.html">
              <div class="guess-item-img">
                <img src="//img01.hua.com/uploadpic/newpic/9012154.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <span class="guess-item-name">甜美公主</span>·
                  <span class="guess-item-desc">白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝</span>
                </div>
                <div class="guess-item-price">¥369</div>
              </div>
            </a>
          </div>
          <div class="guess-item">
            <a href="/product/9010877.html">
              <div class="guess-item-img">
                <img src="//img01.hua.com/uploadpic/newpic/9010877.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <span class="guess-item-name">致美丽的你</span>·
                  <span class="guess-item-desc">红玫瑰11枝，满天星0.3扎，栀子叶0.5扎</span>
                </div>
                <div class="guess-item-price">¥138</div>
              </div>
            </a>
          </div>
          <div class="guess-item">
            <a href="/product/9012112.html">
              <div class="guess-item-img">
                <img src="//img01.hua.com/uploadpic/newpic/9012112.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <span class="guess-item-name">温柔如你</span>·
                  <span class="guess-item-desc">戴安娜粉玫瑰12枝，石竹梅7枝</span>
                </div>
                <div class="guess-item-price">¥202</div>
              </div>
            </a>
          </div>
        </div>
        <div class="guess-bottom">
          <span>已经到底喽…</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import '../../assets/emptycart.css'
export default {
    methods: {
      backTo(){
      this.$router.go(-1);
    }
    }
}
</script>
<style src="../../assets/emptycart.css" scoped>

</style>

<style scoped>
.headerbar{
    justify-content: flex-start;
    align-items: inherit;
}
.headerbar-left > .navigation, .headerbar-right > .navigation{
    text-align: left;

}
</style>
