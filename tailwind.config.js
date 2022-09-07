const { Linter } = require("eslint");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Co1: "#1E1E1E",
        Co2: "#299F8A"
      },
      fontFamily: {
        Cai: ["Cairo"]
      },
      height: {
        Hll: "75rem",
        xll: "50rem",
        sll: "35rem"
      },
      width: {
        xll: "50rem",
        sll: "35rem",
        xsll: "25rem"
      },
      margin: {
        mxx: "600px"
      },
      lineHeight: {
        LH: "60px"
      }
    }
  },
  plugins: []
};
