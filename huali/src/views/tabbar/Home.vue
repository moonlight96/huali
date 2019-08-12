
<template>
  <div class="home">
    <!-- topBannner -->
    <header class="topbanner" id="topBannner" :style="{display: show}">
      <span class="topbanner-close" id="topBannnerClose" @click="close">
        <van-icon name="clear" />
      </span>
      <a id="downloadurl" class="navigation downloadurl" href="/mbzzy/" rel="nofollow">
        <img src="https://img02.hua.com/m/icon/mobile_banner_A.png" />
      </a>
    </header>

    <!-- headerBar -->
    <header class="headerbar">
      <div class="headerbar-left">
        <a href="/all.html">
          <van-icon name="coupon-o" size="22px" />
        </a>
      </div>
      <div class="headerbar-logo">
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" />
      </div>
      <div class="headerbar-right" id="onlineChat">
        <div class="headerbar-right-kf active">
          <van-icon name="service-o" size="22px" />
        </div>
      </div>
    </header>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imgs" :key="index">
        <a class="navigation" href="/you/">
          <img :src="item" alt="设计师鲜花" />
        </a>
      </van-swipe-item>
    </van-swipe>
    <div class="conpany-info">
      <div class="conpany-info-item">
        <van-icon name="checked" />&nbsp;认证龙头企业
      </div>
      <div class="conpany-info-item">
        <van-icon name="checked" />&nbsp;14年品牌
      </div>
      <div class="conpany-info-item">
        <van-icon name="checked" />&nbsp;3小时送花
      </div>
      <div class="conpany-info-item">
        <van-icon name="checked" />&nbsp;最近
        <a href="/productpj/">
          <u id="commentCount">322562</u>
        </a>条好评
      </div>
    </div>
    <!-- flowersimg -->
    <nav class="procate">
      <div class="procate-item" v-for="(n,index) in flower" :key="index">
        <a href="/flower/" class="navigation">
          <img :src="n.src" :alt="n.name" />
          <p v-text="n.name"></p>
        </a>
      </div>
    </nav>
    <!-- 七夕花束 -->
    <section class="festival">
      <div class="festival-banner">
        <a href="/theme/qixi/" class="navigation">
          <img src="https://img02.hua.com/slider/19_Qixi_m_banner.png" alt="qixi" />
        </a>
      </div>
      <div class="festival-product" style="background:#D097E6;">
        <div class="festival-list">
          <!--水平模块2个一组-->
          <div class="festival-item festival-item-horizontal">
            <a
              href="/product/9010966.html"
              class="navigation"
              style="background-image: url('https://img02.hua.com/zhuanti/qixi/2019/9010966.png');"
            >
              <p class="festival-item-name">经典花盒</p>
              <p class="festival-item-desc">精选A级红玫瑰</p>
              <p class="festival-item-price" data-id="9010966">¥347</p>
            </a>
          </div>
          <div class="festival-item festival-item-horizontal">
            <a
              href="/product/9012243.html"
              class="navigation"
              style="background-image: url('https://img02.hua.com/zhuanti/qixi/2019/9012243.png');"
            >
              <p class="festival-item-name">烂漫花束</p>
              <p class="festival-item-desc">甜蜜花语说爱TA</p>
              <p class="festival-item-price" data-id="9012243">¥287</p>
            </a>
          </div>
          <div class="festival-item festival-item-horizontal">
            <a
              href="/product/1204041.html"
              class="navigation"
              style="background-image: url('https://img02.hua.com/zhuanti/qixi/2019/1204041.png');"
            >
              <p class="festival-item-name">甜蜜挚礼</p>
              <p class="festival-item-desc">让TA感受甜蜜</p>
              <p class="festival-item-price" data-id="1204041">¥298</p>
            </a>
          </div>
          <div class="festival-item festival-item-horizontal">
            <a
              href="/product/1073137.html"
              class="navigation"
              style="background-image: url('https://img02.hua.com/zhuanti/qixi/2019/1073137.png');"
            >
              <p class="festival-item-name">永生红玫瑰</p>
              <p class="festival-item-desc">见证永恒的爱</p>
              <p class="festival-item-price" data-id="1073137">¥398</p>
            </a>
          </div>
          <!--垂直模块3个一组-->
        </div>
      </div>
    </section>
    <!-- 一秒选花 -->
    <section class="scene">
      <div class="modetitle">一秒选花</div>

      <div class="scene-list">
        <div class="scene-item scene-item-radius">
          <a href="/aiqingxianhua/" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_use_love.png?0718" alt="送恋人" />
            <span class="scene-item-title">送恋人</span>
          </a>
        </div>
        <div class="scene-item scene-item-radius">
          <a href="/songzhangbeixianhua/" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_use_parent.png?0718" alt="送长辈" />
            <span class="scene-item-title">送长辈</span>
          </a>
        </div>
        <div class="scene-item scene-item-radius">
          <a href="/youqingxianhua/" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_use_friend.png?0718" alt="送朋友" />
            <span class="scene-item-title">送朋友</span>
          </a>
        </div>
      </div>

      <div class="scene-list">
        <div class="scene-item scene-item-radius">
          <a href="/shengrixianhua/" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_use_birthday.png?0718" alt="生日祝福" />
            <span class="scene-item-title">生日祝福</span>
          </a>
        </div>
        <div class="scene-item scene-item-radius">
          <a href="/biaobaiqiuhunxianhua/" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_use_profess.png?0718" alt="表白求婚" />
            <span class="scene-item-title">表白求婚</span>
          </a>
        </div>
        <div class="scene-item scene-item-radius">
          <a href="/businessFlower/" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_use_business.png?0718" alt="开业商务" />
            <span class="scene-item-title">开业商务</span>
          </a>
        </div>
        <div class="scene-item scene-item-radius">
          <a href="zhounianjinianxianhua" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_use_anniversary.png?0718" alt="周年纪念" />
            <span class="scene-item-title">周年纪念</span>
          </a>
        </div>
      </div>
      <!--mode-2-->

      <div class="scene-list">
        <a
          href="/ranking/"
          class="scene-item scene-item-bg"
          style="background-image: url(https://img02.hua.com/m/home/img/m_home_ranklist.png?0718);"
        >
          <p class="scene-item-name">热销榜</p>
          <p class="scene-item-desc">集万千宠爱</p>
          <div class="scene-item-bottom">
            <span class="scene-item-bottom-label">大家都在买</span>
            <span class="scene-item-bottom-text">热销9.9万束</span>
          </div>
        </a>
        <a
          href="/xingjiabixianhua/"
          class="scene-item scene-item-bg"
          style="background-image: url(https://img02.hua.com/m/home/img/m_home_special.png?0718);"
        >
          <p class="scene-item-name">特价专区</p>
          <p class="scene-item-desc">超值好货</p>
          <div class="scene-item-bottom">
            <span class="scene-item-bottom-label">限时直降</span>
            <span class="scene-item-bottom-text" data-id="9012056" style="opacity: 1;">
              ¥191
              <s>¥238</s>
            </span>
          </div>
        </a>
      </div>
      <!--mode-3-->

      <div class="scene-list">
        <div class="scene-item">
          <a href="https://m.hua.com/flower/?r=3" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_category_new.png?0718" alt="新品来袭" />
            <span class="scene-item-pange">新品来袭</span>
          </a>
        </div>
        <div class="scene-item">
          <a href="https://m.hua.com/pinzhixianhua/" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_category_quality.png?0718" alt="品味之选" />
            <span class="scene-item-pange">品味之选</span>
          </a>
        </div>
        <div class="scene-item">
          <a href="https://m.hua.com/you/" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_category_you.png?0718" alt="设计师甄选" />
            <span class="scene-item-pange">设计师甄选</span>
          </a>
        </div>
      </div>
    </section>
    <!-- 送恋人鲜花 -->
    <section class="product">
      <h3 class="product-title">送恋人/爱情鲜花</h3>
      <div class="product-list">
        <div class="product-item product-item-horizontal" v-for="(n,index) in lovers" :key="index">
          <a @click="navTo(index)" class="navigation">
            <div class="product-item-pic">
              <img :src="n.pic" :alt="n.name" />
            </div>
            <div class="product-item-info">
              <p class="product-item-info-name text-overflow" v-text="n.name"></p>
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <!-- 限时抢购标签 tag-promo，同商品列表页  -->
              <p class="product-item-info-desc text-overflow" v-text="n.desc"></p>
              <div class="product-item-info-tags">
                <span class="tag-promo" v-text="n.tag"></span>
              </div>
              <div class="product-item-info-promo" v-text="n.promo"></div>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="9010011" style="opacity: 1;">
                    ¥
                    <strong v-text="n.prices"></strong>
                    ¥
                    <s v-text="n.price2"></s>
                  </p>
                  <p class="product-item-info-sales" v-text="n.sales"></p>
                </div>
                <div class="product-item-info-bottom-right" data-id="9010011">
                  <van-icon name="cart-o" size="25px" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="product-more">
        <a href="https://m.hua.com/aiqingxianhua/" class="product-more-btn">查看更多</a>
      </div>
    </section>
    <section class="product">
      <h3 class="product-title">送长辈鲜花</h3>
      <div class="product-list">
        <div class="product-item product-item-horizontal">
          <a  class="navigation">
            <div class="product-item-pic">
              <img src="https://img01.hua.com/uploadpic/newpic/9012189.jpg_220x240.jpg" alt="恩情无限" />
            </div>
            <div class="product-item-info">
              <p class="product-item-info-name text-overflow">恩情无限</p>
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-desc text-overflow">粉色康乃馨11枝，百合2枝</p>
              <div class="product-item-info-tags">
                <span>人气推荐</span>
              </div>
              <div class="product-item-info-promo">精选花材 精心设计</div>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="9012189" style="opacity: 1;">
                    <strong>¥258</strong>
                    <s>¥320</s>
                  </p>
                  <p class="product-item-info-sales">已销售1.1万件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="9012189">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-horizontal">
          <a  class="navigation">
            <div class="product-item-pic">
              <img src="https://img01.hua.com/uploadpic/newpic/9012201.jpg_220x240.jpg" alt="馨情无限" />
            </div>
            <div class="product-item-info">
              <p class="product-item-info-name text-overflow">馨情无限</p>
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-desc text-overflow">戴安娜玫瑰11枝，红色康乃馨11支，红色石竹梅4枝</p>
              <div class="product-item-info-tags">
                <span>畅销单品</span>
              </div>
              <div class="product-item-info-promo">高端花盒设计</div>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="9012201" style="opacity: 1;">
                    <strong>¥345</strong>
                    <s>¥428</s>
                  </p>
                  <p class="product-item-info-sales">已销售5431件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="9012201">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-horizontal">
          <a  class="navigation">
            <div class="product-item-pic">
              <img src="https://img01.hua.com/uploadpic/newpic/9010736.jpg_220x240.jpg" alt="感激" />
            </div>
            <div class="product-item-info">
              <p class="product-item-info-name text-overflow">感激</p>
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-desc text-overflow-line2">29枝红康乃馨,2枝多头粉百合</p>
              <div class="product-item-info-promo">多花材搭配</div>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="9010736" style="opacity: 1;">
                    <strong>¥316</strong>
                    <s>¥392</s>
                  </p>
                  <p class="product-item-info-sales">已销售1.8万件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="9010736">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-horizontal">
          <a  class="navigation">
            <div class="product-item-pic">
              <img src="https://img01.hua.com/uploadpic/newpic/9012204.jpg_220x240.jpg" alt="幸福万年长" />
            </div>
            <div class="product-item-info">
              <p class="product-item-info-name text-overflow">幸福万年长</p>
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-desc text-overflow">红色康乃馨66枝，白边紫色多头康乃馨15枝，栀子叶2扎</p>
              <div class="product-item-info-tags">
                <span>精品优选</span>
              </div>
              <div class="product-item-info-promo">温暖花束 幸福万年长</div>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="9012204" style="opacity: 1;">
                    <strong>¥490</strong>
                    <s>¥608</s>
                  </p>
                  <p class="product-item-info-sales">已销售3232件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="9012204">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="product-more">
        <a href="https://m.hua.com/songzhangbeixianhua/" class="product-more-btn">查看更多</a>
      </div>
    </section>

    <!-- 永生花推荐 -->
    <section class="product">
      <h3 class="product-title">永生花推荐</h3>
      <div class="product-list product-list-vertical">
        <div class="product-item product-item-vertical">
          <a href="/product/1073210.html?huaPid=homepage-f301" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/1073210.jpg_220x240.jpg"
                alt="花漾蜜恋·淡雅紫"
              />
            </div>
            <div class="product-item-info">
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow-line2">花漾蜜恋·淡雅紫·音乐球永生花礼盒，创意礼物</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="1073210" style="opacity: 1;">
                    <strong>¥298</strong>
                    <s>¥499</s>
                  </p>
                  <p class="product-item-info-sales">已销售213件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="1073210">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-vertical">
          <a href="/product/1073247.html?huaPid=homepage-f302" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/1073247.jpg_220x240.jpg"
                alt="花好月圆永生花台灯"
              />
            </div>
            <div class="product-item-info">
              <div class="product-item-info-tags">
                <span>创意热销款</span>
              </div>
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow">花好月圆永生花台灯·精选进口奥斯汀永生玫瑰台灯</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="1073247" style="opacity: 1;">
                    <strong>¥298</strong>
                    <s>¥398</s>
                  </p>
                  <p class="product-item-info-sales">已销售423件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="1073247">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-vertical">
          <a href="/product/1073033.html?huaPid=homepage-f303" class="navigation">
            <div class="product-item-pic">
              <img src="https://img01.hua.com/uploadpic/newpic/1073033.jpg_220x240.jpg" alt="一生一世" />
            </div>
            <div class="product-item-info">
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow-line2">一生一世·厄瓜多尔进口永生红玫1朵，双色永生绣球</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="1073033" style="opacity: 1;">
                    <strong>¥198</strong>
                    <s>¥259</s>
                  </p>
                  <p class="product-item-info-sales">已销售1.2万件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="1073033">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-vertical">
          <a href="/product/1073157.html?huaPid=homepage-f304" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/1073157.jpg_220x240.jpg"
                alt="「倾世之爱」奢宠   "
              />
            </div>
            <div class="product-item-info">
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow-line2">「倾世之爱」奢宠 ·厄瓜多尔进口红色永生玫瑰</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="1073157" style="opacity: 1;">
                    <strong>¥2999</strong>
                    <s>¥3999</s>
                  </p>
                  <p class="product-item-info-sales">已销售49件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="1073157">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="product-more">
        <a href="/yongshenghua/" class="product-more-btn">查看更多</a>
      </div>
    </section>
    <!-- 蛋糕推荐 -->
    <section class="product">
      <h3 class="product-title">蛋糕推荐</h3>
      <div class="product-list product-list-vertical">
        <div class="product-item product-item-vertical">
          <a href="/product/5302015.html?huaPid=homepage-f401" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/5302015.jpg_220x240.jpg"
                alt="水果之恋(8寸)"
              />
            </div>
            <div class="product-item-info">
              <div class="product-item-info-tags">
                <span>生日推荐</span>
              </div>
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow">水果之恋(8寸)·元祖鲜奶蛋糕，布丁水果夹层</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="5302015" style="opacity: 1;">
                    <strong>¥258</strong>
                    <s>¥358</s>
                  </p>
                  <p class="product-item-info-sales">已销售7535件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="5302015">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-vertical">
          <a href="/product/5602022.html?huaPid=homepage-f402" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/5602022.jpg_220x240.jpg"
                alt="全心全意(约2磅)"
              />
            </div>
            <div class="product-item-info">
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow-line2">全心全意(约2磅)·鲜果蛋糕</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="5602022" style="opacity: 1;">
                    <strong>¥218</strong>
                    <s>¥216</s>
                  </p>
                  <p class="product-item-info-sales">已销售1842件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="5602022">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-vertical">
          <a href="/product/5301105.html?huaPid=homepage-f403" class="navigation">
            <div class="product-item-pic">
              <img src="https://img01.hua.com/uploadpic/newpic/5301105.jpg_220x240.jpg" alt="告白气球" />
            </div>
            <div class="product-item-info">
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow-line2">告白气球·</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="5301105" style="opacity: 1;">
                    <strong>¥299</strong>
                    <s>¥399</s>
                  </p>
                  <p class="product-item-info-sales">已销售66件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="5301105">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-vertical">
          <a href="/product/5302019.html?huaPid=homepage-f404" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/5302019.jpg_220x240.jpg"
                alt="Nice兔meet you！(8寸)"
              />
            </div>
            <div class="product-item-info">
              <div class="product-item-info-tags">
                <span>生日推荐</span>
              </div>
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow">Nice兔meet you！(8寸)·元祖鲜奶蛋糕，布丁加水果夹层</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="5302019" style="opacity: 1;">
                    <strong>¥258</strong>
                    <s>¥358</s>
                  </p>
                  <p class="product-item-info-sales">已销售3921件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="5302019">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="product-more">
        <a href="https://m.hua.com/cake/" class="product-more-btn">查看更多</a>
      </div>
    </section>
    <!-- 礼品推荐 -->
    <section class="product">
      <h3 class="product-title">礼品推荐</h3>
      <div class="product-list product-list-vertical">
        <div class="product-item product-item-vertical">
          <a href="/product/1060030.html?huaPid=homepage-f501" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/1060030.jpg_220x240.jpg"
                alt="美丽无限/三色玫瑰"
              />
            </div>
            <div class="product-item-info">
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow-line2">美丽无限/三色玫瑰·</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="1060030" style="opacity: 1;">
                    <strong>¥298</strong>
                    <s>¥399</s>
                  </p>
                  <p class="product-item-info-sales">已销售930件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="1060030">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-vertical">
          <a href="/product/1060009.html?huaPid=homepage-f502" class="navigation">
            <div class="product-item-pic">
              <img src="https://img01.hua.com/uploadpic/newpic/1060009.jpg_220x240.jpg" alt="幸福时光" />
            </div>
            <div class="product-item-info">
              <div class="product-item-info-tags">
                <span>畅销爆款</span>
              </div>
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow">幸福时光·爱情保鲜花，红玫瑰系列，5年不凋谢</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="1060009" style="opacity: 1;">
                    <strong>¥569</strong>
                    <s>¥869</s>
                  </p>
                  <p class="product-item-info-sales">已销售1779件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="1060009">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-vertical">
          <a href="/product/1076072.html?huaPid=homepage-f503" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/1076072.jpg_220x240.jpg"
                alt="施华洛世奇LAUREEN梨形耳环"
              />
            </div>
            <div class="product-item-info">
              <div class="product-item-info-tags">
                <span>典雅高贵大气</span>
              </div>
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow">施华洛世奇LAUREEN梨形耳环·SWAROVSKI LAUREEN梨形耳环</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="1076072" style="opacity: 1;">
                    <strong>¥799</strong>
                    <s>¥890</s>
                  </p>
                  <p class="product-item-info-sales">已销售39件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="1076072">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-vertical">
          <a href="/product/1071031.html?huaPid=homepage-f504" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/1071031.jpg_220x240.jpg"
                alt="心形3D水晶内雕陪你走到老"
              />
            </div>
            <div class="product-item-info">
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p
                class="product-item-info-name text-overflow-line2"
              >心形3D水晶内雕陪你走到老·激光内雕水晶工艺品，USB七彩旋转发光, 带音乐底座</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="1071031" style="opacity: 1;">
                    <strong>¥169</strong>
                    <s>¥216</s>
                  </p>
                  <p class="product-item-info-sales">已销售5941件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="1071031">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="product-more">
        <a href="https://m.hua.com/gifts/" class="product-more-btn">查看更多</a>
      </div>
    </section>
    <!-- 巧克力推荐 -->
    <section class="product">
      <h3 class="product-title">巧克力推荐</h3>
      <div class="product-list product-list-vertical">
        <div class="product-item product-item-vertical">
          <a href="/product/1204050.html?huaPid=homepage-f601" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/1204050.jpg_220x240.jpg"
                alt="Felchlin妃亭手工巧克力音乐礼盒 "
              />
            </div>
            <div class="product-item-info">
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow-line2">Felchlin妃亭手工巧克力音乐礼盒 ·夹心巧克力巧克力</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="1204050" style="opacity: 1;">
                    <strong>¥358</strong>
                    <s>¥458</s>
                  </p>
                  <p class="product-item-info-sales">已销售1494件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="1204050">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-vertical">
          <a href="/product/1207010.html?huaPid=homepage-f602" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/1207010.jpg_220x240.jpg"
                alt="奢悦之美巧克力礼盒"
              />
            </div>
            <div class="product-item-info">
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow-line2">巧克巧蔻定制16粒装手工夹心巧克力·手工夹心巧克力</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="1207010" style="opacity: 1;">
                    <strong>¥288</strong>
                    <s>¥388</s>
                  </p>
                  <p class="product-item-info-sales">已销售4288件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="1207010">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-vertical">
          <a href="/product/1201003.html?huaPid=homepage-f603" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/1201003.jpg_220x240.jpg"
                alt="奢悦之美巧克力礼盒"
              />
            </div>
            <div class="product-item-info">
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow-line2">奢悦之美巧克力礼盒·夹心巧克力</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="1201003" style="opacity: 1;">
                    <strong>¥158</strong>
                    <s>¥358</s>
                  </p>
                  <p class="product-item-info-sales">已销售4716件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="1201003">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="product-item product-item-vertical">
          <a href="/product/1207068.html?huaPid=homepage-f604" class="navigation">
            <div class="product-item-pic">
              <img
                src="https://img01.hua.com/uploadpic/newpic/1207068.jpg_220x240.jpg"
                alt="心动炫彩口红礼盒"
              />
            </div>
            <div class="product-item-info">
              <div class="product-item-info-tags">
                <span>新品上新</span>
              </div>
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name text-overflow">心动炫彩口红礼盒·夹心巧克力</p>
              <div class="product-item-info-bottom">
                <div class="product-item-info-bottom-left">
                  <p class="product-item-info-prices" data-id="1207068" style="opacity: 1;">
                    <strong>¥258</strong>
                    <s>¥258</s>
                  </p>
                  <p class="product-item-info-sales">已销售1849件</p>
                </div>
                <div class="product-item-info-bottom-right" data-id="1207068">
                  <i class="iconfont iconfont-buy"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="product-more">
        <a href="https://m.hua.com/gifts/Chocolates/" class="product-more-btn">查看更多</a>
      </div>
    </section>

    <section class="qiyetuangou">
      <a href="/qiyetuangou/" class="navigation">
        <img src="https://img02.hua.com/m/home/img/m_home_qiyetuangou.png" />
      </a>
    </section>
    <section class="brand">
      <h3 class="brand-title">为什么选择我们</h3>
      <div class="brand-list">
        <div class="brand-item">
          <img src="https://img02.hua.com/m/pro_detail/m_details_brand_01.png" alt="获评鲜花龙头企业" />
          <p>获评鲜花龙头企业</p>
        </div>
        <div class="brand-item">
          <img src="https://img02.hua.com/m/pro_detail/m_details_brand_02.png" alt="1~3小时送花上门" />
          <p>1~3小时送花上门</p>
        </div>
        <div class="brand-item">
          <img src="https://img02.hua.com/m/pro_detail/m_details_brand_03.png" alt="赛事冠军花艺师团队" />
          <p>赛事冠军花艺师团队</p>
        </div>
        <div class="brand-item">
          <img src="https://img02.hua.com/m/pro_detail/m_details_brand_04.png" alt="严选花材" />
          <p>严选花材</p>
        </div>
        <div class="brand-item">
          <img src="https://img02.hua.com/m/pro_detail/m_details_brand_05.png" alt="12道严苛品控标准" />
          <p>12道严苛品控标准</p>
        </div>
        <div class="brand-item">
          <img src="https://img02.hua.com/m/pro_detail/m_details_brand_06.png" alt="500万用户信赖好评" />
          <p>500万用户信赖好评</p>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="footer-links" style="padding-bottom:1rem;">
        <a class="footer-links-item" href="/qiyetuangou/" title="企业团购">企业团购</a>
        <a class="footer-links-item" href="/you/" title="设计师款">设计师款</a>
        <a class="footer-links-item" href="/huadian/" title="同城鲜花">同城鲜花</a>
        <a class="footer-links-item" href="/huayu/" title="花语大全">花语大全</a>
      </div>
      <div class="footer-links" style="padding-top:0;">
        <a class="footer-links-item" href="/profile/why_choose_us.htm" title="花礼优势">花礼优势</a>
        <a class="footer-links-item" href="/yongganai/" title="勇敢爱">勇敢爱</a>
        <a class="footer-links-item" href="/help/faq.htm" title="常见问题">常见问题</a>
        <a class="footer-links-item" href="/profile/about.htm" title="关于我们">关于我们</a>
      </div>
      <div class="footer-entry">
        <div class="footer-entry-item">
          <a href="/mbzzy/" class="navigation">
            <i class="iconfont iconfont-iphone">
              <van-icon name="desktop-o" />
            </i>
            <p>客户端</p>
          </a>
        </div>
        <div class="footer-entry-item">
          <a href="/chat/" class="navigation">
            <i class="iconfont iconfont-sevice">
              <van-icon name="service-o" />
            </i>
            <p>客服</p>
          </a>
        </div>
      </div>
      <p class="footer-copyright">
        Copyright © 2005~2019 花礼网（中国鲜花礼品网）版权所有
        <br />中国鲜花网领先品牌，鲜花速递专家！
      </p>
      <span id="animationElement" class="cart-elemnt"></span>
    </footer>
    <div class="scrollbox" id="scrollbox" style="display: block;" @click="topTo">
      <div class="scrollbox-item" id="scrollbox-goTop">
        <i class="iconfont iconfont-top">↑</i>
      </div>
    </div>
  </div>
</template>
<style src="../../assets/home.css" scoped>
</style>
<style>
.home {
  background: #e9ecf0;
  font-size: 15px;
}
.home .footer-links-item {
  font-size: 13px;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import '../../assets/home.css'
import store from "../../store";
export default {
  name: "home",
  data() {
    return {
      show: store.state.show,
      imgs: [
        "https://img02.hua.com/slider/18_youflower_m.jpg",
        "https://img02.hua.com/slider/19_qixi_0805_m.png",
        "https://img02.hua.com/slider/18_shizizuo_m.jpg",
        "https://img02.hua.com/slider/18_birthday_m.jpg"
      ],
      imgimg: "",
      // '',
      flower: [
        {
          name: "鲜花",
          src: "https://img02.hua.com/m/home/img/m_home_category_flower.png"
        },
        {
          name: "永生花",
          src: "https://img02.hua.com/m/home/img/m_home_category_ppf.png"
        },
        {
          name: "蛋糕",
          src: "https://img02.hua.com/m/home/img/m_home_category_cake.png"
        },
        {
          name: "礼品",
          src: "https://img02.hua.com/m/home/img/m_home_category_gift.png"
        },
        {
          name: "巧克力",
          src: "https://img02.hua.com/m/home/img/m_home_category_chocolate.png"
        }
      ],
      lovers: []
    };
  },
  async created() {
    const imgimg = await this.$axios(
      "https://www.easy-mock.com/mock/5d497276f8ea0204ff320fa5/pra/"
    );
    this.imgimg = imgimg.data.data;
    const lovers = await this.$axios(
      "https://www.easy-mock.com/mock/5d4abd6a334a102e1be864b8/hua/"
    );
    this.lovers = lovers.data.data;
    // console.log(lovers.data.data);
  },
  methods: {
    topTo() {
      this.$el.scrollIntoView();
    },
    init() {
      if (localStorage.getItem("show")) {
        this._data.show = localStorage.getItem("show");
        console.log(this._data.show);
      } else {
        this._data.show = this.$store.getters.getShow;
      }
    },
    close() {
      // var show='none'
      store.commit("setShow", "none");
      localStorage.setItem("show", "none");
      this.init();
    },
    navTo(id) {
      this.$router.push({
        name:'detail',
        query: {id}
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

