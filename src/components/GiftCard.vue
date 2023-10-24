<template>
  <div class="card giftEntry">
    <img :src="gift.url" class="img-fluid" :alt="gift.tag">
    <span class="d-flex justify-content-between">
      <h4>{{ gift.tag }}</h4>
      <i class="text-primary mdi mdi-gift-open-outline" @click="removeGift(gift.id)"></i>
    </span>
  </div>
</template>


<script>
import { Gift } from "../models/Gift";

export default {
  setup() {
    props: {
      gift: { type: Gift }
    }
    return {

    }
  }
};
</script>


<style lang="scss" scoped>
.giftList {
  background-color: #123456;
}
</style>