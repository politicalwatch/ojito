<!-- eslint-disable max-len -->
<template>
  <div class="cookiesmsg">
    <div class="cookiesmsg__wrap">
      <span>Al continuar navegando, aceptas nuestro uso de cookies. </span>
      <span>Puedes leer nuestro Aviso Legal <router-link :to="{name: 'cookies'}">aquí</router-link>.</span>
    </div>
    <div class="cookiesmsg__close" @click="hideCookies">
      Cerrar
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiesMsg',
  methods: {
    hideCookies() {
      this.$store.dispatch('hideCookieMsg');
    },
  },
};
</script>

<style lang="scss">
.cookiesmsg {
  position: fixed;
  background: white;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #656565;
  text-align: center;
  font-size: 14px;
  z-index: 99;
  padding: 6px 10px;
  box-sizing: border-box;

  &__close {
    display: inline-block;
    cursor: pointer;
    background: #656565;
    color: white;
    line-height: 1;
    padding: 3px 4px;
    border-radius: 2px;
    transition: background 200ms ease;
    &:hover {
      background: black;
    }
  }
  &__wrap {
    display: inline-block;
    padding: 4px 24px 2px;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Ctitle%3Ecoooooooies%3C%2Ftitle%3E%3Cdefs%3E%3Cpath%20d%3D%22M20.512%2010.324A3.498%203.498%200%200%200%2024%2011.964V12c0%206.627-5.373%2012-12%2012S0%2018.627%200%2012%205.373%200%2012%200h.035a3.498%203.498%200%200%200%201.64%203.488%205%205%200%200%200%206.836%206.836z%22%20id%3D%22a%22%2F%3E%3Ccircle%20id%3D%22c%22%20cx%3D%222%22%20cy%3D%222%22%20r%3D%222%22%2F%3E%3Ccircle%20id%3D%22e%22%20cx%3D%221.5%22%20cy%3D%221.5%22%20r%3D%221.5%22%2F%3E%3Ccircle%20id%3D%22g%22%20cx%3D%221%22%20cy%3D%221%22%20r%3D%221%22%2F%3E%3Ccircle%20id%3D%22i%22%20cx%3D%221%22%20cy%3D%221%22%20r%3D%221%22%2F%3E%3Ccircle%20id%3D%22k%22%20cx%3D%221%22%20cy%3D%221%22%20r%3D%221%22%2F%3E%3Ccircle%20id%3D%22m%22%20cx%3D%221.5%22%20cy%3D%221.5%22%20r%3D%221.5%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%200h28v28H0z%22%2F%3E%3Cg%20transform%3D%22translate(2%202)%22%3E%3Cmask%20id%3D%22b%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23D17715%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%3Cpath%20d%3D%22M21.512%208.824A3.498%203.498%200%200%200%2025%2010.464v.036c0%206.627-5.373%2012-12%2012s-12-5.373-12-12%205.373-12%2012-12h.035a3.498%203.498%200%200%200%201.64%203.488%205%205%200%200%200%206.836%206.836z%22%20fill%3D%22%23F7B259%22%20mask%3D%22url(%23b)%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(7%2010)%22%3E%3Cmask%20id%3D%22d%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23c%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23482510%22%20xlink%3Ahref%3D%22%23c%22%2F%3E%3Ccircle%20fill%3D%22%236A3614%22%20mask%3D%22url(%23d)%22%20cx%3D%222.3%22%20cy%3D%221.5%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(16%2018)%22%3E%3Cmask%20id%3D%22f%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23e%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23482510%22%20xlink%3Ahref%3D%22%23e%22%2F%3E%3Ccircle%20fill%3D%22%236A3614%22%20mask%3D%22url(%23f)%22%20cx%3D%221.8%22%20cy%3D%221%22%20r%3D%221.5%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(10%2017)%22%3E%3Cmask%20id%3D%22h%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23g%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23482510%22%20xlink%3Ahref%3D%22%23g%22%2F%3E%3Ccircle%20fill%3D%22%236A3614%22%20mask%3D%22url(%23h)%22%20cx%3D%221.3%22%20cy%3D%22.5%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(19%207)%22%3E%3Cmask%20id%3D%22j%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23i%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23D17715%22%20xlink%3Ahref%3D%22%23i%22%2F%3E%3Ccircle%20fill%3D%22%23F7B259%22%20mask%3D%22url(%23j)%22%20cx%3D%221.2%22%20cy%3D%22.6%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(24%208)%22%3E%3Cmask%20id%3D%22l%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23k%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23D17715%22%20xlink%3Ahref%3D%22%23k%22%2F%3E%3Ccircle%20fill%3D%22%23F7B259%22%20mask%3D%22url(%23l)%22%20cx%3D%221.2%22%20cy%3D%22.6%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(19%201)%22%3E%3Cmask%20id%3D%22n%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23m%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23D17715%22%20xlink%3Ahref%3D%22%23m%22%2F%3E%3Ccircle%20fill%3D%22%23F7B259%22%20mask%3D%22url(%23n)%22%20cx%3D%221.8%22%20cy%3D%221.1%22%20r%3D%221.5%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E") no-repeat; /* eslint-disable-line */
    background-size: 20px;
    background-position: 0 5px;
  }

  a {
    color: #e50047;
    &:hover {
      color: #e50047;
      text-decoration: underline;
    }
  }
}
</style>
