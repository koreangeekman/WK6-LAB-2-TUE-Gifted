<template>
  <div class="col-12 col-md-6 d-flex justify-content-center giftForm">
    <form @submit.prevent="createGift()" class="d-flex ">
      <span class="text-white mt-3">
        <label for="tag">Tagline</label>
        <input v-model="newGiftObj.tag" class="form-control mb-3" type="text" id="tag" placeholder="Add a tagline..">
        <label for="tag">Image Url</label>
        <input v-model="newGiftObj.url" class="form-control" type="url" id="url" placeholder="Provide an image url..">
      </span>
      <button type="submit" class="btn btn-success px-4 py-5 ms-4 mt-4">Add Gift <i
          class="text-success mdi mdi-gift-outline"></i></button>
    </form>
  </div>
</template>


<script>
import { ref } from "vue";
import { giftService } from "../services/GiftService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";


export default {
  setup() {
    const newGiftObj = ref({
      tag: '',
      url: '',
      creatorId: AppState.account.id
    })

    return {
      newGiftObj,

      async createGift() {
        try {
          const newGift = await giftService.createGift(newGiftObj.value)
          logger.log('New Gift: ', newGift)
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