<template>
  <button class="btn btn-primary" @click="getPage(currentPage - 1)" :disabled="currentPage == 1">
    <i class="mdi mdi-page-previous-outline"></i> Previous Page</button>
  <p class="fs-5 text-white">Page: {{ currentPage }}</p>
  <button class="btn btn-primary" @click="getPage(currentPage + 1)">
    Next Page <i class="mdi mdi-page-next-outline"></i></button>
</template>


<script>
import { AppState } from '../AppState';
import { computed } from 'vue';
import { giftService } from "../services/GiftService";

export default {
  setup() {
    return {
      currentPage: computed(() => AppState.currentPage),

      async getPage(pageNum) {
        await giftService.getGiftsByPage(pageNum)
      }

    }
  }
};
</script>


<style lang="scss" scoped></style>