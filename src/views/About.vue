<!-- eslint-disable max-len -->
<template>
  <div class="page page--static page--about">

    <router-link :to="{name: 'home'}" class="page__logo">
      <img src="/img/logo-sm.svg" alt="Ojito" aria-label="Ir al inicio">
    </router-link>

    <router-link :to="{name: 'home'}" class="page__close">
      <img src="/img/icons/close.svg" alt="Cerrar"  aria-label="Cerrar">
    </router-link>

    <div class="page__content">
      <h1>Acerca de</h1>

      <p>Es el <strong>Observatorio Joven de Inclumplimiento Político</strong> impulsado por <a href="https://politicalwatch.es/">Political Watch</a>. El objetivo de este proyecto es promover una cultura de rendición de cuentas de los decisores públicos a través de la monitorización de la actividad de los  grupos parlamentarios y el Gobierno en torno a las temáticas seleccionadas y el desarrollo de una campaña de incidencia pública.</p>

      <p>O.J.I.T.O. arranca en octubre de 2020 y finalizará en marzo del 2021.</p>

      <p>El proyecto está liderado <strong>desde un enfoque participativo e interseccional</strong> y co-diseñado por una comunidad de jóvenes activistas de 18 a 25 años interesadas en ámbitos como la justicia climática, el antirracismo o los derechos LGTBIQ+.</p>

      <p class="list-cap">La personas que lideran el proyecto son:</p>
      <ul>
        <li>Sagrario Eyenga Esono</li>
        <li>Francisco Javier Rodríguez Lozano</li>
        <li>Cynthia Chamba Bastidas</li>
        <li>Sara Choclán</li>
        <li>Ismail El Majdoubi</li>
        <li>Guillem Pellejero Pairó</li>
      </ul>

      <p class="list-cap">Las <strong>temáticas</strong> a las que se dará seguimiento  quedan representadas a continuación, en el caso de algunas temáticas, dada la extensión de la misma, se ha acotado para poder llevar a cabo el análisis.</p>
      <ul>
        <li>Colectivo LGTBIQ+</li>
        <li>Migraciones</li>
        <li>Cambio climático</li>
        <li>Pobreza infantil</li>
        <li>Desempleo juvenil</li>
        <li>Menores migrantes</li>
      </ul>

      <p class="list-cap">Los objetivos del proyecto son:</p>
      <ol>
        <li>Generar un espacio de participación política de la población más joven que incorpore sus prioridades temáticas, visión y diseño de sus propias estrategias dando respuesta la preocupación sobre la intervención de los/las jóvenes en la esfera política.</li>
        <li>Desarrollar experiencias de aprendizaje transformadoras que contribuyan a la capacitación de la juventud para que ejerza un liderazgo cívico en su generación y promueva cambios en la sociedad española a través del fortalecimiento de sus capacidades en investigación, monitoreo político y para la incidencia.</li>
        <li>Promover una cultura de rendición de cuentas en la población joven.</li>
        <li>Crear una nueva herramienta de monitoreo cívico que ofrezca un análisis útil, actual y fiable sobre el cumplimiento de los compromisos del Gobierno y de los grupos parlamentarios en temas sociales, climáticos y económicos como vía para movilizar a la opinión pública y una voluntad política comprometida con estas cuestiones clave.</li>
      </ol>

      <p>Puedes consultar nuestro Aviso Legal <router-link :to="{name: 'cookies'}">aquí</router-link>.</p>

    </div>

  </div>
</template>

<script>
import PageMixin from '@/views/PageMixin';

export default {
  name: 'About',
  mixins: [
    PageMixin,
  ],
};
</script>
