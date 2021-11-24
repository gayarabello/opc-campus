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
        :style="`max-width: ${100 / activities.length}%; width: ${
          100 / activities.length
        }%`"
        style="cursor: pointer"
        v-for="activity in activities"
        :key="activity.title"
        @click="handleClick(activity)"
      >
        <v-img width="100%" height="170px" :src="prices[activity].hero"></v-img>
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
    handleClick(act) {
      let param =
        act === this.$t('products.massage.title')
          ? $t(`general.${activity}`)
          : 'healing center'

      this.$emit('navigate-section-event', param)
    },
  },
  computed: {
    activities() {
      return this.$vuetify.breakpoint.smAndUp
        ? Object.keys(prices)
        : Object.keys(prices).filter(
            (e) => prices[e].title !== 'products.massage.title'
          )
    },
  },
}
</script>
