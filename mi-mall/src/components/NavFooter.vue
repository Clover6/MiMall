<template>
  <footer class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">小米商城</a><span>|</span> <a href="">MIUI</a
      ><span>|</span> <a href="javascript:;">米家</a><span>|</span>
      <a href="">政企服务</a><span>|</span>
      <a href="javascript:;">小米集团隐私政策</a><span>|</span>
      <a href="javascript:;">小米公司儿童信息保护规则</a><span>|</span>
      <a href="javascript:;">小米天猫店</a>
    </div>
    <div class="copyright">
      © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号
      京网文[2020]0276-042号
    </div>
  </footer>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>

<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    margin-bottom: 13px;
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    font-size: 14px;
  }
}
</style>
