<template>
  <v-app>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.xsOnly"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed flat app>
      <v-container class="py-0">
        <v-row align="center" no-gutters justify="space-between">
          <v-app-bar-nav-icon
            v-if="$vuetify.breakpoint.xsOnly"
            @click.stop="drawer = !drawer"
          />
          <img
            height="40"
            width="auto"
            :src="require('@/assets/images/logo.svg')"
            alt=""
          />
          <v-select
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
            v-model="language"
            @change="$router.push(switchLocalePath(language))"
          ></v-select>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
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
}
</script>
<style lang="scss">
@import url('~/assets/components.scss');
</style>
