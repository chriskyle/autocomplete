const completionSpec: Fig.Spec = {
  name: "cdc",
  description: "Load up a Calm project",
  args: {
    generators: {
      script: ["ls", "-1", "/Users/chriskyle/calmcode/"],
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
