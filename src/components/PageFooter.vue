<template>
  <footer class="footer">
    aaa
  </footer>
</template>

<script>
export default {
  name: 'page-footer',
};
</script>

<style>
  .footer {
    color: #fff;
    width: 100%;
    z-index: 1000;
    position: absolute;
    bottom: 0;
    background-color: #000;
  }

  .footer * {
    word-spacing: 0
  }

  .footer .footer-main {
    font-size: 0;
    padding-top: 40px;
    display: inline-block
  }

  .footer .footer-main .footer-main-title {
    line-height: 1;
    font-size: 22px;
    margin: 0
  }

  .footer .footer-main .footer-main-link {
    display: inline-block;
    margin: 12px 18px 0 0;
    line-height: 1;
    font-size: 12px;
    color: #768193
  }

  .footer .footer-main .footer-main-link a {
    color: #768193;
    text-decoration: none
  }
</style>
