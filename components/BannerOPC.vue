<template>
  <v-row no-gutters class="py-0 my-0" align="center">
    <v-col
      cols="12"
      sm="6"
      :style="$vuetify.breakpoint.xsOnly ? 'height: 240px' : 'height: 340px'"
      class="py-0 pic"
    ></v-col>
    <v-col cols="12" sm="6" class="text-center py-0">
      <div class="py-12">
        <p class="white--text">{{ $t('opc.title') }}</p>
        <img
          width="300px"
          src="https://static.wixstatic.com/media/b1e563_60273afac2ab431b9e2a6fee9977cf2a~mv2.png/v1/fill/w_350,h_100,al_c,q_85,usm_0.66_1.00_0.01/b1e563_dc5b478a213c48a8a89cee7918c197d5_.webp"
          alt="oporto collection logotype"
        />
        <div>
          <v-btn
            class="my-3 mx-auto white--text"
            outlined
            href="https://www.oportocollection.com/"
            target="_blank"
            color="white"
            depressed
            >{{ $t('opc.btn') }}</v-btn
          >
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.pic {
  height: 100%;
  background-image: url('https://static.wixstatic.com/media/b1e563_02d20b1864ee4ce2a0665dd0a7556a5f~mv2.jpg/v1/fill/w_680,h_378,al_c,q_80,usm_0.66_1.00_0.01/b1e563_02d20b1864ee4ce2a0665dd0a7556a5f~mv2.webp');
  background-size: cover;
  background-position: center center;
}
</style>
