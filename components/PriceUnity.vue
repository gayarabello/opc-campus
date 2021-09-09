<template functional>
  <div>
    <h4>
      {{ typeof props.price.member === 'number' ? '€' : ''
      }}{{ props.price.member }}
      {{ props.member }}
    </h4>
    <h5 class="font-weight-regular">
      {{ typeof props.price.nonMember === 'number' ? '€' : ''
      }}{{ props.price.nonMember }}
      {{ props.nonmember }}
    </h5>
  </div>
</template>
