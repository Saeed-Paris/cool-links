
# 📎 Cool Links
![GitHub Actions Status](https://github.com/AmandaMartinsDev/cool-links/actions/workflows/main.yml/badge.svg)
![MIT license](https://img.shields.io/github/license/AmandaMartinsDev/cool-links)

> A free and simple links aggregator template built for hosting with GitHub Actions and Pages.

## 📋 Requirements

1. [Node 16.15.0 LTS](https://www.ruby-lang.org/)
2. [Font Awesome Kit](https://fontawesome.com/)

## 🔎 Usage

1. Clone the repo to your machine.

3. Update dependencies:

    ```console
    npm install
    or
    yarn install
    ```

3. Start the local server to preview your changes:

    ```console
    npm run dev
    or
    yarn dev
    ```

4. Change your Font Awesome kit URL on the `nuxt.config.js` file. 

5. Change pictures on `static` and `assets` folders. 

> (Note: I've used `.webp` format for the main picture, as recommended by Google's PageSpeed Insights)

6. Change name, description, and links on the `pages/index.vue` file.

7. If you want to change the style, you can do this on the `static/assets/style/main.css` file.

> (Note: If you want to change the font family of the site, you'll need to change it on the `nuxt.config.js` file, as well as on the `main.css` file)

8. Change your username and repo name on the `.github/workflows/main.yml` file.

4. Push your changes to your repo and wait for the GitHub Actions to finish the build and deployment to GitHub Pages.

## 🚀 Deploy

You can find the GitHub Actions workflow file on `.github/workflows/main.yml`, this file contains everything about it, but it basically uses of `ashkantaravati/NuxtToGithubPages@v1.0` action from the marketplace to build and deploy to the `gh-pages` branch of the repo.

If you want to use it:

1. Make sure you have selected `Read and write permissions` on `Settings > Actions > General > Workflow permissions`, so the action can push the generated static site files to the `gh-pages` branch.

2. Enable GitHub Pages on `Settings > Pages`, selecting `gh-pages` as your source branch.

Bonus, if you want to use a custom domain:

1. Verify it on `You Account Settings > Pages`, click on `Add Domain` and just follow the instrusctions.

2. As finishing it, just add the following GitHub's records to your DNS provider configuration:

    A records:
    ```
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
    ```

    AAAA records:
    ```
    2606:50c0:8000::153
    2606:50c0:8001::153
    2606:50c0:8002::153
    2606:50c0:8003::153
    ```

You can find more information on the [official documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#about-custom-domain-configuration).

## 📋 Issues

Feel free to open an issue if you found a bug or have a suggestion, so we can discuss the best way to improve or fix it.

## 🛠️ Contribute

You're welcome to contribute to this project, just create your pull request, and wait for the review.

## 📜 License

This project is under [MIT license](LICENSE), so you can freely use it for your personal, professional or project website.
