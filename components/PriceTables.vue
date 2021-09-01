<template>
  <div :id="$t(activity.title)" class="mt-12 py-6">
    <v-row no-gutters align="center" >
      <v-col
        :style="
          $vuetify.breakpoint.smAndUp
            ? 'min-height: 320px'
            : 'min-height: 220px'
        "
        class="blue-grey lighten-5 text-left align-center d-flex"
        cols="7"
        md="6"
      >
        <v-row no-gutters >
          <v-col
            v-if="$vuetify.breakpoint.smAndUp"
            cols="1"            
            md="6"
          ></v-col>
          <v-col cols="11" md="6" class="px-6 px-sm-0">
            <h4 class="blue-grey--text">#{{ $t(activity.hash) }}</h4>
            <h2 class="blue-grey--text text--darken-4 py-2">
              {{ $t(activity.title) }}
            </h2>
            <h3 class="blue-grey--text font-weight-regular">
              {{ $t(activity.subtitle) }}
            </h3>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="purple" v-if="$vuetify.breakpoint.smAndUp" cols="5" md="6">
        <v-img height="320" :src="activity.hero"></v-img>
      </v-col>
    </v-row>
    <div
      v-for="(type, key) in activity.prices"
      :key="key"
      class="mx-auto my-12 px-6 px-sm-0"
      style="max-width: 32rem"
    >
      <h3
        v-if="Object.keys(activity.prices).length > 1"
        style="font-family: 'Roboto Condensed', sans-serif; font-size: 2.5rem"
        class="
          blue-grey--text
          text--darken-4 text-uppercase
          font-weight-light
          text-center
        "
      >
        {{ $t(`general.${key}`) }}
      </h3>

      <div v-for="(item, index) in activity.prices[key]" :key="index">
        <v-row class="py-3" no-gutters>
          <v-col cols="7" sm="9">
            <h4 class="text-capitalize">
              {{ $t(item.name) }}
            </h4>

            <h5 class="font-weight-regular" v-if="item.description">
              {{ $t(item.description) }}
            </h5>
          </v-col>
          <v-col cols="5" sm="3" class="text-right">
            <PriceUnity
              :price="item.price"
              :member="$tc('member', 2)"
              :nonmember="$tc('nonMember', 2)"
            />
          </v-col>
        </v-row>
        <v-divider v-if="index !== activity.prices[key].length - 1"></v-divider>
      </div>
      <div class="text-center">
        <v-btn
          outlined
          color="primary"
          @click="$emit('show-form', { activity, key })"
          >{{ 'schedule' }}</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {},
  data() {
    return {
      formDialog: false,
    }
  },

  props: {
    activity: {
      type: Object,
    },
    forKey: {
      type: String,
    },
  },
  methods: {
    confirmClose() {
      console.log('close')
    },
    showForm(unity: string) {
      this.formDialog = true
      console.log(unity)
    },
  },
})
</script>
