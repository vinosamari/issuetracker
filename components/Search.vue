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
      <button
        type="submit"
        :disabled="username == ''"
        v-show="!this.$store.state.loading"
      >
        Search User
      </button>
      <button v-show="this.$store.state.loading" class="loadingBtn">
        <div class="dots"></div>
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
.loadingBtn {
  @apply bg-white px-12 py-4 my-3 shadow-md;
}
button:disabled {
  @apply text-gray-400 shadow-inner cursor-not-allowed  font-thin bg-gray-100  px-4 py-2;
}

.dots {
  position: relative;
  animation: dots-08q38pmd 1s infinite steps(2);
  @apply h-2 w-2;
}

.dots::before,
.dots::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #070708;
}

.dots::before {
  box-shadow: 26.9px 0 #070708;
  transform: translateX(-26.9px);
  animation: dots-9frz8wmd 0.5s infinite linear alternate;
}

.dots::after {
  transform: translateX(13.4px) rotate(0deg) translateX(13.4px);
  animation: dots-2fnw0smd 0.5s infinite linear alternate;
}

@keyframes dots-08q38pmd {
  0%,
  49.9% {
    transform: scale(1);
  }

  50%,
  100% {
    transform: scale(-1);
  }
}

@keyframes dots-9frz8wmd {
  100% {
    box-shadow: 53.8px 0 #070708;
  }
}

@keyframes dots-2fnw0smd {
  100% {
    transform: translateX(13.4px) rotate(-180deg) translateX(13.4px);
  }
}
</style>
>
