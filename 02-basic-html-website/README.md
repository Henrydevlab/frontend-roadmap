# Simple Multi-Page HTML Website

This project is a simple, multi-page website built using only HTML and CSS. It includes a homepage, a projects page, an articles page, and a contact page, all featuring a consistent navigation bar, SEO meta tags, and a responsive design.

## Table of Contents

- [Simple Multi-Page HTML Website](#simple-multi-page-html-website)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Pages](#pages)
  - [Features](#features)
  - [How to Use](#how-to-use)
  - [Logo](#logo)
  - [Customization](#customization)
  - [Contributing](#contributing)
  - [License](#license)

## Project Structure
-   `index.html`: The homepage of the website.
-   `projects.html`: A page showcasing the developer's projects.
-   `articles.html`: A page for blog posts or articles.
-   `contact.html`: A page with a contact form.
-   `style.css`: The stylesheet containing all the CSS rules for the website's appearance and responsiveness.

## Pages

1.  **Homepage (`index.html`)**
    -   Introduction of the frontend developer.
    -   Sections for projects, work experience, education, and teacher reviews.

2.  **Projects (`projects.html`)**
    -   A list of frontend development projects with brief descriptions and links (placeholder).

3.  **Articles (`articles.html`)**
    -   A list of articles or blog posts (placeholder).

4.  **Contact (`contact.html`)**
    -   A contact form with fields for name, email, and message.

All pages include:

-   A consistent navigation bar at the top, linking to all other pages.
-   SEO-friendly meta tags in the `<head>` section.
-   A footer with a copyright notice.

## Features

-   **Semantic HTML Structure:** Uses appropriate HTML5 elements for better structure and SEO.
-   **Multi-Page Navigation:** Easy navigation between different sections of the website.
-   **SEO Optimization:** Includes meta descriptions, keywords, and author information in the head of each page.
-   **Responsive Design:** Adapts to different screen sizes using CSS media queries.
    -   Optimized layout for small (phones), medium (tablets), and large (desktops) screens.
-   **Sticky Navigation and Footer:** The header and footer remain visible at the top and bottom of the viewport upon scrolling.
-   **Centered Content (Large Screens):** On larger displays, the main content is centered within a defined maximum width for better readability.
-   **Basic Styling:** Includes basic CSS for layout and visual presentation.
-   **External Stylesheet:** All CSS rules are kept in a separate `style.css` file for better organization and maintainability.
-   **Logo and Name:** The navigation bar includes a placeholder for a logo image and a name text on the left.

## How to Use

1.  **Clone or Download:** Download the files (`index.html`, `projects.html`, `articles.html`, `contact.html`, and `style.css`) to your local machine.
2.  **Logo Image:** Replace the placeholder `"logo.png"` in the HTML files with the actual path to your logo image. Ensure the image file is in the same directory as the HTML files or adjust the path accordingly.
3.  **Open in Browser:** Open any of the `.html` files (e.g., `index.html`) in your web browser to view the website.
4.  **Navigate:** Use the links in the navigation bar to move between the different pages.
5.  **Resize Browser:** Resize your browser window to see the responsive design in action.

## Logo

-   The navigation bar includes a placeholder for a logo image using the tag `<img src="logo.png" alt="Logo">`.
-   **To use your own logo:**
    1.  Replace `"logo.png"` in the HTML files with the correct path to your logo file (e.g., `"images/my-logo.png"` if you have an "images" folder).
    2.  Ensure your logo image file is located at the specified path.
    3.  Adjust the `max-height` in the `style.css` under the `.logo img` rule to control the size of your logo.

## Customization

-   **Content:** Modify the text and links within the HTML files to reflect your own information, projects, articles, and contact details.
-   **Styling:** Edit the `style.css` file to change the colors, fonts, layout, and overall appearance of the website.
-   **Logo:** As mentioned above, replace the placeholder logo with your own.
-   **Maximum Width:** Adjust the `max-width` value in the `.container` class in `style.css` to control the maximum width of the content on larger screens.
-   **Media Query Breakpoints:** Modify the `max-width` and `min-width` values in the `@media` rules in `style.css` to adjust when the responsive layout changes occur.

## Contributing

Contributions to this simple website project are welcome. Feel free to fork the repository and submit pull requests with improvements or bug fixes.

## License

This project is open source and available under the [Specify License Here] license.

---

**Note:** Replace `[Specify License Here]` with the actual license you want to use for your project (e.g., MIT License, Apache License 2.0). You might also want to add more specific details about your project or how to contribute.