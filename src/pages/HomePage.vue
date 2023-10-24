<template>
  <div class="container-fluid">
    <section class="row justify-content-center giftList">
      <div class="col-6">
        <GiftForm />
        <hr>
      </div>
    </section>
    <section class="row p-3 giftList">

      <div v-for="gift in gifts" :key="gift.id" class="col-12 col-md-4 p-3">
        <GiftCard :gift="gift" /> ..
      </div>

    </section>
  </div>
</template>

<script>
import Pop from "../utils/Pop";
import { AppState } from '../AppState';
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger";
import { giftService } from "../services/GiftService";
import GiftCard from "../components/GiftCard.vue";
import GiftForm from "../components/GiftForm.vue";

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

    onMounted(() => {
      _getGifts();
    });

    return {
      gifts: computed(() => AppState.gifts),
    };
  },
  components: { GiftCard, GiftForm }
}
</script>

<style scoped lang="scss">
.giftList {
  background-color: #123456;
}

// img {
//   height: 200px;
//   max-width: 200px;
//   width: 100%;
//   object-fit: contain;
//   object-position: center;
// }
</style>
