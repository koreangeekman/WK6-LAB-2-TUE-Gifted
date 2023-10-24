<template>
  <div class="home">
    <h4>boop</h4>
    <GiftForm />
    <hr>
    <GiftCard />
  </div>
</template>

<script>
import GiftCard from "../components/GiftCard.vue";
import GiftForm from "../components/GiftForm.vue";

export default {
  setup() {
    return {};
  },
  components: { GiftForm, GiftCard }
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
