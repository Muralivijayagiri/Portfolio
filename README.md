# Vijayagiri Muralidhar - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 18+ (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Netlify

## Project Structure

- `index.html` - Vite HTML entrypoint; also contains the hidden form Netlify uses for build-time form detection
- `index.tsx` / `App.tsx` - React entrypoint and page layout
- `components/` - page sections plus shared UI primitives in `UI.tsx`
- `constants.ts` - editable site content: nav, skills, projects, achievements, and certifications
- `types.ts` - shared TypeScript types
- `public/` - images and static assets served from `/`

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

3.  **Type-check the project**:
    ```bash
    npm run typecheck
    ```
    `npm run build` does not type-check, so run this separately.

4.  **Build for production**:
    ```bash
    npm run build
    ```
    The output will be in the `dist` directory.

5.  **Preview the production build**:
    ```bash
    npm run preview
    ```

## Netlify Deployment Config

This project is configured to use [Netlify Forms](https://docs.netlify.com/forms/setup/) for the contact section.

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Forms**: The contact form is pre-configured with `data-netlify="true"` and a honeypot field. No extra backend configuration is needed; submissions will appear in your Netlify dashboard.
