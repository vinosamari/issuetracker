<template>
  <main>
    <h1>Github Issues Tracker</h1>
    <Search />
    <div class="recentsDiv" v-show="this.$store.state.recents.length > 1">
      <h2>Recent Searches</h2>
      <ul>
        <li v-for="(item, index) in this.$store.state.recents" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
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
  mounted() {
    this.$store.dispatch("getLocalStoreRecents");
  },
  components: { Search },
  data() {
    return {
      stateRecents: this.$store.state.recents,
    };
  },
  watch: {
    stateRecents() {
      console.log("There was a change!");
    },
  },
};
</script>

<style scoped>
main {
  @apply min-h-screen flex flex-col items-center justify-center;
}
h1 {
  @apply text-center text-3xl font-bold tracking-widest;
}
.recentsDiv {
  @apply text-center font-mono font-medium text-xs tracking-tight;
}
ul {
  @apply flex items-center text-xs tracking-tighter font-medium font-mono justify-evenly;
}
li {
  @apply mx-3 bg-gray-700 text-gray-200 rounded-3xl p-1;
}
</style>
