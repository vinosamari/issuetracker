<template>
  <main>
    <h1>Github Issues Tracker</h1>
    <Search />
    <!-- RECENT ITEMS -->
    <div class="recentsDiv" v-show="this.$store.state.recents.length > 1">
      <h2>Recent Searches</h2>
      <ul>
        <div v-for="(item, index) in this.$store.state.recents" :key="index">
          <li v-if="index < 5" @click="searchRecent(item)">
            {{ item }}
          </li>
        </div>
      </ul>
    </div>
    <!-- REPOS -->
    <div class="resultsDiv" v-show="this.$store.state.userRepos.length > 1">
      <h2
        class="text-center tracking-tight font-medium capitalize text-xl shadow-inner w-1/2 mx-auto py-2"
      >
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
    console.log(document.body.scrollTop);
  },
  components: { Search },
  data() {
    return {
      stateRecents: this.$store.state.recents,
    };
  },
  methods: {
    searchRecent(item) {
      this.$store.dispatch("toggleLoading", true);
      this.$store.dispatch("setUsername", item);
      this.$store.dispatch("fetchUserDetails", item);

      this.username = "";
    },
    scrollFunction() {},
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
  @apply text-center font-mono font-medium text-xs tracking-tight mb-3;
}
.recentsDiv h2 {
  @apply mb-1;
}
ul {
  @apply flex items-center text-xs tracking-tighter font-medium font-mono justify-evenly;
}
li {
  @apply mx-3 bg-gray-800 text-gray-100 rounded-3xl p-1 hover:bg-gray-700 cursor-pointer transition-all duration-200 ease-in-out;
}
</style>
