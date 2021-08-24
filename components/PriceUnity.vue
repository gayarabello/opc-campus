<template functional>
  <div>
    <h4>€{{ props.price.member }} {{ props.member }}</h4>
    <h5 class="font-weight-regular">
      €{{ props.price.nonMember }} {{ props.nonmember }}
    </h5>
  </div>
</template>
