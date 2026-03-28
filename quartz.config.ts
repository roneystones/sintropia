import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Sintropia",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pt-BR",
    baseUrl: "sintropia.pages.dev",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesque",
        code: "IBM Plex Mono",
        body: "Crimson Pro",
      },
      colors: {
/*        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        }, */

        lightMode: {
          light: "#fbfaf5",       // Fundo cor de papel (Off-white)
          lightgray: "#e5e5e5",   // Bordas e divisores
          gray: "#b8b8b8",        // Metadados e datas
          darkgray: "#2d2d2d",    // Texto principal (Quase preto para contraste)
          dark: "#1a3a32",        // Títulos (Verde floresta profundo)
          secondary: "#8b4513",   // Links (Saddle Brown - tom de couro/biblioteca)
          tertiary: "#556b2f",    // Destaques e hover (Dark Olive Green)
          highlight: "rgba(139, 69, 19, 0.1)", // Cor de fundo ao selecionar
        },

        darkMode: {
          light: "#121212",       // Fundo carvão profundo
          lightgray: "#282828",   // Divisores suaves
          gray: "#646464",        // Texto secundário
          darkgray: "#d4d4d4",    // Texto principal claro
          dark: "#a3b18a",        // Títulos (Sálvia claro)
          secondary: "#bc6c25",   // Links (Tom de terracota)
          tertiary: "#dda15e",    // Destaques
          highlight: "rgba(188, 108, 37, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
