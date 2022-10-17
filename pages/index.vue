<template>
  <main>
    <h1>Github Issues Tracker</h1>
    <Search />
    <div class="resultsDiv" v-show="this.$store.state.userRepos.length > 1">
      <h2 class="text-center tracking-tight font-medium capitalize">
        Showing all public repos with open issues for
        {{ this.$store.state.currentUsername }}
      </h2>
      <Repo
        v-for="repo in this.$store.state.userRepos"
        :key="repo.id"
        :repo="repo"
      />
    </div>
  </main>
</template>

<script>
import Search from "~/components/Search.vue";
export default {
  name: "IndexPage",
  mounted() {},
  components: { Search },
};
</script>

<style scoped>
main {
  @apply min-h-screen flex flex-col items-center justify-center;
}
h1 {
  @apply text-center text-3xl font-bold tracking-widest;
}
</style>
