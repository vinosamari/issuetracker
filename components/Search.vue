<template>
  <section>
    <form @submit.prevent="searchUser">
      <input
        type="search"
        name="username"
        id="username"
        placeholder="Enter a github username..."
        v-model="username"
        autofocus
      />
      <button type="submit" :disabled="username == ''">
        <span v-show="!this.$store.state.loading">Search User</span>

        <div class="spinner" v-show="this.$store.state.loading"></div>
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      repo: "",
    };
  },
  methods: {
    searchUser() {
      this.$store.dispatch("toggleLoading", true);
      this.$store.dispatch("setUsername", this.username);
      this.$store.dispatch("fetchUserDetails", this.username);
      this.username = "";
    },
  },
};
</script>

<style scoped>
section {
  @apply w-5/6 mx-auto my-5 flex items-center justify-center;
}
form {
  @apply md:flex md:flex-col md:items-center;
}
h1 {
  @apply font-light text-gray-400 text-xl tracking-wider mx-4;
}
input {
  @apply shadow-md rounded px-4 py-2 focus:ring-black border-0 focus:ring-2 text-sm placeholder:font-thin placeholder:text-xs placeholder:tracking-wider;
}
button {
  @apply shadow-lg rounded-sm text-sm font-bold uppercase tracking-wider px-4 py-2 my-3 hover:bg-white bg-black transition-all duration-300 ease-out hover:text-black text-white hover:shadow-xl;
}
button:disabled {
  @apply text-gray-400 shadow-inner cursor-not-allowed  font-thin bg-gray-100;
}
.spinner {
  border-radius: 50%;
  background: radial-gradient(
        farthest-side,
        rgba(230, 230, 237, 0.98) 94%,
        #0000
      )
      top/9px 9px no-repeat,
    conic-gradient(#0000 30%, rgba(231, 231, 239, 0.98));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation: spinner-c7wet2 1s infinite linear;
  @apply bg-white h-10 w-10 rounded-full bg-black;
}

@keyframes spinner-c7wet2 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
>
