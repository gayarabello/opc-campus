<template>
  <div class="mid-cont mx-auto py-12 my-12 px-6">
    <h3
      class="
        blue-grey--text
        text--lighten-1 text-uppercase
        font-weight-regular
        py-0
      "
    >
      #{{ $t('general.activities') }}
    </h3>
    <h1 class="blue-grey--text text--darken-3 py-0">get in action</h1>

    <v-row no-gutters class="py-6" justify="space-between">
      <v-col
        style="cursor: pointer"
        v-for="activity in activities"
        :key="activity.title"
        @click="navigateSection(activity)"
      >
        <v-img height="170" width="170" :src="prices[activity].hero"></v-img>
        <h3 class="text-capitalize font-weight-regular py-2">
          {{ activity }} <span class="ml-1">→</span>
        </h3>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { prices } from '../data/prices'
export default {
  data() {
    return {
      prices,
    }
  },
  methods: {
    navigateSection(section) {
      this.$nextTick(() =>
        window.document
          .getElementById(section)
          .scrollIntoView({ block: 'start', behavior: 'smooth' })
      )
    },
  },
  computed: {
    activities() {
      return Object.keys(prices).filter(
        (e) => prices[e].title !== 'products.massage.title'
      )
    },
  },
}
</script>
