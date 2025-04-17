# Henry's CV - Junior Frontend Developer

## Overview

This project is a single-page Curriculum Vitae (CV) website for Henry, a Junior Frontend Developer. It's designed to showcase skills, education, and experience in a clear,Presentable, and responsive manner. The CV is built using HTML, CSS, and JavaScript, following best practices for web development.

## Features

* **Semantic HTML:** The CV is structured using appropriate HTML tags for better accessibility and SEO.
* **Responsive Design:** The layout adapts to different screen sizes (mobile, tablet, desktop) using media queries.
* **Light and Dark Themes:** The website offers both light and dark color schemes, with a toggle button to switch between them.
* **Theme Preference Persistence:** The user's theme preference is stored in local storage, so it persists across page reloads.
* **Skills Section:** Highlights technical skills, including HTML, CSS, JavaScript, and more.
* **Education Section:** Details educational background, including degree and institution.
* **Experience Section:** Outlines work experience, including job titles, companies, dates, and responsibilities.
* **Links to Online Profiles:** Provides links to LinkedIn and GitHub profiles.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Font Awesome (for icons)

## Setup

To view this CV, simply open the `index.html` file in a web browser.

## Project Structure


├── index.html
├── style.css
├── favicon.ico
└── images/
└── profile.jpg (Optional -  your profile picture)


## Color Scheme

The CV uses the following color scheme:

### Light Theme (Default)

* **Background:** #f4f4f4
* **Container Background:** #fff
* **Text:** #333
* **Secondary Text:** #555
* **Accent Color:** #007bff

### Dark Theme

* **Background:** #1e1e1e
* **Container Background:** #2c2c2c
* **Text:** #eee
* **Secondary Text:** #ccc
* **Accent Color:** #5bc0de

## Theme Toggle

A theme toggle button (represented by a sun/moon icon) is located in the top-right corner of the page. Clicking this button will:

* Switch between the light and dark themes.
* Update the icon (sun for light theme, moon for dark theme).
* Store the selected theme in local storage.

The website will automatically apply the user's preferred theme (if previously selected) when the page is loaded.

## Future Improvements

* Add more interactive elements, such as a downloadable PDF version of the CV.
* Include a portfolio section to showcase projects.
* Implement more advanced styling and animations.
* Optimize for even better performance and accessibility.
