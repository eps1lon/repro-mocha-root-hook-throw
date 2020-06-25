module.exports = {
  mochaHooks: {
    afterEach() {
      throw new Error("Threw in root afterEach");
    },
  },
};
