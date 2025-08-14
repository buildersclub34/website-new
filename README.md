# The Builders Club

A modern website for The Builders Club, built with Next.js and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/builders-club.git
   cd builders-club
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file and add your environment variables (see `.env.example` for reference):
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Build

To create a production build:

```bash
npm run build
# or
yarn build
```

## 🚀 Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import your project on Vercel.
3. Vercel will automatically detect it's a Next.js app and set up the build and output settings for you.
4. Add your environment variables in the Vercel project settings.
5. Deploy!

### Environment Variables

Make sure to set the following environment variables in your Vercel project settings:

- `NEXT_PUBLIC_SITE_URL` - The public URL of your site (e.g., https://your-site.vercel.app)

## 📦 Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icons

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
