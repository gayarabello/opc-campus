<template>
  <div :id="activity.title" class="mt-12 py-6">
    <v-row no-gutters align="center">
      <v-col
        :style="
          $vuetify.breakpoint.smAndUp
            ? 'min-height: 320px'
            : 'min-height: 220px'
        "
        class="blue-grey lighten-5 text-left align-center d-flex"
        cols="12"
        sm="6"
      >
        <v-row no-gutters>
          <v-col
            v-if="$vuetify.breakpoint.smAndUp"
            cols="6"
            sm="2"
            md="6"
          ></v-col>
          <v-col cols="12" sm="10" md="6" class="px-6 px-sm-0">
            <h4 class="blue-grey--text">#{{ activity.hash }}</h4>
            <h2 class="blue-grey--text text--darken-4 py-2">
              {{ activity.title }}
            </h2>
            <h3 class="blue-grey--text font-weight-regular">
              {{ activity.subtitle }}
            </h3>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.smAndUp" cols="6">
        <v-img height="320" :src="activity.hero"></v-img>
      </v-col>
    </v-row>
    <div
      class="mx-auto my-12 px-6 px-sm-0"
      style="max-width: 32rem"
      v-for="(type, key) in activity.prices"
      :key="key"
    >
      <h3
        style="font-family: 'Roboto Condensed', sans-serif; font-size: 2.5rem"
        class="
          blue-grey--text
          text--darken-4 text-uppercase
          font-weight-light
          text-center
        "
        v-if="Object.keys(activity.prices).length > 1"
      >
        {{ key }}
      </h3>

      <div v-for="(item, index) in activity.prices[key]" :key="index">
        <v-row class="py-2" no-gutters>
          <v-col cols="6" class="text-capitalize"> {{ item.name }}</v-col>
          <v-col cols="6" class="text-right">
            <PriceUnity :price="item.price" />
          </v-col>
        </v-row>
        <v-divider v-if="index !== activity.prices[key].length - 1"></v-divider>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  created() {},
  mounted() {},
  props: {
    activity: {
      type: Object,
    },
    forKey: {
      type: String,
    },
  },
})
</script>
