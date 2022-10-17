<template>
  <main>
    <h2 class="text-center tracking-tighter displayHeader">
      Displaying open issues for {{ $route.query.name }}
    </h2>
    <section v-for="issue in this.$store.state.repoIssues" :key="issue.id">
      <h2>
        {{ issue.title }}
      </h2>
      <h3>
        Opened by <strong>{{ issue.user.login }}</strong>
      </h3>
      <p class="line-clamp-3">{{ issue.body }}</p>
      <a :href="`${issue.html_url}`" target="_blank">Open in Github</a>
    </section>
  </main>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch("fetchRepoIssues", this.$route.query.name);
  },
};
</script>

<style scoped>
main {
  @apply pt-10;
}

section {
  @apply w-3/4 p-5 text-center mx-auto shadow my-3 mb-6;
}
h2 {
  @apply font-bold text-xl tracking-tight underline my-2 capitalize;
}
h3 {
  @apply my-1 text-xs;
}
.displayHeader {
  @apply text-2xl;
}
p {
  @apply my-4 shadow-inner text-sm py-1 font-mono font-light tracking-tight px-3;
}
a {
  @apply shadow-lg rounded-sm text-xs font-medium capitalize tracking-wider px-4 py-2 my-3 hover:bg-white hover:shadow-xl transition-all duration-300 ease-out hover:text-black justify-self-end hover:scale-105 transform bg-black text-white  mx-auto;
}
</style>
