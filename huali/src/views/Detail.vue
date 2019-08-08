<style src='../assets/detail.css' scoped>
</style>
<style scoped>
.detail {
  background: #e9ecf0;
  font-size: 15px;
}
</style>

<template>
  <div class="detail">
    <header class="headerbar">
      <div class="headerbar-left">
        <a @click="backTo" class="navigation">
          <i class="iconfont iconfont-arrow-left">
            <van-icon color="#999" size="25px" name="arrow-left" />
          </i>
        </a>
      </div>
      <div class="headerbar-center">
        <p class="headerbar-content">
          <a href="/">
            <img
              src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"
              alt="hua.com,logo"
              class="headerbar-logo"
            />
          </a>
        </p>
      </div>
      <div class="headerbar-right">
        <div onclick="huatools.toggleCategoryMenu();" class="navigation headerbar-menu-toggle">
          <i class="iconfont iconfont-menu"></i>
          <nav id="headerbarMenu" class="headerbar-menu">
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
                <i id="cartCount" class="iconfont iconfont-shopcart"></i>
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
    <section class="probanner">
      <div id="proSwiper" class="swiper-container swiper-container-horizontal swiper-container-ios">
        <van-swipe :autoplay="3000" indicator-color="white" @change="onChange">
          <van-swipe-item v-for="(item,index) in imgs" :key="index">
            <img :src="item" />
          </van-swipe-item>
          <div class="probanner-pagination" slot="indicator">{{ current + 1 }}/4</div>
        </van-swipe>
      </div>
    </section>
    <section class="proinfo">
      <div class="proinfo-head">
        <div class="proinfo-head-title">
          {{hua.name}}-{{hua.desc}}
          <span class="text-orange" v-text="hua.promo"></span>
        </div>
        <div class="proinfo-head-collect">
          <a href="javascript:;" class="navigation">
            <i class="iconfont iconfont-collect">
              <van-icon name="star-o" />
            </i>
          </a>
        </div>
      </div>
      <div class="proinfo-body">
        <div class="proinfo-body-price">
          <span class="proinfo-body-price-sjg">¥{{hua.prices}}</span>
          <s class="proinfo-body-price-jg">¥{{hua.price2}}</s>
          <span class="label">9折</span>
          <!---->
        </div>
        <div class="proinfo-body-sales" v-text="hua.sales"></div>
      </div>
      <!---->
    </section>
    <div class="media">
      <div class="media-left">
        <i class="iconfont iconfont-iphone">
          <van-icon name="phone-circle-o" />
        </i>
      </div>
      <div class="media-center">
        <font class="fontsize-15">
          APP下单立减
          <i>8</i>元
        </font>
      </div>
      <div class="media-right">
        <i class="iconfont iconfont-arrow-right">
          <van-icon name="arrow" />
        </i>
      </div>
    </div>
    <section class="detailsinfo">
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">花语</div>
        <div class="detailsinfo-item-desc">你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。</div>
      </div>
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">材料</div>
        <div class="detailsinfo-item-desc">
          高档礼盒装鲜花:19枝红玫瑰，勿忘我0.1扎
          <br />
        </div>
      </div>
      <div data-toggle="true" class="detailsinfo-item hidden">
        <div class="detailsinfo-item-title">配送</div>
        <div
          class="detailsinfo-item-desc"
        >限送100多个主要城市的市区及近郊：北京,上海,深圳,广州,成都,武汉,南京,杭州,苏州,天津,西安,长沙,东莞,厦门,佛山,沈阳,合肥,重庆,大连,郑州,青岛,太原,无锡,石家庄,济南,宁波,哈尔滨,乌鲁木齐,贵阳,昆明,福州,长春,南昌,兰州,珠海,南宁,中山,常州,金华,邯郸,泉州,海口,嘉兴,南通,呼和浩特,廊坊,唐山,温州,徐州,绵阳,烟台,襄阳,保定,潍坊,镇江,衡阳,包头,赣州,扬州,清远,荆州,莆田,汉中,洛阳,湛江,九江,鞍山,大庆,秦皇岛,张家口,桂林,吉林,淄博,蚌埠,柳州,遵义,邢台,宜春,漳州,三亚,宜宾,东营,临沂,德州,开封,大同,龙岩,齐齐哈尔,连云港,新乡,黄冈,焦作,十堰,驻马店,信阳,牡丹江,黄石,宝鸡,丹东,阜阳,北海,聊城,锦州,许昌,内江,萍乡,安庆,承德,商丘,盘锦,乐山,沧州,河源,营口,平顶山,临汾,韶关,日照,新余,晋城,松原,淮北,淮南,晋中,潮州,滨州,自贡,六安,株州,濮阳,常熟,晋江,顺德,江阴,吴江,昆山,义乌,惠阳,银川,温江,燕郊,新都,涿州,南沙,宜兴,即墨,海安县,都江堰,增城,仙桃,菏泽</div>
        <div class="detailsinfo-item-right">
          <van-icon name="arrow-down" />
        </div>
      </div>
    </section>
    <section class="skuselect">
      <div class="media">
        <div class="media-left">已选</div>
        <div class="media-center">一往情深</div>
        <div class="media-right">
         <van-icon name="ellipsis" />
        </div>
      </div>
      <div class="media">
        <div class="media-left">配送至</div>
        <div class="media-center">
          <p>
            <van-icon name="location-o" />&nbsp;
            <span>请选择配送地区</span>
          </p>
          <p class="media-desc"></p>
        </div>
        <div class="media-right">
          <van-icon name="ellipsis" />
        </div>
      </div>
    </section>
    <section class="panel">
      <div class="panel-head">
        <div class="panel-head-title">订单评价</div>
        <div class="panel-head-link">
          <a href="/comments/9010966.html">
            最近已有7220条评价
            <i class="iconfont iconfont-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="panel-body comments">
        <div class="comments-item">
          <div class="comments-item-head">
            <div class="comments-item-head-left">
              <img
                src="//img02.hua.com/pc/assets/img/avatar_default_09.jpg"
                alt="陆*锋"
                class="comments-item-head-pic"
              />
              <span class="comments-item-head-name">陆*锋</span>
            </div>
            <div class="comments-item-head-right">
              <span class="comments-item-head-star star5"></span>
            </div>
          </div>
          <div class="comments-item-content">非常漂亮，很大气</div>
          <div class="comments-item-imglist">
            <div
              class="comments-item-imglist-item"
              style="background-image: url(&quot;//img.hua.com/reviewpic/app/2019/08/07/e400fddbd8174ad69cd79e83580b7d71.jpeg&quot;);"
            >
              <a href="/productpj/PictureDetail?vorId=325256&amp;init=1"></a>
            </div>
          </div>
          <div class="comments-item-address">
            <i class="iconfont iconfont-address"></i>贵州黔南州独山县
          </div>
        </div>
      </div>
      <div class="panel-body comments">
        <div class="comments-item">
          <div class="comments-item-head">
            <div class="comments-item-head-left">
              <img
                src="//img02.hua.com/pc/assets/img/avatar_default_04.jpg"
                alt="黄*生"
                class="comments-item-head-pic"
              />
              <span class="comments-item-head-name">黄*生</span>
            </div>
            <div class="comments-item-head-right">
              <span class="comments-item-head-star star5"></span>
            </div>
          </div>
          <div class="comments-item-content">不错，很快！老婆很喜欢。赞!</div>
          <div class="comments-item-imglist">
            <div
              class="comments-item-imglist-item"
              style="background-image: url(&quot;//img.hua.com/reviewpic/app/2019/08/07/ee6c3534490741b487c61740940908fe.jpeg&quot;);"
            >
              <a href="/productpj/PictureDetail?vorId=324668&amp;init=1"></a>
            </div>
            <div
              class="comments-item-imglist-item"
              style="background-image: url(&quot;//img.hua.com/reviewpic/app/2019/08/07/3e586acafdc64416b817526ad5f6a367.jpeg&quot;);"
            >
              <a href="/productpj/PictureDetail?vorId=324668&amp;init=2"></a>
            </div>
          </div>
          <div class="comments-item-address">
            <i class="iconfont iconfont-address"></i>广西百色市平果县
          </div>
        </div>
      </div>
      <div class="panel-body comments">
        <div class="comments-item">
          <div class="comments-item-head">
            <div class="comments-item-head-left">
              <img
                src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRjiaTicU3mFbm954ibNlfib6DNnrT6tHuQdnCnnfzwluRUHicawy8WXu9iaiaFdJR3hsJvUgdXk6bNxjEg/132"
                alt="小红*恰恰"
                class="comments-item-head-pic"
              />
              <span class="comments-item-head-name">小红*恰恰</span>
            </div>
            <div class="comments-item-head-right">
              <span class="comments-item-head-star star5"></span>
            </div>
          </div>
          <div class="comments-item-content">包装精致，新鲜的花瓣上洒满了水滴，活力四射</div>
          <div class="comments-item-imglist">
            <div
              class="comments-item-imglist-item"
              style="background-image: url(&quot;//img.hua.com/reviewpic/wxmp/201907312246210408185478.jpg&quot;);"
            >
              <a href="/productpj/PictureDetail?vorId=322407&amp;init=1"></a>
            </div>
          </div>
          <div class="comments-item-address">
            <i class="iconfont iconfont-address"></i>广东省广州市海珠区
          </div>
        </div>
      </div>
      <div class="panel-footer">
        <div class="comments-more">
          <a href="/comments/9010966.html" title="查看更多评价">查看更多评价</a>
        </div>
      </div>
    </section>
    <section class="well mt-8">
      <div class="well-title">
        <h4 class="well-title-linename">为什么选择我们</h4>
      </div>
      <div class="well-body">
        <ul class="brandlist">
          <li class="brandlist-item">
            <img src="https://img02.hua.com/m/pro_detail/m_details_brand_01.png" />
            <p>获评鲜花龙头企业</p>
          </li>
          <li class="brandlist-item">
            <img src="https://img02.hua.com/m/pro_detail/m_details_brand_02.png" />
            <p>当日新鲜花材制作</p>
          </li>
          <li class="brandlist-item">
            <img src="https://img02.hua.com/m/pro_detail/m_details_brand_03.png" />
            <p>赛事冠军花艺师团队</p>
          </li>
          <li class="brandlist-item">
            <img src="https://img02.hua.com/m/pro_detail/m_details_brand_04.png" />
            <p>严选花材</p>
          </li>
          <li class="brandlist-item">
            <img src="https://img02.hua.com/m/pro_detail/m_details_brand_05.png" />
            <p>12道严苛品控标准</p>
          </li>
          <li class="brandlist-item">
            <img src="https://img02.hua.com/m/pro_detail/m_details_brand_06.png" />
            <p>500万用户信赖好评</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="panel">
      <div class="panel-head">
        <div class="panel-head-title">图文详情</div>
      </div>
      <div class="panel-body">
        <div class="proimgdetails">
          <img
            src="//img01.hua.com/uploadpic/images/by_20180615112041289.jpg"
            data-original="//img01.hua.com/uploadpic/images/by_20180615112041289.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="//img01.hua.com/uploadpic/images/by_20180615111319404.jpg"
            data-original="//img01.hua.com/uploadpic/images/by_20180615111319404.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="//img01.hua.com/uploadpic/images/by_2018061511132044.jpg"
            data-original="//img01.hua.com/uploadpic/images/by_2018061511132044.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img02.hua.com/m/pro_detail/375x409.png"
            data-original="//img01.hua.com/uploadpic/images/by_20180615111320443.jpg"
            alt="产品详情图"
          />
          <img
            src="https://img02.hua.com/m/pro_detail/375x409.png"
            data-original="//img01.hua.com/uploadpic/images/by_201806151113212.jpg"
            alt="产品详情图"
          />
          <img
            src="https://img02.hua.com/m/pro_detail/375x409.png"
            data-original="//img01.hua.com/uploadpic/images/by_20180615111321943.jpg"
            alt="产品详情图"
          />
          <img
            src="https://img02.hua.com/m/pro_detail/375x409.png"
            data-original="//img01.hua.com/uploadpic/images/by_20180615111322546.jpg"
            alt="产品详情图"
          />
          <img
            src="https://img02.hua.com/m/pro_detail/375x409.png"
            data-original="//img01.hua.com/uploadpic/images/by_20180719134209307.jpg"
            alt="产品详情图"
          />
          <img
            src="https://img02.hua.com/m/pro_detail/375x409.png"
            data-original="//img01.hua.com/uploadpic/images/by_20180615111323757.jpg"
            alt="产品详情图"
          />
          <img
            src="https://img02.hua.com/m/pro_detail/375x409.png"
            data-original="//img01.hua.com/uploadpic/images/by_20180719134135380.jpg"
            alt="产品详情图"
          />
          <img
            src="https://img02.hua.com/m/pro_detail/375x409.png"
            data-original="//img01.hua.com/uploadpic/images/by_20180719134122599.jpg"
            alt="产品详情图"
          />
          <img
            src="https://img02.hua.com/m/pro_detail/375x409.png"
            data-original="https://img02.hua.com/pc/images/xianhua_cardstyle.jpg"
            alt="产品详情图"
          />
        </div>
      </div>
    </section>
    <section class="disseminate">
      <div class="well">
        <div class="well-title well-title-bb">龙头企业认证·14年品牌</div>
        <div class="well-body">
          <p>始于2005，多次获中国电子商务协会“鲜花龙头企业”认证。</p>
          <img
            src="https://img02.hua.com/m/pro_detail/m_details_point_01.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_01.png"
            alt="鲜花龙头企业"
            style
          />
        </div>
      </div>
      <div class="well">
        <div class="well-title well-title-bb">12道品控标准 + 送前实拍</div>
        <div class="well-body">
          <p>行业内率先研发并实施12道严苛品控标准：从花材采购、制作、成品、配送、售后全程覆盖，将产品及服务标准化；每束花均实拍回传总部审核，符合品控标准方可送出。</p>
          <img
            src="https://img02.hua.com/m/pro_detail/m_details_point_02.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_02.png"
            alt="送前实拍"
            style
          />
        </div>
      </div>
      <div class="well">
        <div class="well-title well-title-bb">花艺设计团队</div>
        <div class="well-body">
          <p>国内领先的原创花艺：中国花艺博览会赛事冠军花艺师打造团队，坚持原创设计，创作花款迄今已畅销千万束。</p>
          <img
            src="https://img02.hua.com/m/pro_detail/m_details_point_03.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_03.png"
            alt="花艺设计团队"
            style
          />
        </div>
      </div>
      <div class="well">
        <div class="well-title well-title-bb">当日新鲜花材制作，极速送达</div>
        <div class="well-body">
          <p>门店覆盖全国2000+城市，鲜花皆由当地门店花艺师在配送当日使用新鲜A级花材制作，确保鲜花娇艳欲滴！并由专人专车送货上门，最快1小时送达，快人一步！</p>
          <img
            src="https://img02.hua.com/m/pro_detail/m_details_point_04.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_04.png"
            alt="新鲜花材"
            style
          />
        </div>
      </div>
      <div class="well">
        <div class="well-title well-title-bb">客服团队</div>
        <div class="well-body">
          <p>建设一支较其他电商更大规模的客服团队，将常规客服升级为售前订花顾问、售中专人跟单、售后快速响应的一站式管家客服模式。</p>
          <img
            src="https://img02.hua.com/m/pro_detail/m_details_point_05.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_05.png"
            alt="客服团队"
            style
          />
        </div>
      </div>
      <div class="well">
        <div class="well-title well-title-bb">优秀平台汇聚优秀人才</div>
        <div class="well-body">
          <p>我们相信优秀的平台环境可以吸引同样气质、热爱花礼行业的优秀人才。</p>
          <img
            src="https://img02.hua.com/m/pro_detail/375x409.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_06.png"
            alt="优秀平台汇聚优秀人才"
          />
        </div>
      </div>
      <div class="well">
        <div class="well-title well-title-bb">不只鲜花 · 跨界音乐微电影</div>
        <div class="well-body">
          <p>联合GIMC打造“勇敢爱”系列原创微电影、赞助《不要音乐》大型音乐旅行节目，全网播放超5000万次。</p>
          <img
            src="https://img02.hua.com/m/pro_detail/375x409.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_07.png"
            alt="跨界音乐微电影"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      hua: [],
      imgs: [
        "https://img01.hua.com/uploadpic/newpic/9010966.jpg",
        "//img01.hua.com/uploadpic/newpic/201801162043054106.jpg",
        "//img01.hua.com/uploadpic/newpic/201806151123188147.jpg",
        "//img01.hua.com/uploadpic/newpic/201708091719050547.jpg"
      ]
    };
  },
  async created() {
    const hua = await this.$axios(
      "https://www.easy-mock.com/mock/5d4abd6a334a102e1be864b8/hua/"
    );
    // console.log(hua.data.data[0]);
    this.hua = hua.data.data[0];
  },
  methods: {
    backTo() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.current = index;
    }
  }
};
</script>


