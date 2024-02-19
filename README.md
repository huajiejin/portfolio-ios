🚀 Modern, SEO-friendly portfolio template helps developers create standout portfolios to attract more clients or interviews. Utilizing React, Next.js, TypeScript & TailwindCSS.

## Core Features

- **Customizable**: Easily customize the portfolio with your name, role, bio, and social profiles.
- **Showcase Your Work**: Highlight your projects, including the tech stack, impact, and links to live sites or code repositories.
- **Responsive Design**: The portfolio is designed to look great on all devices, from mobile phones to desktops.
- **Dark Mode**: Includes a dark mode for improved usability and aesthetics.
- **SEO-Friendly**: Optimized for search engines to help you get discovered by potential clients or employers.

## Getting Started

To get started with Dev Portfolio Pro, clone the repository and install the dependencies:

```bash
git clone https://github.com/huajiejin/dev-portfolio-pro.git
cd dev-portfolio-pro
npm install
```

Then, start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio in the browser.

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
