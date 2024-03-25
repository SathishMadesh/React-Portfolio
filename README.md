# React Portfolio Project

## Project Overview
This project is a React-based portfolio website showcasing a developer's skills, projects, and contact information. It utilizes a component-based architecture to organize different sections of the website, including Navbar, Header, AboutMe, Skills, Projects, and ContactMe. Data is fetched dynamically from external sources, and the website is designed to be responsive and visually appealing.

## Project Structure
### Components: 
The project is organized into several components inside the components directory, including:
### Navbar: 
Renders the navigation bar.
### Header: 
Displays the header section with a title, typed text animation, and a main button.
### AboutMe: 
Shows information about the developer, including an image and a brief description.
### Skills: 
Displays a list of skills with corresponding icons.
### Projects: 
Fetches and displays projects dynamically from a JSON file, showing project images and titles with a link to view the source code.
### ContactMe: 
Shows contact information and social media icons for contacting the developer.
### Data: 
The project imports a JSON file (skills.json) to fetch and display skills dynamically.
### Styling: 
The project uses Bootstrap for styling and responsiveness. Additionally, custom CSS is used for specific styling requirements.
### Dependencies: 
The project uses Axios for making HTTP requests and AOS (Animate On Scroll) library for animating elements on scroll.

## Functionality
### Navigation: 
Users can navigate through different sections of the website using the navigation links in the navbar.
### Header: 
The header section displays a title, a typed text animation showcasing different skills, and a main button.
### About Me: 
This section provides information about the developer, including an image and a description.
### Skills: 
Displays a list of skills with corresponding icons fetched from the skills.json file.
### Projects: 
Fetches project data from an external JSON file and dynamically renders project cards with images and titles. Each card includes a link to view the source code.
### Contact Me: 
Shows contact information and links to social media profiles for contacting the developer.
### Initialization
The useEffect hook is used to initialize the AOS library for animating elements on scroll.
### Styling
Custom CSS is used along with Bootstrap classes to style different components and ensure responsiveness.


## Getting Started
### Clone the Repository:

git clone <repository_url>\
cd react-portfolio

### Install Dependencies: (Required)
npm install React Icons (react-icons@^5.0.1)\
npm install Bootstrap (bootstrap@^4.5.3)\
npm install Axios (axios@^1.6.8)\
npm install AOS (aos@^2.3.4)\
npm install React Typed (react-typed@^2.0.12)\

### Start the Development Server:
npm start

### Access the Application:
Navigate to http://localhost:3000 in your web browser to view the running application.

## Design and Technical Decisions
### Component-based Architecture: 
The project follows a component-based architecture, improving code maintainability and reusability.
### Responsive Design: 
The website is designed to be responsive, ensuring functionality and design integrity across various devices and screen sizes.
### API Integration: 
Project data is fetched dynamically from a REST API, enhancing the website's interactivity and real-time data updates.
### Animation and Interactivity: 
The project utilizes the AOS library for animating components as they come into view, enhancing the user experience.
