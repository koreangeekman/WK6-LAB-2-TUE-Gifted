<template>
  <div class="giftForm">
    <form v-on:submit="createGift()">
      <label for="tag">Tagline</label>
      <input v-bind="newGiftObj.tag" class="form-control" type="text" id="tag">
      <label for="tag">Image Url</label>
      <input v-bind="newGiftObj.imgUrl" class="form-control" type="url" id="imgUrl">
      <button type="submit">Add Gift <i class="text-success mdi mdi-gift-outline"></i></button>
    </form>
  </div>
</template>


<script>
import { ref } from "vue";
import { giftService } from "../services/GiftService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";


export default {
  setup() {
    const newGiftObj = ref({
      tag: 'Add a tagline..',
      imgUrl: 'Provide an image..'
    })

    return {
      newGiftObj,

      async createGift() {
        try {
          const newGift = await giftService.createGift(newGiftObj)
          logger.log(newGift)
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