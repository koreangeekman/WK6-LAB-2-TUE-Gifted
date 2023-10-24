<template>
  <div class="card shadow" @click="gift.opened ? '' : openGift(gift.id)" :type="gift.opened ? '' : 'button'">
    <img :src="gift.url" class="img-fluid rounded-top" :alt="gift.tag">
    <span v-if="gift.opened" class="d-flex justify-content-between p-3">
      <h5>{{ gift.tag }}</h5>
      <i v-if="gift.creatorId == accountId" type="button" class="fs-3 p-2 text-danger mdi mdi-trash-can"
        @click="removeGift(gift.id)"></i>
    </span>
  </div>
</template>


<script>
import { Gift } from "../models/Gift";
import { giftService } from "../services/GiftService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";

export default {
  props: {
    gift: { type: Gift, required: true }
  },

  setup() {
    return {
      accountId: AppState.account.id,

      async openGift(giftId) {
        try {
          const openedGift = await giftService.openGift(giftId)
          logger.log('Opened gift: ', openedGift)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      },

      async removeGift(giftId) {
        try {
          const toBeDeletedIndex = AppState.gifts.findIndex(gift => gift.id == giftId)
          const toBeDeleted = AppState.gifts[toBeDeletedIndex]
          if (toBeDeleted.creatorId != this.accountId) {
            logger.error('not your gift to delete')
          }
          const removedGift = await giftService.removeGift(giftId)
          AppState.gifts.splice(toBeDeletedIndex, 1)
          logger.log('Removed gift: ', removedGift)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }

    }
  }
};
</script>


<style lang="scss" scoped></style>