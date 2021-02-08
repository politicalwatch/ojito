<!-- eslint-disable max-len -->
<template>
  <div class="page page--static page--report">

    <router-link :to="{name: 'home'}" class="page__logo">
      <img src="/img/logo-sm.svg" alt="Ojito">
    </router-link>

    <router-link :to="{name: 'home'}" class="page__close">
      <img src="/img/icons/close.svg" alt="Cerrar">
    </router-link>

    <div class="page__content">
      <h1>Informe COVID</h1>

      <p>La crisis sanitaria de la COVID-19 ha tenido un impacto evidente en la situación política, social y económica. Evidentemente esto ha tenido un claro impacto en las medidas implementadas por el Gobierno y en la actividad del resto de grupos parlamentarios para hacer frente a las consecuencias de la COVID-19.</p>

      <p>La crisis sanitaria ha aumentado claramente las desigualdades preexistentes, afectando a la población más vulnerable (personas migrantes, mujeres y jóvenes). En este caso, hemos analizado la actividad parlamentaria derivada de la crisis sanitarias en las temáticas de pobreza infantil, desempleo juvenil y migraciones:</p>

      <h3 @click="toggle('infancia')">
        <span :class="{'is-expanded': isExpanded('infancia')}">La infancia después de la emergencia sanitaria de la COVID-19</span>
      </h3>

      <div class="infancia" v-show="isExpanded('infancia')">
        <p>Si la situación de la infancia era difícil antes de esta emergencia sanitaria, unos meses después la situación se ha vuelto aún más cruda para los infantes y es que, según afirma Unicef, nunca antes tantas familias se habían empobrecido tan rápido. Debemos destacar que al final del segundo trimestre de 2020 había más de 400.000 hogares con niños, niñas o adolescentes con todos sus miembros en situación de desempleo. La radiografía de la pobreza infantil se acrecienta en aquellas familias con menor formación académica y con empleos que requerían baja cualificación, estas se han visto más expuestas a la pérdida de empleo.</p>

        <p>En el contexto educativo hemos sufrido un aumento de la brecha digital que ha afectado en mayor medida a niños y niñas de familias migrantes y con pocos recursos, así como a infantes que viven en zonas rurales o mal comunicadas. Las familias monomarentales (la tasa de pobreza infantil para los hogares monomarentales es 15 veces superior a la media) y los niños y niñas con capacidades diferentes también se han visto gravemente afectados por el aumento de la brecha digital. Seguidamente, se ha visto agudizada la vulnerabilidad de los niños y niñas tutelados que han sufrido carencias materiales en los centros de protección, así como la acentuación de aislamiento. Finalmente, las niñas, niños y adolescentes más vulnerables han sufrido un deterioro en sus hábitos de salud y han visto perjudicado su bienestar físico y mental a raíz del confinamiento y la situación derivada de la crisis sanitaria.</p>

        <p>Una vez realizada la radiografía de la situación de los infantes más vulnerables a raíz de la COVID-19 cabe preguntarnos qué han hecho los partidos políticos para intentar paliar esta situación desde el Congreso de los Diputados.</p>

        <p>En primer lugar, el compromiso político con la pobreza infantil y las problemáticas a las que se han tenido que enfrentar los infantes es muy bajo, ya que todos los grupos parlamentarios han presentado solo Proposiciones no de Ley, es decir, propuestas que de ser aprobadas solo instan al Gobierno Central a tomar una serie de medidas, pero no le obligan. Distinto sería si se hubieran presentado propuestas de ley o proyectos de ley por parte del ejecutivo.</p>

        <p>Uno de los asuntos en los que más han incidido los grupos parlamentarios ha sido en la brecha digital y el abandono escolar, así destacan 6 proposiciones de los cinco principales partidos del panorama político español. Así el PSOE proponía una Proposición no de Ley por la que se instaba al Gobierno a impulsar un Plan, coordinado con las Comunidades Autónomas, para evitar el incremento del abandono escolar temprano derivado de la situación de la pandemia a causa de la COVID-19. Esta proposición instaba al Gobierno a realizar un censo en cada centro de Educación Secundaria de alumnado especialmente vulnerable y que ha estado desconectado del proceso de enseñanza-aprendizaje durante el estado de alarma y el confinamiento para realizar un seguimiento más personalizado de estos casos, que incorpore mayor flexibilidad y diversificación curricular junto con procesos de evaluación de aprendizajes adaptados a su contexto personal y distintas capacidades Así como reforzar la orientación educativa y profesional al alumnado vulnerable en riesgo de abandono y desconexión escolar, potenciar cauces de comunicación y cooperación con las familias de alumnado vulnerable y en riesgo de abandono detectado, introducir medidas de acompañamiento y refuerzo psicológico ante la detección de problemas emocionales, de ansiedad o de autoestima incrementados por los efectos de la pandemia o promover que el incremento de efectivos docentes disponibles en los centros educativos atienda como prioridad el destino de recursos humanos a la atención a la diversidad y el refuerzo escolar en la ESO, entre otras medidas.</p>

        <p>Seguidamente, el Partido Popular presentaba una Proposición no de Ley relativa a acelerar con carácter urgente las actuaciones necesarias que permitan a las Comunidades Autónomas la adquisición de 500.000 dispositivos electrónicos para los alumnos más vulnerables.</p>

        <p>Ciudadanos, por su parte, apostaba por una proposición no de Ley sobre la creación y financiación de la figura del «Rastreador Educativo». La figura de «Rastreador Educativo» estaría encargada de la vigilancia del alumnado y deberá tener las competencias necesarias para prestar apoyo pedagógico al alumnado que se encuentre en cualquiera de las circunstancias que conlleve su no participación en las clases.</p>

        <p>El Grupo Parlamentario Confederal de Unidas Podemos-En Comú Podem-Galicia en Común presentó Proposición no de Ley sobre el fomento de la digitalización en la enseñanza con el objetivo de instar al Gobierno a diagnosticar las necesidades existentes en el ámbito educativo digital y acompañar, de forma coordinada con las CCAA, los recursos necesarios para dar respuestas a las mismas. Impulsar un plan de formación permanente y continua al profesorado para garantizar su competencia digital o desarrollar protocolos de trabajo para unificar y simplificar las herramientas de docencia digital con el fin de reducir la carga burocrática que soporta el profesorado, entre otras medidas.</p>

        <p>Finalmente, Vox realizó una proposición no de Ley relativa a las dificultades de aprendizaje de los alumnos españoles debido a la brecha digital. Instando al Gobierno a poner todos los medios a su alcance, en coordinación con las administraciones educativas, para eliminar la brecha digital. Así como ofrecer, en aquellas zonas donde por su localización no sea posible el acceso a las redes convencionales, una alternativa que permita la conexión inalámbrica y entregar dispositivos digitales a los alumnos que los centros han señalado como afectados por la brecha digital.</p>

        <p>Una vez superado el contexto educativo podemos ver como los grupos parlamentarios ya no representan una postura conjunta y cada uno de ellos presenta Proposiciones no de Ley dirigidas a diferentes áreas que afectan a la infancia y que repercuten en la pobreza infantil.</p>

        <p>Por un lado, el PSOE a presentó una PNL con el fin de continuar trabajando en políticas públicas destinadas a paliar los efectos de la COVID-19 en las familias monomarentales y cuyo objetivo era instar al Gobierno de España a diseñar y desarrollar políticas públicas específicas destinadas a paliar los efectos de la crisis provocada por la COVID-19 en las familias monoparentales y monomarentales.</p>

        <p>El Grupo Parlamentario de Ciudadanos presentó por su parte una Proposición no de Ley sobre medidas de protección a la infancia y la adolescencia durante la emergencia sanitaria del COVID-19 instando al Gobierno de la Nación a reforzar, de manera coordinada con las Comunidades Autónomas, Diputaciones Provinciales y Ayuntamientos, los recursos y los medios necesarios que garanticen la provisión, sea a través de ayudas económicas o directamente en especie, de alimentos, productos de higiene y otros productos de primera necesidad, de medicamentos y de suministros básicos, a todas las personas y familias en riesgo de exclusión social, prestando especial atención a la cobertura de las necesidades básicas de la población infantil y juvenil. Seguidamente que se promueva, a través de la Conferencia Sectorial de Educación, las medidas de apoyo, atención y acompañamiento de los menores estudiantes en entornos vulnerables que sean necesarias para garantizar en lo posible la continuidad de la atención educativa en tanto se mantenga la suspensión de apertura de los centros docentes por el COVID-19. Finalmente instan al Ejecutivo a que se impulse, a través del Consejo Territorial de Servicios Sociales y del Sistema para la Autonomía y la Atención a la Dependencia la adopción de medidas de prevención, detección, mediación e intervención en situaciones de conflicto o de violencia intrafamiliar durante la vigencia de las medidas de confinamiento domiciliario especialmente aquellas situaciones en las que se puedan ver envueltos o de las que puedan ser víctimas niños, niñas, adolescentes y jóvenes.</p>

        <p>Finalmente, el Grupo Parlamentario Socialista, presentó una Proposición no de Ley sobre defensa y promoción internacional de los derechos de la infancia ante los retos que agudizan la pandemia global en el mundo. En está instaba al Gobierno a apremiar a aquellos Estados que aún no lo hayan hecho, a ratificar y firmar la Convención sobre los Derechos de la Infancia y sus protocolos facultativos, a fin de alcanzar un Pacto Global por la Infancia que reconozca la universalidad de los derechos humanos de las niñas y niños, y auspicie el cumplimiento de los Objetivos de Desarrollo Sostenible en todos los ámbitos que conciernen de forma directa a la infancia. Así como defender y promover en foros multilaterales los derechos de la infancia en riesgo por los efectos de la propagación global de la COVID-19, haciendo especial énfasis en cuestiones relativas a la atención a la salud y a la educación de las niñas y niños, y apoyando e impulsando planes de acción global para implementar y financiar programas que aseguren sus derechos y vayan encaminados a la erradicación del trabajo infantil. Estas actuaciones y planes deberán incorporar la perspectiva de género en aras a vislumbrar el impacto diferenciado de la pandemia en la vida y el futuro de las niñas, y promover de este modo un avance efectivo en la protección de sus derechos, entre otras medidas propuestas.</p>

        <p>Una vez expuestas las Proposiciones no de Ley elaboradas por los grupos parlamentarios con el fin de paliar los diversos obstáculos a los que se ha enfrentando la infancia a raíz de la crisis sanitaria podemos establecer las siguientes consideraciones:</p>

        <p>En primer lugar, el grado de compromiso asumido por los grupos parlamentarios es muy bajo, ya que todos han decidido canalizar sus propuestas mediante Proposiciones no de Ley.</p>

        <p>En segundo lugar, en el Congreso de los Diputados están representados 19 partidos políticos, que realizan sus labores parlamentarias en diez grupos parlamentarios, de los cuales solo cinco grupos parlamentarios (equivalentes a los cinco grandes partidos) han presentado alguna propuesta dirigida a paliar la pobreza infantil en la multitud de sus formas.</p>

        <p>En tercer lugar, las proposiciones presentadas abarcan, en su multitud, el ámbito educativo dejando atrás temas tan vitales para los infantes como su salud mental y física tras el confinamiento o la vulnerabilidad a la que se enfrentan los niños y niñas tutelados.</p>

        <p>Por último, solo nos quedan las cifras. El Grupo Parlamentario Socialista ha presentado cuatro iniciativas, el Grupo Parlamentario Ciudadano ha presentado tres, el Grupo Parlamentario Popular ha presentado una, el Grupo Parlamentario Vox ha presentado una y el Grupo Parlamentario confederal de Unidas Podemos-En Comú Podem-Galicia en Común ha presentado una. En total 10 Proposiciones no de Ley.</p>
      </div>

      <h3 @click="toggle('empleo')">
        <span :class="{'is-expanded': isExpanded('empleo')}">Empleo juvenil</span>
      </h3>

      <div class="empleo" v-show="isExpanded('empleo')">
        <p>El desempleo juvenil ha sido siempre un elemento de conflicto siempre que se ha producido una crisis económica, por la vulnerabilidad  que sufren los jóvenes en nuestro mercado laboral. Éstos, sufren las consecuencias de una gestión del empleo abocada cada vez más a la precariedad laboral. En lo que concierne a la situación del desempleo juvenil en medio de esta pandemia, la COVID ha reflejado los problemas sistémicos que el mercado español tenía ya antes de entrar en esta crisis. El <strong>paro juvenil</strong> ha llegado a límites desastrosos, actualmente se sitúa en un <strong>40,5%</strong>. Cifras poco esperanzadoras si se tiene en cuenta que en el futuro no parece que esta situación vaya a mejorar.</p>

        <p>El empleo precario, las jornadas extensas y los sueldos bajos son característicos del empleo juvenil en España. Sectores como el de la restauración o el turismo en general, aglutinaban gran cantidad de la población joven en el mercado laboral por la abundancia de empleo que este sector ofrecía. Con la «desaparición» momentánea del turismo, este sector ha perdido peso en la población activa ocupada. Aumentando así las cifras del paro en general. También ha influido en el futuro de aquellos jóvenes quienes iban a integrarse en el mercado laboral pero han seguido estudiando o directamente no han conseguido un primer trabajo. Un sector de esta población joven que no cuenta como desempleada ya que no ha podido ni entrar en el mercado. </p>

        <p>La situación resulta alarmante y las previsiones no ofrecen un futuro esperanzador. Las crisis económicas suelen cebarse con la población joven debido a su dificultad en encontrar empleo. <strong>Los partidos políticos y el Gobierno no parecen tomar esta cuestión como algo prioritario</strong>. Después de un año de legislatura, son pocas las medidas tomadas para revertir esta situación. Si de por si el paro juvenil suele estar alto, el pronóstico apunta a que aún lo puede ser más aún si no se soluciona la crisis sanitaria en un corto plazo.</p>

        <p>La mayoría de actos parlamentarios referidos al desempleo juvenil en general han provenido del período anterior a la pandemia. Es decir, de enero a marzo de 2020. Sin embargo, pocos son los compromisos políticos surgidos a raíz de la pandemia que se hayan iniciado para revertir los problemas del sector.</p>

        <p>La mayoría de los compromisos que hacían mínimamente referencia al sector juvenil eran debido a actos parlamentarios en los que colateralmente se hacía mención a los jóvenes, o actos en los que indirectamente se beneficiaban a los mismos jóvenes. Pocas han sido las iniciativas que directamente se dirigieron a solucionar un problema directo de los jóvenes.</p>

        <p>Hay algunas iniciativas han sido elaboradas durante el Estado de Alarma decretado por el Gobierno o en posterioridad del inicio de la pandemia. Es por ese motivo que su relación con los programas electorales o con el Acuerdo de Gobierno es inexistente. En el caso del Gobierno se han encontrado cuatro medidas beneficiosas en cuanto al empleo juvenil (de forma directa o indirecta) repercuten en el interés de las personas jóvenes como medidas referidas al incremento del salario mínimo o el aumento del subsidio por desempleo. Es por esta razón, que tales medidas no se han incluido en el informe general de los compromisos de los partidos, sin embargo al beneficiar a la comunidad joven se han tenido en consideración.</p>

        <p>En el caso del Grupo Parlamentario confederal de Unidas Podemos-En Comú Podem-Galicia y Ciudadanos ocurre exactamente lo mismo, ya que son medidas posteriores al inicio de la pandemia y por tal razón éstas no se incluyen en el listado de los compromisos. Se tienen en cuenta asimismo, debido al beneficio de las medidas en cuanto al interés general de los jóvenes.</p>

        <p>El hecho de llevarse a cabo en un marco como el de la crisis sanitaria actual, ha condicionado la actividad parlamentaria de los partidos, quienes han modificado sus iniciativas legislativas acorde a la situación actual.</p>

        <p><strong>Conclusiones del avance de la temática en situación COVID</strong></p>

        <p>La crisis sanitaria derivada de la pandemia de la Covid 19 ha generado una situación drástica políticamente hablando. Esta situación de excepcionalidad ha condicionado por completo la actividad parlamentaria de los partidos políticos, así como la del gobierno y el Congreso de los diputados.</p>

        <p>A grandes rasgos una de las observaciones más claras que se han podido visualizar ha sido el declive de la actividad parlamentaria durante estos últimos meses. Las difíciles situaciones que han generado las consecuencias de esta crisis han producido que la atención política se centrara única y exclusivamente en paliar los estragos de la pandemia.</p>

        <p>Este contexto ha dificultado la realización de los compromisos electorales de los partidos políticos. Por un lado al darse esta situación de emergencia y por el otro, por los pocos meses que pasaron desde el inicio de la legislatura hasta la irrupción del coronavirus en España.</p>

        <p>Es por esta razón que la actividad parlamentaria acerca del desempleo juvenil se ha centrado en su gran mayoría en el mes de enero y febrero de 2020. Por lo que no han sido muchos los compromisos que se han cumplido, o tan siquiera se han presentado a debate.</p>

        <p>Otra situación es la del cumplimiento de los compromisos electorales. Si bien han sido pocos los que hasta este momento se han iniciado, ninguno ha sido cumplido. En todas las iniciativas legislativas se ha seguido un patrón bastante similar. La proposición no de ley, o PNL, ha sido la fórmula más habitual que han tomado los partidos para hacer eficaz sus iniciativas parlamentarias. Este recurso de los partidos, no obstante, tan solo es efectivo cuando se acaba traduciendo en una proposición de ley. Ya que las PNL no vinculan su iniciativa a un cumplimiento, tan solo pueden instar a los poderes o a los otros partidos políticos a iniciar un procedimiento sobre esa temática. Este recurso tiene una función más política que legislativa al fin y al cabo. Pero esta situación no parece ser una consecuencia derivada de la crisis de la Covid, sino una carencia de los partidos políticos a emprender acciones legislativas vinculantes.</p>

        <p>Si bien ha habido un tema en el cual se ha podido realizar algunos cambios, este ha sido en el de los falsos autónomos o los conocidos como “rider”. Un colectivo formado mayoritariamente por trabajadores de edad comprendida entre 18 y 30 años. En este asunto en concreto ha centrado especial atención entre los muchos temas existentes con relación al empleo juvenil.</p>

        <p>Es cierto que ha habido partidos más activos que otros. Este podría ser el caso del partido Ciudadanos, partido el cual ha alcanzado el mayor número de entre todos los partidos en cuanto a iniciativas legislativas en lo que va de legislatura con un total de 7.</p>

        <p>A modo de conclusión, la crisis de la pandemia ha condicionado de forma evidente a los jóvenes, quienes ya se encontraban en una situación laboral preocupante. Si bien el desempleo juvenil ya suponía un escenario problemático antes de la llegada de la crisis actual, la Covid 19 ha agraviado las carencias de nuestro sistema de empleo. Llegando de este modo a alcanzar alrededor de un 40% de paro juvenil, una de las cifras más altas de la historia en este sector. Parece que existe un cierto patrón preocupante entre el aumento del paro juvenil y la reducción de las iniciativas legislativas. Resultará necesario de cara al futuro, que los partidos cooperen en buscar soluciones en este ámbito, o al menos, ejecutar los compromisos de sus programas políticos en lo que queda de legislatura.</p>
      </div>

      <h3 @click="toggle('migraciones')">
        <span :class="{'is-expanded': isExpanded('migraciones')}">Migraciones</span>
      </h3>

      <div class="migraciones" v-show="isExpanded('migraciones')">
        <p>La crisis sanitaria ha influido considerablemente  en la actividad parlamentaria relativa a las migraciones y a los refugiados. De hecho, un gran número de actos parlamentarios sobre migración se ha realizado en base a la situación de COVID 19.</p>

        <p>Analizando a fondo la actividad parlamentaria sobre migración y refugio como consecuencia de la COVID-19, nos damos cuenta  que el Gobierno no ha tomado medidas concretas sobre la temática y que han sido más bien, los grupos parlamentarios los que han presentado actos al respecto.</p>

        <p>La Proposición no de Ley relacionada con la regularización urgente, permanente y sin condiciones de las personas migrantes que residen en el estado español a consecuencia de la crisis sanitaria, fue apoyada por grupos parlamentarios como Unidas Podemos, el grupo Republicano (ERC), el grupo parlamentario Plural y el grupo parlamentario Euskal Herria Bildu.</p>

        <p>Se trata de una medida que, en el momento en que estoy redactando este informe, sigue pendiente de aprobación. Por su parte, el grupo parlamentario Popular por su lado, presentó  una PNL, promoviendo el rechazo a esta regularización apoyada por los grupos parlamentarios mencionados arriba.</p>

        <p>Ciudadanos, instó al Gobierno a tomar medidas urgentes para asegurar protección y apoyo a los colectivos más vulnerables durante la emergencia sanitaria por COVID 19.</p>

        <p>El grupo Republicano presentó una PNL, en la que instaba al Gobierno a regularizar de forma rápida la situación de las personas migrantes en el ámbito sanitario, en lo concerniente al reconocimiento de sus títulos formativos.</p>

        <p>Una de las primeras consecuencias de la COVID-19 que afectó directamente a la vida de las personas migrantes fue el cierre de los Centros de Internamiento de Extranjeros. Una medida circunstancial, debido a que sólo se realizó por el cierre de las fronteras, y como consecuencia de ello, fue imposible ejecutar los expedientes de expulsión del país. A 6 de mayo de 2020 todos los CIES se encontraban vacíos e inoperativos. Sin embargo, a finales de verano, en septiembre de 2020, el Ministerio de Interior ordenó la reapertura de todos estos centros.</p>

        <p>Otro problema en cuestión de migración, derivado de la situación de crisis sanitaria, es la saturación de la administración a la hora de realizar los procedimientos necesarios para la renovación de las tarjetas de residencia, o cualquier cuestión que implique la permanencia legal en el país.</p>

        <p>El principal problema es la falta de citas para iniciar los procesos de renovación de la documentación en las oficinas de extranjería. Tal es el problema que el defensor del pueblo ha solicitado una revisión urgente de la aplicación de citas para trámites de extranjería.</p>

        <p>Las consecuencias de la imposibilidad de acceso a una cita tienen repercusiones directas y negativas en la vida diaria de las personas migrantes, puesto que no poseer la documentación regularizada implica no poder disfrutar de determinados derechos básicos. Desde el supuesto de no tener una cuenta bancaria activa, hasta el de no poder firmar un contrato de vivienda o de trabajo.</p>

        <p>Partidos como Unidas Podemos, Junts x Cat o  ERC, en sus programas electorales mencionaron expresamente sus pretensiones de acabar con los CIES por las vulneraciones de los derechos humanos que se producen dentro de ellos, y también sus intenciones de facilitar los procedimientos referentes a los trámites de extranjería. Sin embargo, hasta ahora, no se ha promovido ningún acto parlamentario por ninguno de esos partidos que tenga por objetivo final la eliminación de los centros de internamiento de extranjeros o el aumento de  flexibilidad en los procedimientos de acceso a la residencia en España. Esos partidos han apoyado medidas que impliquen la regularización urgente y exprés de todas personas en situación irregular en el país, pero no como consecuencia de las promesas de un programa electoral a cumplir, sino más bien como consecuencia de peticiones de organizaciones de la sociedad civil que ejercieron su presión para el cumplimiento de estas medidas por la crisis sanitaria.</p>

        <p>En conclusión, la actividad parlamentaria en materia de migración derivada de la emergencia sanitaria por la COVID-19, ha alcanzado su máxima ambición en Proposiciones no de Ley relativas sobre todo a regularizar la situación de las personas migrantes. Hay que destacar que muchas de estas medidas presentadas han sido a instancias de organizaciones civiles y que posteriormente han sido apoyadas por varios grupos parlamentarios.</p>
      </div>

    </div>

  </div>
</template>

<script>
import PageMixin from '@/views/PageMixin';

export default {
  name: 'CovidReport',
  mixins: [
    PageMixin,
  ],
  data() {
    return {
      expanded: [],
    };
  },
  methods: {
    toggle(key) {
      const idx = this.expanded.indexOf(key);
      if (idx === -1) {
        this.expanded.push(key);
      } else {
        this.expanded.splice(idx, 1);
      }
    },
    isExpanded(key) {
      return this.expanded.indexOf(key) > -1;
    },
  },
};
</script>

<style lang="scss">
.page--report {
  h3 {
    display: block;
    background: transparent;
    padding: 0;
    cursor: pointer;
    span {
      padding: 2px 6px;
      padding-right: 20px;
      background: white;
      position: relative;
      display: inline-block;
      &:after {
        content: "";
        position: absolute;
        top: 9px;
        right: 7px;
        width: 6px;
        height: 6px;
        border: 2px solid black;
        border-top: 0;
        border-left: 0;
        transform-origin: 5px 5px;
        transform: rotate(45deg);
        transition: transform 250ms ease-in-out;
      }
      &.is-expanded {
        &:after {
          transform: rotate(-135deg);
        }
      }
    }
  }
}
</style>
