<template>
  <div class="list">
    <header class="headerbar">
      <div class="headerbar-back">
        <a @click="backTo" class="navigation">
          <van-icon color="#999" size="17px" name="arrow-left" />
        </a>
      </div>
      <div class="headerbar-content">
        <div class="headerbar-content-left">
          <van-icon color="#999" size="17px" name="search" />
        </div>
        <!--<div class="headerbar-content-center">搜索鲜花、蛋糕、礼品</div>-->
        <form class="headerbar-content-center" action="/search.html" method="get">
          <input type="search" name="q" placeholder="请输入关键词" results="5" />
        </form>
      </div>
    </header>
    <section class="catebox" :v-model="num">
        <!--CategoryBox LeftMenu-->
        <aside class="catebox-menu">
                <div v-for="(m,index) in left" :key="index" @click="change(index)"  :class="[{active:num==index},class1]">
                    <a class="catebox-menu-item-link" v-text="m"></a>
                </div>
        </aside>
        <!--CategoryBox RightDetails-->
        <section class="catebox-details">
                <article  id="hot" name="hot" :class="[{active:num==0},class2]">
                        <header class="catebox-details-banner" style="background-image: url('https://img02.hua.com/slider/19_qixi_all_m.jpg');">
                            <a href="/theme/qixi/" class="navigation"></a>
                        </header>
                                                                        <nav class="catebox-details-list">
                                        <div class="catebox-details-item ">
                                            <a href="/flower/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_hot_flower.jpg" alt="鲜花">
                                                    <p class="catebox-details-item-desc">鲜花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/cake/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_hot_cake.jpg" alt="蛋糕">
                                                    <p class="catebox-details-item-desc">蛋糕</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/yongshenghua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_hot_ppf.jpg" alt="永生花">
                                                    <p class="catebox-details-item-desc">永生花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/gifts/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_hot_gift.jpg" alt="特色礼品">
                                                    <p class="catebox-details-item-desc">特色礼品</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/you/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_hot_you.jpg" alt="设计师款">
                                                    <p class="catebox-details-item-desc">设计师款</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/businessFlower/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_hot_business.jpg" alt="商务鲜花">
                                                    <p class="catebox-details-item-desc">商务鲜花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/gifts/Chocolates/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_hot_chocolate.jpg" alt="巧克力">
                                                    <p class="catebox-details-item-desc">巧克力</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/giftsBasket/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_hot_baseket.jpg" alt="礼篮">
                                                    <p class="catebox-details-item-desc">礼篮</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/plant/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_hot_plant.jpg" alt="绿植花卉">
                                                    <p class="catebox-details-item-desc">绿植花卉</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/qiyetuangou/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_hot_groupbuy.jpg" alt="企业团购">
                                                    <p class="catebox-details-item-desc">企业团购</p>
                                            </a>
                                        </div>
                                </nav>
                </article>
                <article  id="flower" name="flower" :class="[{active:num==1},class2]">
                        <header class="catebox-details-banner" style="background-image: url('https://img02.hua.com/m/category/m_category_banner_flower.jpg');">
                            <a href="/product/9012221.html" class="navigation">浪漫告白·卡罗拉红玫瑰11枝</a>
                        </header>
                                                                        <div class="catebox-details-title">
                                    <h4 class="catebox-details-title-left">用途</h4>
                                        <div class="catebox-details-title-right">
                                            <a href="/ranking/" class="navigation">鲜花排行榜<i class="iconfont iconfont-arrow-right"></i></a>
                                        </div>
                                </div>
                                <nav class="catebox-details-list">
                                        <div class="catebox-details-item ">
                                            <a href="/flower/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_all.jpg" alt="全部">
                                                    <p class="catebox-details-item-desc">全部</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/aiqingxianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_use_love.jpg" alt="爱情鲜花">
                                                    <p class="catebox-details-item-desc">爱情鲜花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/songzhangbeixianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_use_parent.jpg" alt="老师长辈">
                                                    <p class="catebox-details-item-desc">老师长辈</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/youqingxianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_use_firend.jpg" alt="友情鲜花">
                                                    <p class="catebox-details-item-desc">友情鲜花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/shengrixianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_use_brithday.jpg" alt="生日鲜花">
                                                    <p class="catebox-details-item-desc">生日鲜花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/tanbingweiwenxianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_use_weiwen.jpg" alt="探病慰问">
                                                    <p class="catebox-details-item-desc">探病慰问</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/businessflower/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_use_business.jpg" alt="商务鲜花">
                                                    <p class="catebox-details-item-desc">商务鲜花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/zhufuqinghexianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_use_zuhe.jpg" alt="祝福庆贺">
                                                    <p class="catebox-details-item-desc">祝福庆贺</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/hunqingxianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_use_wedding.jpg" alt="婚庆鲜花">
                                                    <p class="catebox-details-item-desc">婚庆鲜花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/daoqianxianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_use_daoqian.jpg" alt="道歉鲜花">
                                                    <p class="catebox-details-item-desc">道歉鲜花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/aisixianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_use_aisi.jpg" alt="哀思鲜花">
                                                    <p class="catebox-details-item-desc">哀思鲜花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/worldflora/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_use_world.jpg" alt="港澳台鲜花">
                                                    <p class="catebox-details-item-desc">港澳台鲜花</p>
                                            </a>
                                        </div>
                                </nav>
                                <div class="catebox-details-title">
                                    <h4 class="catebox-details-title-left">花材</h4>
                                </div>
                                <nav class="catebox-details-list">
                                        <div class="catebox-details-item ">
                                            <a href="/meigui/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_wood_rose.jpg" alt="玫瑰">
                                                    <p class="catebox-details-item-desc">玫瑰</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/baihe/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_wood_lily.jpg" alt="百合">
                                                    <p class="catebox-details-item-desc">百合</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/kangnaixin/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_wood_carnation.jpg" alt="康乃馨">
                                                    <p class="catebox-details-item-desc">康乃馨</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/xiangrikui/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_wood_sunflower.jpg" alt="向日葵">
                                                    <p class="catebox-details-item-desc">向日葵</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/fulang/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_wood_fujiro.jpg" alt="扶郎">
                                                    <p class="catebox-details-item-desc">扶郎</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/xiuqiu/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_wood_hydrangea.jpg" alt="绣球">
                                                    <p class="catebox-details-item-desc">绣球</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/yujinxiang/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_wood_tulip.jpg" alt="郁金香">
                                                    <p class="catebox-details-item-desc">郁金香</p>
                                            </a>
                                        </div>
                                </nav>
                                <div class="catebox-details-title">
                                    <h4 class="catebox-details-title-left">类别</h4>
                                </div>
                                <nav class="catebox-details-list">
                                        <div class="catebox-details-item ">
                                            <a href="/huashu/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_type_bouquet.jpg" alt="传情花束">
                                                    <p class="catebox-details-item-desc">传情花束</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/hezhuanghua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_type_box.jpg" alt="创意花盒">
                                                    <p class="catebox-details-item-desc">创意花盒</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/pingchahua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_type_ping.jpg" alt="瓶插花">
                                                    <p class="catebox-details-item-desc">瓶插花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/hualan/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_type_baseket.jpg" alt="精致花篮">
                                                    <p class="catebox-details-item-desc">精致花篮</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/businessFlower/kaiyehualan/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_type_opening.jpg" alt="开业花篮">
                                                    <p class="catebox-details-item-desc">开业花篮</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/you/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_use_you.jpg" alt="设计师款">
                                                    <p class="catebox-details-item-desc">设计师款</p>
                                            </a>
                                        </div>
                                </nav>
                                <div class="catebox-details-title">
                                    <h4 class="catebox-details-title-left">颜色</h4>
                                </div>
                                <nav class="catebox-details-list catebox-details-list-text">
                                        <div class="catebox-details-item">
                                            <a href="/hongsexianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/app/color_03.png" alt="红色">
                                                <p class="catebox-details-item-desc">红色</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/fensexianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/app/color_05.png" alt="粉色">
                                                <p class="catebox-details-item-desc">粉色</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/xiangbinsexianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/app/color_07.png" alt="香槟色">
                                                <p class="catebox-details-item-desc">香槟色</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/huangsexianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/app/color_09.png" alt="黄色">
                                                <p class="catebox-details-item-desc">黄色</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/baisexianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/app/color_11.png" alt="白色">
                                                <p class="catebox-details-item-desc">白色</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/zisexianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/app/color_13.png" alt="紫色">
                                                <p class="catebox-details-item-desc">紫色</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/lansexianhua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/app/color_15.png" alt="蓝色">
                                                <p class="catebox-details-item-desc">蓝色</p>
                                            </a>
                                        </div>
                                </nav>
                                <div class="catebox-details-title">
                                    <h4 class="catebox-details-title-left">价格</h4>
                                </div>
                                <nav class="catebox-details-list catebox-details-list-text">
                                        <div class="catebox-details-item">
                                            <a href="/tejiaxianhua/" class="navigation">
                                                <p class="catebox-details-item-desc">特价鲜花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/xianhuajiage/0-150/" class="navigation">
                                                <p class="catebox-details-item-desc">150元以下</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/xianhuajiage/150-250/" class="navigation">
                                                <p class="catebox-details-item-desc">150-250元</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/xianhuajiage/250-350/" class="navigation">
                                                <p class="catebox-details-item-desc">250-350元</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/xianhuajiage/350-550/" class="navigation">
                                                <p class="catebox-details-item-desc">350-550元</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/xianhuajiage/550-800/" class="navigation">
                                                <p class="catebox-details-item-desc">550-800元</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/xianhuajiage/800-99999/" class="navigation">
                                                <p class="catebox-details-item-desc">800元以上</p>
                                            </a>
                                        </div>
                                </nav>
                                <div class="catebox-details-title">
                                    <h4 class="catebox-details-title-left">枝数</h4>
                                </div>
                                <nav class="catebox-details-list catebox-details-list-text">
                                        <div class="catebox-details-item">
                                            <a href="/jiuduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">9枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/shiduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">10枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/shiyiduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">11枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/shierduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">12枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/shiliuduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">16枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/shibaduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">18枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/shijiuduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">19枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/ershiduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">20枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/ershierduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">22枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/ershijiuduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">29枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/sanshisanduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">33枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/sanshiliuduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">36枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/wushiduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">50枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/liushiliuduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">66枝</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item">
                                            <a href="/jiushijiuduomeigui/" class="navigation">
                                                <p class="catebox-details-item-desc">99枝以上</p>
                                            </a>
                                        </div>
                                </nav>
                </article>
                <article   id="ppf" name="ppf" :class="[{active:num==2},class2]">
                        <header class="catebox-details-banner" style="background-image: url('https://img02.hua.com/m/category/m_category_banner_ppf.jpg');">
                            <a href="/product/1073033.html" class="navigation">永生花·一生一世</a>
                        </header>
                                                                        <div class="catebox-details-title">
                                    <h4 class="catebox-details-title-left">永生花</h4>
                                        <div class="catebox-details-title-right">
                                            <a href="/ranking/?type=ppf" class="navigation">永生花排行榜<i class="iconfont iconfont-arrow-right"></i></a>
                                        </div>
                                </div>
                                <nav class="catebox-details-list">
                                        <div class="catebox-details-item ">
                                            <a href="/yongshenghua/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_all.jpg" alt="全部">
                                                    <p class="catebox-details-item-desc">全部</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/livingflower/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_ppf_ping.jpg" alt="永生瓶花">
                                                    <p class="catebox-details-item-desc">永生瓶花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/yongshenghua/yongshenghua_box.html" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_ppf_box.jpg" alt="经典花盒">
                                                    <p class="catebox-details-item-desc">经典花盒</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/yongshenghua/yongshenghua_characteristic.html" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_ppf_feature.jpg" alt="特色永生花">
                                                    <p class="catebox-details-item-desc">特色永生花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/yongshenghua/yongshenghua_large.html" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_ppf_giantrose.jpg" alt="巨型玫瑰">
                                                    <p class="catebox-details-item-desc">巨型玫瑰</p>
                                            </a>
                                        </div>
                                </nav>
                </article>
                <article   id="cake" name="cake" :class="[{active:num==3},class2]">
                        <header class="catebox-details-banner" style="background-image: url('https://img02.hua.com/m/category/m_category_banner_cake.jpg');">
                            <a href="/cake/" class="navigation">美味蛋糕·让生活充满甜蜜</a>
                        </header>
                                                                        <div class="catebox-details-title">
                                    <h4 class="catebox-details-title-left">精选品牌蛋糕</h4>
                                </div>
                                <nav class="catebox-details-list">
                                        <div class="catebox-details-item catebox-details-item-widemode">
                                            <a href="/xfxbdangao/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_cake_xfxb.jpg">
                                            </a>
                                        </div>
                                        <div class="catebox-details-item catebox-details-item-widemode">
                                            <a href="/gansodangao/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_cake_ganso.jpg">
                                            </a>
                                        </div>
                                        <div class="catebox-details-item catebox-details-item-widemode">
                                            <a href="/mcakedangao/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_cake_mcake.jpg">
                                            </a>
                                        </div>
                                        <div class="catebox-details-item catebox-details-item-widemode">
                                            <a href="/lecakedangao/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_cake_lecake.jpg">
                                            </a>
                                        </div>
                                        <div class="catebox-details-item catebox-details-item-widemode">
                                            <a href="/vcakedangao/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_cake_vcake.jpg">
                                            </a>
                                        </div>
                                        <div class="catebox-details-item catebox-details-item-widemode">
                                            <a href="/boncakedangao/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_cake_boncake.jpg">
                                            </a>
                                        </div>
                                        <div class="catebox-details-item catebox-details-item-widemode">
                                            <a href="/waffleboydangao/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_cake_waffleboy.jpg">
                                            </a>
                                        </div>
                                        <div class="catebox-details-item catebox-details-item-widemode">
                                            <a href="/micamikadangao/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_cake_micamika.jpg">
                                            </a>
                                        </div>
                                        <div class="catebox-details-item catebox-details-item-widemode">
                                            <a href="/21cakedangao/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_cake_21cake.jpg">
                                            </a>
                                        </div>
                                        <div class="catebox-details-item catebox-details-item-widemode">
                                            <a href="/incakedangao/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_cake_incake.jpg">
                                            </a>
                                        </div>
                                        <div class="catebox-details-item catebox-details-item-widemode">
                                            <a href="/beisikedangao/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_cake_bestcake.jpg">
                                            </a>
                                        </div>
                                        <div class="catebox-details-item catebox-details-item-widemode">
                                            <a href="/heartcheesedangao/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_cake_cheesecake.jpg">
                                            </a>
                                        </div>
                                </nav>
                </article>
                <article  id="chocolate" name="chocolate" :class="[{active:num==4},class2]">
                        <header class="catebox-details-banner" style="background-image: url('https://img02.hua.com/m/category/m_category_banner_chocolate.jpg');">
                            <a href="/product/1201018.html" class="navigation">CHOLO·玫瑰之恋巧克力礼盒 ￥139</a>
                        </header>
                                                                        <div class="catebox-details-title">
                                    <h4 class="catebox-details-title-left">巧克力分类</h4>
                                        <div class="catebox-details-title-right">
                                            <a href="/home/QiaoKeLiPaiHang" class="navigation">巧克力排行榜<i class="iconfont iconfont-arrow-right"></i></a>
                                        </div>
                                </div>
                                <nav class="catebox-details-list">
                                        <div class="catebox-details-item ">
                                            <a href="/gifts/chocolates/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_all.jpg" alt="全部">
                                                    <p class="catebox-details-item-desc">全部</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/jinkouqiaokeli/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_chocolate_jinkou.jpg" alt="进口Felchlin巧克力">
                                                    <p class="catebox-details-item-desc">进口Felchlin巧克力</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/qiaokeli/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_chocolate_qiaoluo.jpg" alt="巧罗巧克力">
                                                    <p class="catebox-details-item-desc">巧罗巧克力</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/qiaokouqiaokeli/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_chocolate_qiaokou.jpg" alt="巧蔻巧克力">
                                                    <p class="catebox-details-item-desc">巧蔻巧克力</p>
                                            </a>
                                        </div>
                                </nav>
                </article>
                <article id="gift" name="gift" :class="[{active:num==5},class2]">
                        <header class="catebox-details-banner" style="background-image: url('https://img02.hua.com/m/category/m_category_banner_gift.jpg');">
                            <a href="/product/1065004.html" class="navigation">特色礼品·宝石旋转木马</a>
                        </header>
                                            <nav class="catebox-details-sebanner">
                                <div class="catebox-details-sebanner-item">
                                    <a href="/gifts/NewSpecial/" class="navigation">
                                        <img src="https://img02.hua.com/m/images/m_cate_new.jpg" alt="礼品上新">
                                        <p>礼品上新</p>
                                    </a>
                                </div>
                                <div class="catebox-details-sebanner-item">
                                    <a href="/gifts/swarovski/" class="navigation">
                                        <img src="https://img02.hua.com/m/images/swarovski-m.png" alt="施华洛世奇">
                                        <p>施华洛世奇</p>
                                    </a>
                                </div>
                                <div class="catebox-details-sebanner-item">
                                    <a href="/gifts/HelloKittySpecial/" class="navigation">
                                        <img src="https://img02.hua.com/m/images/m_cata_hellokitty.jpg" alt="HelloKitty">
                                        <p>HelloKitty</p>
                                    </a>
                                </div>
                        </nav>
                                                    <div class="catebox-details-title">
                                    <h4 class="catebox-details-title-left">礼品类别</h4>
                                        <div class="catebox-details-title-right">
                                            <a href="/ranking/?type=gift" class="navigation">特色礼品排行榜<i class="iconfont iconfont-arrow-right"></i></a>
                                        </div>
                                </div>
                                <nav class="catebox-details-list">
                                        <div class="catebox-details-item ">
                                            <a href="/gifts/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_all.jpg" alt="全部">
                                                    <p class="catebox-details-item-desc">全部</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/gifts/musicbox/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_gift_music.jpg" alt="音乐盒">
                                                    <p class="catebox-details-item-desc">音乐盒</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/gifts/goldenflower/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_gift_gilt.jpg" alt="金箔花">
                                                    <p class="catebox-details-item-desc">金箔花</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/gifts/crystallaser/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_gift_crystal.jpg" alt="水晶内雕">
                                                    <p class="catebox-details-item-desc">水晶内雕</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/gifts/shoushi/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_gift_jewelry.jpg" alt="首饰/美妆">
                                                    <p class="catebox-details-item-desc">首饰/美妆</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/gifts/Chocolates/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_chocolate_jinkou.jpg" alt="巧克力">
                                                    <p class="catebox-details-item-desc">巧克力</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/toys/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_gift_doll.jpg" alt="公仔/睡枕">
                                                    <p class="catebox-details-item-desc">公仔/睡枕</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/gifts/jiajushenghuo/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_gift_daily_use.png" alt="家居生活">
                                                    <p class="catebox-details-item-desc">家居生活</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/gifts/dengshi/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_gift_invent.jpg" alt="摆件/其他">
                                                    <p class="catebox-details-item-desc">摆件/其他</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/qiyetuangou/gift_card.html" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_gift_giftcard.jpg" alt="礼品卡">
                                                    <p class="catebox-details-item-desc">礼品卡</p>
                                            </a>
                                        </div>
                                </nav>
                </article>
                <article   id="flowerbasket" name="flowerbasket" :class="[{active:num==6},class2]">
                        <header class="catebox-details-banner" style="background-image: url('https://img02.hua.com/m/category/m_category_banner_baseket.jpg');">
                            <a href="/giftsBasket/" class="navigation">温情礼篮·愿祝福常相伴</a>
                        </header>
                                                                        <div class="catebox-details-title">
                                    <h4 class="catebox-details-title-left">礼篮</h4>
                                </div>
                                <nav class="catebox-details-list">
                                        <div class="catebox-details-item ">
                                            <a href="/giftsBasket/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_basket_basket.jpg" alt="礼篮">
                                                    <p class="catebox-details-item-desc">礼篮</p>
                                            </a>
                                        </div>
                                </nav>
                </article>
                <article  id="plant" name="plant" :class="[{active:num==7},class2]">
                        <header class="catebox-details-banner" style="background-image: url('https://img02.hua.com/m/category/m_category_banner_plant.jpg');">
                            <a href="/plant/greenplant/" class="navigation">绿色花卉·为你的生活加一点颜色</a>
                        </header>
                                                                        <div class="catebox-details-title">
                                    <h4 class="catebox-details-title-left">绿植花卉</h4>
                                </div>
                                <nav class="catebox-details-list">
                                        <div class="catebox-details-item ">
                                            <a href="/plant/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_all.jpg" alt="全部">
                                                    <p class="catebox-details-item-desc">全部</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/duorouzhiwupenzai/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_plant_succulent.jpg" alt="多肉盆栽">
                                                    <p class="catebox-details-item-desc">多肉盆栽</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/plant/greenplant/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_plant_greenplant.jpg" alt="绿色植物">
                                                    <p class="catebox-details-item-desc">绿色植物</p>
                                            </a>
                                        </div>
                                        <div class="catebox-details-item ">
                                            <a href="/plant/potflower/" class="navigation">
                                                <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/m_category_flower_hot_plant.jpg" alt="盆栽花卉">
                                                    <p class="catebox-details-item-desc">盆栽花卉</p>
                                            </a>
                                        </div>
                                </nav>
                </article>
        </section>
    </section>
  </div>
</template>
<script>
// import "../../assets/category.css";
export default {
  data() {
    return {
      num:0,
      class1:'catebox-menu-item',
      class2:'catebox-details-mode',
      left:["热门推荐","鲜花","永生花","蛋糕","巧克力","特色礼品","礼篮","绿植花卉"]
    };
    // ...
  },
  methods: {
    change(index){
        this.num=index;
        // console.log(this.num);
    },
    backTo(){
      this.$router.go(-1);
    }
  }
};
</script>
<style src= "../../assets/category.css" scoped></style>

