# Vijayagiri Muralidhar - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 18+ (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Netlify

## Local Development

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The app will run at `http://localhost:3000`.

3.  **Build for production**:
    ```bash
    npm run build
    ```
    The output will be in the `dist` directory.

## Netlify Deployment Config

This project is configured to use [Netlify Forms](https://docs.netlify.com/forms/setup/) for the contact section.

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Forms**: The contact form is pre-configured with `data-netlify="true"` and a honeypot field. No extra backend configuration is needed; submissions will appear in your Netlify dashboard.
