<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed flat app>
      <v-container class="py-0 px-0">
        <v-row align="center" no-gutters justify="space-between">
          <img
            :height="$vuetify.breakpoint.smAndUp ? 40 : 36"
            width="auto"
            :src="
              $vuetify.breakpoint.smAndUp
                ? require('@/assets/images/logo.svg')
                : require('@/assets/images/logo_vertical.svg')
            "
            alt="logo"
            @click="$router.push('/')"
          />
          <div v-if="$vuetify.breakpoint.smAndUp">
            <v-btn
              text
              class="primary--text"
              @click="navigateSection('activities')"
              >{{ $t('general.activities') }}</v-btn
            >
            <v-btn
              text
              class="primary--text"
              @click="navigateSection('Healing center')"
              >Healing Center</v-btn
            >
            <a type="tel" class="primary--text"> +351 309 307 016</a>
          </div>
          <v-select
            v-model="language"
            dense
            hide-details
            class="my-0 py-0"
            background-color="transparent"
            color="primary"
            outlined
            style="max-width: 80px; color: grey !important"
            :items="$i18n.locales"
            item-text="name"
            item-value="code"
            @change="$router.push(switchLocalePath(language))"
          ></v-select>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <BannerOPC style="background-color: #083c6a" />
    <v-footer>
      <v-container class="py-0 px-0">
        <v-row>
          <v-col cols="12" sm="2">
            <div>&copy; {{ new Date().getFullYear() }}</div>
          </v-col>
          <v-col cols="12" sm="6" class="text-md-center">
            <div><v-icon> mdi-email</v-icon> campus@oportocollection.com</div>
          </v-col>
          <v-col cols="12" sm="4" class="text-md-right">
            <div><v-icon> mdi-phone</v-icon> +351 309 307 016</div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import BannerOPC from '~/components/BannerOPC.vue'
export default {
  components: { BannerOPC },
  data() {
    return {
      language: 'en',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      title: 'Oporto Collection Campus',
    }
  },
  methods: {
    navigateSection(section) {
      this.$nextTick(() =>
        window.document
          .getElementById(section)
          .scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      )
    },
  },
}
</script>
<style lang="scss">
@import url('~/assets/css/components.scss');
a {
  text-decoration: none;
  font-weight: 700;
}
</style>
