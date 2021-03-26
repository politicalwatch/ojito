<template>
  <div class="footer">
    <div class="footer__wrap">
      <router-link :to="{name: 'interviews'}">Entrevistas</router-link>
      <router-link :to="{name: 'about'}">Acerca de</router-link>
      <router-link :to="{name: 'methodology'}">Metodología</router-link>
      <router-link :to="{name: 'covid-report'}">Informe COVID</router-link>
      <router-link :to="{name: 'final-report'}">Informe Final</router-link>
      <router-link :to="{name: 'contact'}">Contacto</router-link>
    </div>
    <div class="footer__social">
      <a href="https://www.instagram.com/o.j.i.t.o/">
        <img src="/img/icons/instagram.png" alt="Instagram de OJITO">
        <span>o.j.i.t.o</span>
      </a>
      <a href="https://twitter.com/OJITO_PW">
        <img src="/img/icons/twitter.png" alt="Twitter de OJITO">
        <span>OJITO_PW</span>
      </a>
      <a href="https://www.tiktok.com/@ojito.2021">
        <img src="/img/icons/tiktok.png" alt="Tiktok de OJITO">
        <span>ojito.2021</span>
      </a>
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
    max-width: 450px;
    margin: 12px auto 0;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    white-space: pre;
    justify-content: space-between;
    padding: 4px 14px;
    opacity: 0.9;
    > a {
      display: block;
      flex: 1 1 100%;
      text-align: center;
      margin-bottom: 10px;
    }
  }

  &__social {
    display: flex;
    padding: 22px 14px 4px;
    justify-content: space-between;
    max-width: 320px;
    margin: 0 auto;
    a {
      font-weight: 600;
      display: inline-block;
      text-align: center;
      img {
        width: 23px;
        height: auto;
        margin-right: 4px;
        margin-top: -3px;
      }
    }
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

@media screen and (min-width: 560px) {
  .footer__wrap {
    flex-wrap: nowrap;
    a {
      display: block;
      flex: 0 0 auto;
    }
  }
}
</style>
