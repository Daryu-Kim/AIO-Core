export default {
  name: "HomeHeader",
  props: {
    msg: String,
  },
  methods: {
    searchFocusIn: function () {
      this.$refs.SEARCH_BOX.classList.add("gradient-border");
    },
    searchFocusOut: function () {
      this.$refs.SEARCH_BOX.classList.remove("gradient-border");
    },
  },
};
