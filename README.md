🚀 Modern, SEO-friendly portfolio template helps developers create standout portfolios to attract more clients or interviews. Utilizing React, Next.js, TypeScript & TailwindCSS.

## Core Features

- **Customizable**: Easily customize the portfolio with your name, role, bio, and social profiles.
- **Showcase Your Work**: Highlight your projects, including the tech stack, impact, and links to live sites or code repositories.
- **Responsive Design**: The portfolio is designed to look great on all devices, from mobile phones to desktops.
- **Dark Mode**: Includes a dark mode for improved usability and aesthetics.
- **SEO-Friendly**: Optimized for search engines to help you get discovered by potential clients or employers.
- **GitHub Pages Support**: Configured to support deployment to GitHub Pages.

## Getting Started

To get started with Dev Portfolio Pro, fork the repository and clone your fork to your local machine. Then, navigate to the project directory and install the dependencies:

```bash
git clone https://github.com/huajiejin/dev-portfolio-pro.git
cd dev-portfolio-pro
npm install
```

Then, start the development server:

```bash
npm run dev
```

Open [http://localhost:3000/dev-portfolio-pro](http://localhost:3000/dev-portfolio-pro) to view your portfolio in the browser.

## Configuration

You can customize your portfolio by modifying the `dev-portfolio-pro.config.js` file:

- `name`: Your name.
- `role`: Your professional role (e.g., "Software Engineer").
- `email`: Your email address.
- `avatar_url`: The URL of your avatar image.
- `resume_url`: The URL of your resume.
- `bio`: A short bio about yourself.
- `socials`: An object with your social profiles. The keys are the names of the social platforms, and the values are the URLs of your profiles.
- `work`: An array of objects, each representing a project you've worked on. Each object should have the following properties:
  - `name`: The name of the project.
  - `date`: The year the project was completed.
  - `impact`: A short statement about the impact of the project.
  - `description`: A description of the project.
  - `image_url`: The URL of an image representing the project.
  - `url`: The URL of the project's code repository.
  - `live_url`: The URL of the live project.
  - `tech_stack`: An array of technologies used in the project.

Additionally, the base URL is set to `/dev-portfolio-pro` in the Next.js config file `next.config.mjs` by default. You should modify this to match your own repository name if you're customizing the portfolio for deployment to GitHub Pages.

### URL Handling for Static Files

Static files such as avatars, resumes, and other resources should be stored in the `public` folder for easy access and serving to the client.

When referencing these files in the application, prepend the base URL to the relative URLs. For example, if an image file is located at `public/sample-avatar.jpg`, and the default base URL is set to `/dev-portfolio-pro` for GitHub Pages deployment, prepend this base URL to the relative path. For instance: `/dev-portfolio-pro/sample-avatar.jpg`.

This rule applies to the following configuration properties:

- avatar_url
- resume_url
- work[i].image_url
- work[i].url
- work[i].live_url

## Deploy to GitHub Pages

[GitHub Pages](https://pages.github.com) is a great way to host your portfolio for free. To deploy your portfolio to GitHub Pages, follow these steps:

### Step 1: Update the Base URL

In the Next.js config file `next.config.mjs`, update the `basePath` property to match your repository name if you have a different name than `dev-portfolio-pro`:

```javascript
module.exports = {
  // basePath: '/dev-portfolio-pro',
  basePath: '/your-repository-name',
};
```

### Step 2: Enable GitHub Pages

In your GitHub repository, navigate to the "Settings" tab, and scroll down to the "Pages" section. Under "Source", select the "GitHub Actions"

### Step 3: Deploy

Push your changes to the `main` branch, and GitHub Actions will automatically deploy your portfolio to GitHub Pages in a few minutes. Once the deployment is complete, you can access your portfolio at `https://[your-username].github.io/[your-repository-name]`.
