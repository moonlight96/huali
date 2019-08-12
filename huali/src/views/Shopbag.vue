<style src="../assets/shopbag.css" scoped></style>
<style scoped>
.shopbag {
  background: #e9ecf0;
  font-size: 15px;
}
section.main .recommend .product li {
  width: 5rem;
}
section.main .cart-tips-cont {
  font-size: 13px;
}
</style>

<template>
  <div class="shopbag">
    <header class="headerbar">
      <div class="headerbar-left">
        <a href="javascript:huatools.navigateBack();" class="navigation">
          <i class="iconfont iconfont-arrow-left">
            <van-icon color="#999" size="25px" name="arrow-left" />
          </i>
        </a>
      </div>
      <div class="headerbar-center">
        <p class="headerbar-content">购物车</p>
      </div>
      <div class="headerbar-right">
        <div onclick="huatools.toggleCategoryMenu();" class="navigation headerbar-menu-toggle">
          <i class="iconfont iconfont-menu"></i>
          <!--HeaderBarMenu-->
          <nav class="headerbar-menu" id="headerbarMenu">
            <div class="headerbar-menu-item">
              <a href="/" class="navigation">
                <i class="iconfont iconfont-home"></i>
                <span>首页</span>
              </a>
            </div>
            <div class="headerbar-menu-item">
              <a href="/all.html" class="navigation">
                <i class="iconfont iconfont-category"></i>
                <span>分类</span>
              </a>
            </div>
            <div class="headerbar-menu-item">
              <a href="/Shopping/ShowCart/" class="navigation">
                <i class="iconfont iconfont-shopcart" id="cartCount"></i>
                <span>购物车</span>
              </a>
            </div>
            <div class="headerbar-menu-item">
              <a href="/member/membercenter/" class="navigation">
                <i class="iconfont iconfont-smile"></i>
                <span>我的</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <section class="main">
      <div class="cart-list" id="cart-list">
        <!--活动类商品 根据促销类型放在promo-list列表下-->
        <div class="promo-list">
          <div class="cart-item nochange-item" data-promotionid="0">
            <div class="cart-item-checkbox">
              <input type="checkbox" value="9012177" checked />
              <i class="iconfont iconfont-checkout">
                <van-icon name="checked" />
              </i>
            </div>
            <div class="cart-item-right">
              <div class="cart-item-details">
                <div class="cart-item-pic">
                  <a href="/product/9012177.html">
                    <img src="//img01.hua.com/uploadpic/newpic/9012177.jpg_220x240.jpg" alt="不变的承诺" />
                  </a>
                </div>
                <div class="cart-item-info">
                  <p class="cart-item-title">
                    <a href="/product/9012177.html">[鲜花]不变的承诺</a>
                  </p>
                  <!--发货地显示-->
                  <div class="cart-item-inputs">
                    <div class="cart-item-num">
                      <span>数量</span>
                      <div class="cart-item-setnum" data-itemcode="9012177">
                        <van-stepper min="1" v-model="value" />
                        <!-- <span class="btn-cut"><i class="iconfont iconfont-delete" data-promotionid="0" data-itemcode="9012177" data-type="item">-</i></span>
                                                <input class="num-count" name="cpsl" type="tel" value="1" min="1" maxlength="3">
                        <span class="btn-add"><i class="iconfont iconfont-add">+</i></span>-->
                      </div>
                    </div>
                  </div>
                  <p class="cart-item-price">
                    ¥
                    <span>599</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--购买提示-->
      <div class="cart-tips">
        <ul>
          <li>
            <i class="iconfont iconfont-tips"></i>
            <div class="cart-tips-cont">如果选择8.5-8.8配送，鲜花将按七夕情人节价，合计：¥970</div>
          </li>
        </ul>
      </div>
      <div class="recommend">
        <p class="recommend-nav">
          <a :class="{active:tuinum}" key="0" @click="clickTui(true)">购买该商品的还购买了</a>
          <a :class="{active:!tuinum}" key="1" @click="clickTui(false)">巧克力/花瓶</a>
        </p>
        <div class="product">
          <ul :class="[{active:tuinum},'recommend-tab']" style="width: 835.625px;">
            <li>
              <a href="/Shopping/AddtoCart?product_code=5302015&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/5302015.jpg_80x87.jpg" />
                </div>
                <p class="product-name">水果之恋(8寸)</p>
                <p class="product-price">258</p>
              </a>
            </li>
            <li>
              <a href="/Shopping/AddtoCart?product_code=5302066&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/5302066.jpg_80x87.jpg" />
                </div>
                <p class="product-name">情有独钟(8寸)</p>
                <p class="product-price">258</p>
              </a>
            </li>
            <li>
              <a href="/Shopping/AddtoCart?product_code=5302019&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/5302019.jpg_80x87.jpg" />
                </div>
                <p class="product-name">Nice兔meet you！(8寸)</p>
                <p class="product-price">258</p>
              </a>
            </li>
            <li>
              <a href="/Shopping/AddtoCart?product_code=5222007&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/5222007.jpg_80x87.jpg" />
                </div>
                <p class="product-name">榴莲飘飘(2磅)</p>
                <p class="product-price">298</p>
              </a>
            </li>
            <li>
              <a href="/Shopping/AddtoCart?product_code=5222012&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/5222012.jpg_80x87.jpg" />
                </div>
                <p class="product-name">黑白巧克力慕斯(2磅)</p>
                <p class="product-price">298</p>
              </a>
            </li>
            <li>
              <a href="/Shopping/AddtoCart?product_code=5302003&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/5302003.jpg_80x87.jpg" />
                </div>
                <p class="product-name">春晖洒暖(8寸)</p>
                <p class="product-price">258</p>
              </a>
            </li>
            <li>
              <a href="/Shopping/AddtoCart?product_code=5301105&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/5301105.jpg_80x87.jpg" />
                </div>
                <p class="product-name">告白气球</p>
                <p class="product-price">299</p>
              </a>
            </li>
            <li>
              <a href="/Shopping/AddtoCart?product_code=5222017&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/5222017.jpg_80x87.jpg" />
                </div>
                <p class="product-name">百利甜情人(2磅)</p>
                <p class="product-price">298</p>
              </a>
            </li>
          </ul>
          <ul :class="[{active:!tuinum},'recommend-tab']" style="width: 624.286px;">
            <li>
              <a href="/Shopping/AddtoCart?product_code=3010005&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/3010005.jpg_80x87.jpg" />
                </div>
                <p class="product-name">费列罗榛果威化糖果巧克力礼盒8粒心形装</p>
                <p class="product-price">68</p>
              </a>
            </li>
            <li>
              <a href="/Shopping/AddtoCart?product_code=3010006&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/3010006.jpg_80x87.jpg" />
                </div>
                <p class="product-name">费列罗榛果威化糖果巧克力礼盒16粒</p>
                <p class="product-price">98</p>
              </a>
            </li>
            <li>
              <a href="/Shopping/AddtoCart?product_code=1207010&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/1207010.jpg_80x87.jpg" />
                </div>
                <p class="product-name">巧克巧蔻定制16粒装手工夹心巧克力</p>
                <p class="product-price">288</p>
              </a>
            </li>
            <li>
              <a href="/Shopping/AddtoCart?product_code=3010001&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/3010001.jpg_80x87.jpg" />
                </div>
                <p class="product-name">精美玻璃花瓶</p>
                <p class="product-price">38</p>
              </a>
            </li>
            <li>
              <a href="/Shopping/AddtoCart?product_code=3010003&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/3010003.jpg_80x87.jpg" />
                </div>
                <p class="product-name">德芙心语98克铁盒或109克礼盒</p>
                <p class="product-price">68</p>
              </a>
            </li>
            <li>
              <a href="/Shopping/AddtoCart?product_code=3010008&amp;type=">
                <div class="product-img">
                  <img src="//img01.hua.com/uploadpic/newpic/3010008.jpg_80x87.jpg" />
                </div>
                <p class="product-name">德芙精心之选140克或恋语150g（随机发货）</p>
                <p class="product-price">105</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="footer">
      <span class="footer-left">
        合计:
        <em class="total">599</em>
      </span>
      <button class="footer-right" type="button" id="jieSuan">
        去结算
        <em class="total-num">1</em>
      </button>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tuinum: true,
      value: 1,
      hua: []
    };
  },
  methods: {
    backTo() {
      this.$router.go(-1);
    },
    clickTui(n) {
      this.tuinum = n;
    }
  }
};
</script>

