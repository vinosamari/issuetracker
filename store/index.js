export const state = () => ({
  loading: false,
  currentUsername: "",
  userRepos: [],
  recents: [],
  repoIssues: [],
});
export const getters = {
  // getStateRecent3(state) {
  //   return state.recents.reverse().splice(0, 3);
  // },
};

export const mutations = {
  TOGGLE_LOADING: (state, value) => {
    state.loading = value;
  },

  SAVE_REPO_DETAILS: (state, repos) => {
    state.userRepos = repos;
  },
  SAVE_REPO_ISSUES: (state, issues) => {
    state.repoIssues = issues;
  },
  SET_USERNAME: (state, username) => {
    state.currentUsername = username;
  },
  SET_STATE_RECENTS: (state, value) => {
    state.recents = value;
  },
};

export const actions = {
  async fetchUserDetails(ctx, username) {
    try {
      let url = `https://api.github.com/users/${username}/repos`;
      let response = await $nuxt.$axios.get(url);
      let results = response.data.filter((item) => {
        return item.open_issues > 1;
      });
      if (results.length < 1) {
        $nuxt.$toast.error(
          `No repos with open issues for ${$nuxt.$store.state.currentUsername}`,
          {
            timeout: 2000,
            position: "top-center",
          }
        );
        // ctx.dispatch("getLocalStoreRecents");
      }
      ctx.commit("SAVE_REPO_DETAILS", results);
      ctx.dispatch("getLocalStoreRecents");
      ctx.commit("TOGGLE_LOADING", false);
    } catch (error) {
      $nuxt.$toast.error(
        `No user found with username ${$nuxt.$store.state.currentUsername}!`,
        {
          timeout: 2000,
          position: "top-center",
        }
      );
      ctx.commit("TOGGLE_LOADING", false);
    }
  },

  async fetchRepoIssues(ctx, repo) {
    try {
      let url = `https://api.github.com/repos/${$nuxt.$store.state.currentUsername}/${repo}/issues`;
      let response = await $nuxt.$axios.get(url);
      ctx.commit("SAVE_REPO_ISSUES", response.data);
    } catch (error) {
      $nuxt.$toast.error(`[ERROR::] ${error}`, {
        timeout: 2500,
        position: "top-center",
      });
      this.$router.replace({ path: "/" });
    }
  },

  setUsername(ctx, username) {
    ctx.commit("SET_USERNAME", username);
  },

  toggleLoading(ctx, value) {
    ctx.commit("TOGGLE_LOADING", value);
  },

  async addNewRecent(ctx, value) {
    // GET RECENTS
    let recents = await this.$localForage.getItem("recents");
    recents.push(value);
    await this.$localForage.setItem("recents", recents);
  },
  async getLocalStoreRecents(ctx) {
    let recents = await this.$localForage.getItem("recents");
    let recentSet = Array.from(new Set(recents));
    ctx.commit("SET_STATE_RECENTS", recentSet.reverse());
  },
};
