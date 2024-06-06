import { defineConfig, loadEnv } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import legacy from "@vitejs/plugin-legacy";
import webfontDL from "vite-plugin-webfont-dl";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminWebp from "imagemin-webp";
import imageminOptipng from "imagemin-optipng";
import { ViteFaviconsPlugin } from "vite-plugin-favicon";
import PurgeCSS from "@fullhuman/postcss-purgecss";
import svgr from "vite-plugin-svgr";
import imageminJpegRecompress from "imagemin-jpeg-recompress";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: "./",
    server: {
      port: 3000,
      strictPort: true,
    },
    preview: {
      port: 3003,
      strictPort: true,
    },
    plugins: [
      react(),
      svgr({
        // Для підключення svg як ReactComponent
        svgrOptions: { exportType: "named", ref: true, svgo: false, titleProp: true },
        include: "**/*.svg",
      }),
      webfontDL(
        [
          // "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
          "https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap",
        ],
        {
          injectAsStyleTag: true, // вставляти завантажені стилі шрифтів як тег <style> безпосередньо у html документ.
          minifyCss: true, // мініфікувати CSS перед вставкою
          async: true, // Асинхронне завантаження шрифтів
          cache: true, // кешувати завантажені шрифти для подальшого використання
          proxy: false, // використовувати проксі для завантаження шрифтів
        }
      ),
      legacy({
        targets: ["defaults"],
      }), // для генерації легасі версій JavaScript та CSS для застарілих браузерів, які не підтримують сучасний синтаксис або функціональність.
      viteImagemin({
        exclude: [/favicons\/.*\.png$/],
        skipIfLarger: true,
        clearCache: true,
        plugins: {
          // imageminJpegRecompress працює з великим розміром файлів
          jpg: imageminJpegRecompress({
            accurate: true,
            max: 70,
          }),
          png: imageminOptipng({
            optimizationLevel: 5,
          }),
        },
        makeWebp: {
          plugins: {
            jpg: imageminWebp({
              preset: "picture",
              sns: 70,
            }),
            png: imageminWebp({
              preset: "picture",
              sns: 70,
            }),
          },
          formatFilePath: (path) => path.replace(/\.[^/.]+$/, "") + ".webp",
        },
      }),
      env.VITE_FAVICONS === "favicons" &&
        ViteFaviconsPlugin({
          logo: "./src/assets/img/logo.svg", // шлях до вихідного зображення, яке буде використане для генерації favicon.
          // outputPath: "./favicons/",
          favicons: {
            appName: "Material Landing", // Назва веб-сайту або додатку
            icons: {
              android: true, // Генерує іконку для Android-пристроїв.
              appleIcon: true, // Генерує іконку для пристроїв Apple.
              appleStartup: true, // Генерує іконку для стартового екрана на пристроях Apple.
              favicons: true, // Генерує стандартні favicon для браузерів.
              windows: true, // Генерує іконку для пристроїв Windows.
              yandex: false, // Відключає генерацію іконок для сервісу Yandex.
            },
          },
        }),
    ],
    css: {
      postcss: {
        plugins: [
          autoprefixer(), // автоматично додає вендорні префікси до CSS правил, щоб забезпечити сумісність з різними браузерами.
          postcssPresetEnv(), // використовувати сучасні функції CSS, які ще не включені в стандарті, але вже підтримуються деякими браузерами.
          PurgeCSS({
            // видалення невикористаних CSS-стилів
            content: ["./*.html", "./src/**/*.tsx", "./src/**/*.ts"], // шляхи до файлів, які ви хочете аналізувати на наявність використаного CSS
            fontFace: true, // видаляти невикористовувані @font-face.
            keyframes: true, // видаляти невикористовувані анімації keyframes.
            variables: true, //  видаляти невикористовувані CSS-змінні.
            rejected: true, // Логує видалені CSS-класи для налагодження.
            rejectedCss: true, // Створює файл з невикористаними CSS-класами для аналізу.
          }),
        ],
      },
    },
    build: {
      outDir: "docs",
      chunkSizeWarningLimit: 2000, // 2000 байт
      cssCodeSplit: true, // чи слід розділяти CSS код на окремі файли
      // target: "esnext", // використання ES модулів, які дозволяють браузерам завантажувати та кешувати модулі окремо.
      terserOptions: {
        compress: {
          drop_console: true, // Видаляє всі виклики функції console.*.
          dead_code: true, // Видаляє "мертвий" код, тобто код, який не використовується та ніколи не буде використаний.
          unused: true, //  Видаляє непотрібні змінні та функції, які не використовуються в коді.
          arrows: true, // Перетворює вирази-стрілки в більш стислий синтаксис, якщо це можливо.
          conditionals: true, // Зменшує розмір умовних виразів, спрощуючи їх, якщо це можливо.
          booleans: true, // Мінімізує використання логічних значень, замінюючи їх на їх скорочені аналоги, якщо це можливо.
          if_return: true, // Перетворює певні if-блоки на вирази return
          join_vars: true, // Об'єднує послідовно призначені змінні в один вираз
          reduce_funcs: true, // Спрощує виклики функцій, замінюючи їх на більш ефективні конструкції, якщо це можливо.
          reduce_vars: true, // Спрощує обробку змінних, замінюючи їх на більш ефективні конструкції, якщо це можливо.
        },
        mangle: {
          toplevel: true, // Зменшує імена змінних та функцій на рівні глобального обсягу видимості,
        },
        parse: {
          html5_comments: false, // HTML-подібні коментарі будуть видалені під час стиснення коду.
          shebang: false, //  рядок "shebang" (починається з #!) буде вилучений з вихідного коду під час його стиснення
        },
        format: {
          comments: false, // Видаляє всі коментарі
        },
        safari10: true, // Вирішує специфічні проблеми сумісності, пов'язані з Safari 10.
      },
      rollupOptions: {
        output: {
          entryFileNames: "[name].[hash].js",
          chunkFileNames: "[name].[hash].js",
          assetFileNames: (assetInfo) => {
            const extType = assetInfo.name?.split(".").pop();
            const assetName = assetInfo.name ? assetInfo.name.toString() : "";

            if (
              ["android-chrome", "apple-touch", "coast", "favicon", "firefox", "mstile"].some((keyword) =>
                assetName.includes(keyword)
              )
            ) {
              return `favicons/[name].[ext]`;
            } else if (["png", "jpg", "jpeg", "gif", "svg", "webp"].includes(extType ? extType : "")) {
              return `img/[name].[ext]`;
            } else if (["woff", "woff2", "eot", "ttf", "otf"].includes(extType ? extType : "")) {
              return `fonts/[name].[ext]`;
            } else if (["css"].includes(extType ? extType : "")) {
              return `styles/[name].[ext]`;
            }

            return `[name].[ext]`;
          },
          manualChunks: {
            reactHookForm: ["react-hook-form"],
            reactHashLink: ["react-router-hash-link"],
            react: ["react"],
            reactDom: ["react-dom"],
            reactRouterDom: ["react-router-dom"],
            // muiPopUp: ["@mui/material/Dialog", "@mui/material/DialogContent", "@mui/system"],
            muiEmployees: [
              "@mui/material/List",
              "@mui/material/ListItem",
              "@mui/material/Avatar",
              "@mui/material/Card",
              "@mui/material/CardContent",
              "@mui/material/Tooltip",
              "@mui/material/Skeleton",
              "@mui/material/CircularProgress",
              "@mui/material/Fade",
            ],
            // muiSignUp: [
            //   "@mui/material/FormControl",
            //   "@mui/material/FormControlLabel",
            //   "@mui/material/FormLabel",
            //   "@mui/material/Radio",
            //   "@mui/material/RadioGroup",
            //   "@mui/material/TextField",
            //   "@react-input/mask/useMask",
            // ],
            // muiHeader: [
            //   "@mui/material/AppBar",
            //   "@mui/material/IconButton",
            //   "@mui/material/Drawer",
            //   "@mui/material/useMediaQuery",
            //   "@mui/icons-material/Menu",
            //   "@mui/icons-material/Close",
            // ],
            muiCommon: [
              "@mui/material/Button",
              "@mui/material/Container",
              "@mui/material/Typography",
              "@mui/material/Link",
            ],
            // mui: ["@mui/material", "@mui/icons-material"],
          },
        },
      },
      treeshake: true, // видаляє будь-які частини, які не використовуються.
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@img": path.resolve(__dirname, "./src/assets/img"),
        "@icons": path.resolve(__dirname, "./src/assets/img/icons"),
        "@plugins": path.resolve(__dirname, "./plugins"),
      },
    },

    // optimizeDeps: {
    //   include: ["bluebird", "axios", "moment", "classnames", "@material-ui/icons", "react-css-modules"],
    // },
  };
});
