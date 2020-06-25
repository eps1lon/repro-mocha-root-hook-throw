afterEach(() => {
  throw new Error("threw in local afterEach");
});

it("local hooks tests onces", () => {});
it("local hooks tests twice", () => {});
