const completionSpec: Fig.Spec = {
  name: "cdc",
  description: "Load up a  ode project",
  args: {
    generators: {
      script: ["ls", "-1", "/Users/chris/code"],
      postProcess: function (out) {
        return out
          .split("\n")
          .sort((a, b) => {
            return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
          })
          .map((dir) => ({
            name: dir,
            icon: "💻",
          }));
      },
    },
  },
};
export default completionSpec;
