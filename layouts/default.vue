<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
export default {
  async mounted() {
    let recents = await this.$localForage.getItem("recents");
    if (recents == null) {
      await this.$localForage.setItem("recents", []);
    }
    // this.$store.dispatch("getLocalStoreRecents");
  },
};
</script>

<style scoped></style>
