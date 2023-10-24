<template>
  <div class="home">
    <h4>boop</h4>
    <!-- <GiftForm /> -->
    <hr>

    <div class="container-fluid giftList">
      <section class="row">

        <div v-for="gift in gifts" :key="gift.id" class="col-12 col-md-4 p-3">
          <GiftCard :gift="gift" /> ..
        </div>

      </section>
    </div>

  </div>
</template>

<script>
import Pop from "../utils/Pop";
import { AppState } from '../AppState';
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger";
import { giftService } from "../services/GiftService";
import GiftCard from "../components/GiftCard.vue";
// import GiftForm from "../components/GiftForm.vue";

export default {
  setup() {
    async function _getGifts() {
      try {
        await giftService.getGifts()
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
          logger.log('Created gift: ', openedGift)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      },
      async removeGift(giftId) {
        try {
          const removedGift = await giftService.removeGift(giftId)
          logger.log('Removed gift: ', removedGift)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }
    };
  },
  components: { GiftCard }
}
</script>

<style scoped lang="scss">
// .home-card {
//   width: 50vw;

//   >img {
//     height: 200px;
//     max-width: 200px;
//     width: 100%;
//     object-fit: contain;
//     object-position: center;
//   }
// }
</style>
