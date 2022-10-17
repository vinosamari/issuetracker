<template>
  <section>
    <h1 class="repoName">{{ repo.name }}</h1>
    <div class="desc">
      <h2>Description</h2>
      <p>
        {{ repo.description }}
      </p>
    </div>
    <div class="tags">
      <div class="stars">
        <span>⭐</span> <span>{{ repo.stargazers_count }} Stars</span>
      </div>
      <div class="issues">
        <span>❗</span>
        <span>{{ repo.open_issues != 0 ? repo.open_issues : 0 }} issues</span>
      </div>
    </div>
    <nuxt-link @click="repoDetails(repo)" :to="`/repos/?name=${repo.name}`"
      >Details</nuxt-link
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
      repoDeets: null,
    };
  },
  methods: {
    // repoDetails(repo) {
    //   this.repoDeets = repo;
    //   for (let property in this.repoDeets) {
    //   }
    // },
  },
  props: ["repo"],
};
</script>

<style scoped>
section {
  @apply shadow-md rounded-sm p-3 font-mono flex flex-col my-2 hover:scale-105 transition-all duration-300 ease-in-out transform hover:shadow-xl w-3/4 mx-auto;
}
h1 {
  @apply font-bold tracking-tight text-xl mb-3;
}
.desc {
  @apply text-sm;
}
.desc h2 {
  @apply mt-3 font-medium;
}
.desc p {
  @apply text-xs px-2 shadow-inner my-1 py-4;
}
.tags {
  @apply text-xs flex items-center justify-start py-1 my-3;
}
.tags div {
  @apply bg-gray-100 rounded-xl px-3 py-1 mr-2 shadow  flex font-bold;
}
a {
  @apply shadow-lg rounded-sm text-xs font-medium capitalize tracking-wider px-4 py-2 my-3 hover:bg-white hover:shadow-xl transition-all duration-300 ease-out hover:text-black justify-self-end hover:scale-105 transform bg-black text-white  mx-auto;
}
</style>
