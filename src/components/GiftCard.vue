<template>
  <div class="container-fluid giftList">
    <section class="row">

      <div v-for="gift in gifts" :key="gift.id" class="col-12 col-md-4 p-3">
        <div class="card giftEntry">
          <img :src="gift.imgUrl" class="img-fluid" :alt="gift.tag">
          <span class="d-flex justify-content-between">
            <h4>{{ gift.tag }}</h4>
            <i class="text-primary mdi mdi-gift-open-outline" @click="removeGift(gift.id)"></i>
          </span>
        </div>
      </div>

    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';
import { giftService } from "../services/GiftService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  setup() {
    async function _getGifts() {
      try {
        const gifts = await giftService.getGifts()
        logger.log(gifts)
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }

    onMounted(() =>
      _getGifts()
    )

    return {
      gifts: computed(() => AppState.gifts),

      async openGift(giftId) {
        try {
          const openedGift = await giftService.openGift(giftId)
          logger.log(openedGift)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      },
      async removeGift(giftId) {
        try {
          const removedGift = await giftService.removeGift(giftId)
          logger.log(removedGift)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }

    }
  }
};
</script>


<style lang="scss" scoped>
.giftList {
  background-color: #123456;
}
</style>