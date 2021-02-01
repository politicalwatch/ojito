<template>
  <div class="footer">
    <div class="footer__wrap">
      <router-link :to="{name: 'about'}">Acerca de</router-link>
      <router-link :to="{name: 'methodology'}">Metodología</router-link>
      <a href="">Contacto</a>
    </div>
    <a href="https://politicalwatch.es/" class="footer__tenant">
      <img src="/img/politicalwatch.svg" alt="PoliticalWatch">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
.footer {
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0,0,0,0.6);
  overflow: hidden;
  position: relative;

  &__wrap {
    display: block;
    max-width: 320px;
    margin: 12px auto 0;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 4px 14px;
    opacity: 0.9;
  }

  &__tenant {
    display: block;
    text-align: center;
    padding-top: 24px;
    padding-bottom: 20px;
    img {
      width: 200px;
    }
  }
}
</style>
