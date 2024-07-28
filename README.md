# HealthHub

Welcome to **HealthHub**! 🚀 This is a cutting-edge web application built with React and Vite, leveraging Firebase for its backend. HealthHub is designed to empower users to share and discover recipes and workouts. It features both public and private areas, providing distinct functionalities based on user authentication.

## Table of Contents

- [Features](#features)
  - [Public Area](#public-area)
  - [Private Area](#private-area)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Features

### Public Area 🌐

- **Home Page**: Dive into an overview of what HealthHub offers.
- **Catalog Pages**: Seamlessly browse through a variety of recipes and workouts.
- **Detail Pages**: View detailed information on individual recipes and workouts.
- **Geolocation Weather**: After agreeing to use the browser's geolocation, see the current temperature in your city using the AccuWeather API.
- **Advise Section**: Get random advice from the Adviceslip API to inspire and motivate you.
- **Authentication**: Effortlessly register and log in to access enhanced features.
- **Comments**: View comments on recipes and workouts.

### Private Area 🔒

- **Create Recipes/Workouts**: Authenticated users can craft and share their own recipes and workouts.
- **Manage Recipes/Workouts**: 
  - **Edit/Delete**: Users can edit or delete their own recipes and workouts.
  - **Likes**: Registered users can like recipes and workouts they don't own.
- **Profile Page**: View and manage your created content and liked recipes/workouts.
- **Comments Management**: 
  - **Add Comments**: Authenticated users can leave comments on recipes and workouts.
  - **Edit/Delete Comments**: Users can edit or delete their own comments.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Run the app**
    ```bash
    npm run dev
    ```

4. **Run Tests**: Use Vitest to run the project's tests.
    ```bash
    npm run test
    ```

## Usage

1. **Register/Login**: Create an account or log in to unlock all features.
2. **Explore Recipes and Workouts**: Browse through the catalog to discover recipes and workouts.
3. **View Details**: Access detailed pages for individual recipes and workouts.
4. **Interact**: 
    - Like posts to engage and connect with the community.
    - Add comments to share your thoughts on recipes and workouts.
    - Edit or delete your own comments.
5. **Manage Content**: 
    - **Edit/Delete**: Edit or delete your own recipes and workouts.
    - **Like**: Like recipes and workouts others have created.
6. **Check Weather**: Allow geolocation to see the current temperature in your city.
7. **Get Advice**: Use the Advise section to get random advice from the Adviceslip API.

## Technologies

- **Frontend**: React ⚛️, Vite ⚡
- **State Management**: Redux Toolkit ⚙️
- **Backend**: Firebase (Firestore 🔥, Authentication 🔒)
- **Hosting**: Firebase Hosting 🌐
- **Weather API**: AccuWeather API 🌤️
- **Advice API**: Adviceslip API 💡
- **Testing**: Vitest 🧪

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for visiting HealthHub! Happy cooking and working out! 🥗💪

**Project URL**: [HealthHub](https://healthhub-ddadd.web.app/)
