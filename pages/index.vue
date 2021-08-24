<template>
  <div>
    <v-container class="px-0 py-0" fluid>
      <v-parallax
        src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3034&q=80"
      >
        <h1 class="text-center">
          Live the <span class="font-weight-bold">good</span> life
        </h1>
      </v-parallax>
    </v-container>
    <v-container class="mid-cont my-12">
      <v-row align="center">
        <v-col cols="12" sm="6">
          <h4>Oporto Collection Campus</h4>
          <h2>{{ $t('section1.title') }}</h2>
          <p>
            {{ $t('section1.subtitle') }}
          </p>
          <v-btn outlined>{{ $t('joinTheClub') }}</v-btn>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img
            height="400"
            src="https://images.unsplash.com/photo-1534366381226-672074533fd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2697&q=80"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <ActivitiesMenu />
    <MembershipTable />
    <PriceTables
      :activity="activity"
      :forKey="key"
      v-for="(activity, key) in services"
      :key="key"
    />
  </div>
</template>
<script lang="ts">
import { prices } from '../data/prices'
const PriceTables = () => import('../components/PriceTables.vue')
import Vue from 'vue'
export default Vue.extend({
  components: { PriceTables },
  data() {
    return {
      services: prices,
    }
  },
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
h1 {
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 4rem;
  line-height: 100%;
  padding: 1rem 0;
}
h2 {
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 4rem;
  line-height: 90%;
  padding: 1rem 0;
}
.hero {
  background-image: url('https://images.unsplash.com/photo-1598041072698-794501a5fedf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80');
  background-size: fit;
  height: 32rem;
}
</style>
