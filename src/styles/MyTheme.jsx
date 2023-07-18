const { grey, deepPurple } = require("@mui/material/colors");




const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          baker: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
          button:{
            main:deepPurple[500]
          }

        }
      : {
          // palette values for dark mode
          baker: {
            main: "teal",
          },

          favColor: {
            main: grey[800],
          },
          button:{
            main:deepPurple[900]
          }
        }),
  },
});


export default getDesignTokens;
