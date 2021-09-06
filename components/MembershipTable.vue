<template>
  <div>
    <h3
      class="
        text-center
        blue-grey--text
        text--lighten-1 text-uppercase
        font-weight-regular
      "
    >
      #{{ $t('general.membership') }}
    </h3>
    <h1 class="text-center blue-grey--text text--darken-3">
      {{ $t('joinTheClub') }}
    </h1>
    <h5 class="text-center blue-grey--text text--lighten-1">
      {{ $t('membershipTable.insurance') }}
    </h5>
    <div class="my-6 mid-cont mx-auto">
      <v-row no-gutters class="py-0 px-3">
        <v-col cols="6"> </v-col>
        <v-col
          class="py-1 text-center"
          cols="2"
          v-for="(price, index) in [
            {
              name: 'general.annual',
              price: 700,
            },
            {
              name: 'general.months3',
              price: 200,
            },
            {
              name: 'general.monthly',
              price: 80,
            },
          ]"
          :key="index"
        >
          <h3 class="blue--text font-weight-regular condensed prices">
            €{{ price.price }}
          </h3>
          <h6
            class="blue--text font-weight-sm-regular condensed text-uppercase"
          >
            {{ $t(price.name) }}
          </h6>
        </v-col>
      </v-row>
      <v-row
        :class="{ 'blue-grey lighten-5': i % 2 !== 0 }"
        align="center"
        no-gutters
        class="py-0 px-3"
        v-for="(service, i) in services"
        :key="service.service"
      >
        <v-col cols="6">
          <h4 class="blue-grey--text text--darken-3 font-weight-regular">
            {{ $t(service.service) }}
          </h4>
        </v-col>

        <v-col
          class="py-3 text-center"
          cols="2"
          v-for="(check, index) in service.check"
          :key="index"
        >
          <v-icon color="blue">mdi-check</v-icon>
        </v-col>
      </v-row>

      <v-row align="center" no-gutters class="py-0 px-3">
        <v-col cols="6">{{ $t('membershipTable.addMember') }}</v-col>
        <v-col
          class="py-3 text-center"
          cols="2"
          v-for="(price, index) in ['+€200', '+€65', '+€15']"
          :key="index"
        >
          <h3 class="blue--text font-weight-regular prices condensed">
            {{ price }}
          </h3>
        </v-col>
      </v-row>
      <div class="text-center mt-6">
        <v-btn depressed color="primary" @click="$emit('show-form')">{{
          $t('joinTheClub')
        }}</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
const services = [
  {
    service: 'membershipTable.step01',
    check: ['annual', 'quarterly', 'monthly'],
  },
  {
    service: 'membershipTable.step02',
    check: ['annual', 'quarterly', 'monthly'],
  },
  {
    service: 'membershipTable.step03',
    check: ['annual', 'quarterly', 'monthly'],
  },
  {
    service: 'membershipTable.step04',
    check: ['annual', 'quarterly', 'monthly'],
  },
  {
    service: 'membershipTable.step05',
    check: ['annual', 'quarterly'],
  },
  {
    service: 'membershipTable.step06',
    check: ['annual', 'quarterly'],
  },
  {
    service: 'membershipTable.step07',
    check: ['annual', 'quarterly', 'monthly'],
  },
]

export default {
  data() {
    return {
      services,
    }
  },
}
</script>
<style lang="scss">
.shadow {
  background: #ffffff;
  box-shadow: 0px -8px 4px #ffffff, 0px 8px 4px #ffffff,
    -4px 0px 8px rgba(188, 207, 225, 0.6), 4px 0px 8px rgba(188, 207, 225, 0.6);
}

.condensed {
  line-height: 110%;
  font-family: 'Roboto Condensed', sans-serif;
}

.prices {
  font-size: 1.25rem;
  @media screen and (min-width: 600px) {
    font-size: 1.75rem;
  }
}
h6 {
  font-size: 9.8px;
  @media screen and (min-width: 600px) {
    font-size: 1rem !important;
  }
}
</style>
