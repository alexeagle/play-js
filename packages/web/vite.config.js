/** @type {import('vite').UserConfig} */
export default {
  // Workaround: let vite look outside the root folder to find files outside bazel-bin
  server: {
    fs: {
      strict: false,
    },
  },

  // FIXME: should be
  // resolve: {
  //   preserveSymlinks: true,
  // },
  // esbuild: {
  //   preserveSymlinks: true,
  // },
};
