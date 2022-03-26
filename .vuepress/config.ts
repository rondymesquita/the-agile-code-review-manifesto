import { path } from "@vuepress/utils";
import Markdown from "vite-plugin-md";

const base =
  process.env.NODE_ENV === "development"
    ? undefined
    : "/the-agile-code-review-manifesto/";

export default {
  // base,
  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    lastUpdated: false,
    navbar: [
      {
        text: "Author",
        link: "https://github.com/rondymesquita/",
      },
      {
        text: "Github",
        link: "https://github.com/rondymesquita/the-agile-code-review-manifesto",
      },
    ],
  },
  bundlerConfig: {
    vuePluginOptions: {
      include: [/\.vue$/, /\.md$/], // <--
    },
    viteOptions: {
      plugins: [Markdown()],
    },
  },
};
