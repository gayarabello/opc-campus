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
      #membership
    </h3>
    <h1 class="text-center blue-grey--text text--darken-3">join the club</h1>
    <h5 class="text-center blue-grey--text text--lighten-1">
      *Insurance included
    </h5>
    <div class="my-6 mid-cont mx-auto">
      <v-row no-gutters class="py-0 px-3">
        <v-col cols="6"> </v-col>
        <!-- :class="{ shadow: index % 2 !== 0 }" -->
        <v-col
          class="py-1 text-center"
          cols="2"
          v-for="(price, index) in [
            {
              name: 'annual',
              price: 800,
            },
            {
              name: '3 months',
              price: 400,
            },
            {
              name: 'monthly',
              price: 200,
            },
          ]"
          :key="index"
        >
          <h3
            class="blue--text font-weight-regular"
            style="
              line-height: 110%;
              font-family: 'Roboto Condensed', sans-serif;
              font-size: 1.75rem;
            "
          >
            €{{ price.price }}
          </h3>
          <h5 class="blue--text text-uppercase">{{ price.name }}</h5>
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
            {{ service.service }}
          </h4>
        </v-col>
        <!-- :class="{ shadow: index % 2 !== 0 }" -->
        <v-col
          class="py-3 text-center"
          cols="2"
          v-for="(check, index) in service.check"
          :key="index"
        >
          <v-icon color="blue">mdi-check</v-icon>
        </v-col>
        <!-- <v-col cols="12">
          <v-divider></v-divider>
        </v-col> -->
      </v-row>

      <v-row align="center" no-gutters class="py-0 px-3">
        <v-col cols="6">Add one more member</v-col>
        <!-- :class="{ shadow: index % 2 !== 0 }" -->
        <v-col
          class="py-3 text-center"
          cols="2"
          v-for="(price, index) in ['+ €200', '+ €65', '+ €15']"
          :key="index"
        >
          <h3
            style="
              line-height: 110%;
              font-family: 'Roboto Condensed', sans-serif;
              font-size: 1.5rem;
            "
            class="blue--text font-weight-regular"
          >
            {{ price }}
          </h3>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
const services = [
  {
    service: 'Acesso total às instalações do Campus e do Hotel',
    check: ['annual', 'quarterly', 'monthly'],
  },
  {
    service: 'Prioridade em horários em aulas particulares de Padel',
    check: ['annual', 'quarterly', 'monthly'],
  },
  {
    service: 'Prioridade em horários em aulas de Fitness e Pilates',
    check: ['annual', 'quarterly', 'monthly'],
  },
  {
    service: 'Desconto de 20% em tratamentos Welness',
    check: ['annual', 'quarterly', 'monthly'],
  },
  {
    service: 'Desconto de 25% no aluguer do campo de Padel',
    check: ['annual', 'quarterly'],
  },
  {
    service: 'Descontos em packs Fitness, Pilates e Padel',
    check: ['annual', 'quarterly'],
  },
  {
    service: 'Desconto de 20% em aluguer de bicicletas',
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
/* .shadow {
  box-shadow: -8px 0px 8px -8px rgba(188, 207, 225, 1),
    8px 0px 8px -8px rgba(188, 207, 225, 1);
} */
</style>
