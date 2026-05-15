# My Organization Blog

![App Preview](https://imgix.cosmicjs.com/22a4b660-50a2-11f1-88b2-f195e11966f2-autopilot-photo-1555066931-4365d14bab8c-1778879272125.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive blog platform built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Features dynamic pages for blog posts, authors, and categories.

## Features

- 📝 Dynamic blog post pages with rich content rendering
- 👤 Author profiles with biography and avatar
- 🏷️ Category-based content organization
- 🖼️ Optimized images via imgix
- 📱 Fully responsive mobile-first design
- ⚡ Server-side rendering for fast performance
- 🎨 Beautiful typography with Tailwind CSS
- 🔍 SEO-friendly URLs and metadata

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a078ae78eb083659e767d5f&clone_repository=6a078bd48eb083659e767dad)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a nonprofit website with mission statement, programs, events, impact stories, and a team section.
>
> User instructions: A blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Organization". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A blog with posts, authors, and categories

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Cosmic SDK** - Content management
- **Inter Font** - Typography

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables (provided automatically)
4. Run the development server:
   ```bash
   bun run dev
   ```

## Cosmic SDK Examples

### Fetching All Posts
```typescript
const response = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Post by Slug
```typescript
const response = await cosmic.objects
  .findOne({ type: 'posts', slug })
  .depth(1)
```

### Fetching Posts by Category
```typescript
const response = await cosmic.objects
  .find({ type: 'posts', 'metadata.categories': categoryId })
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with [Cosmic](https://www.cosmicjs.com/docs) to manage all content. The three object types used are:

- **Posts**: Blog articles with title, excerpt, content, featured image, author, and categories
- **Authors**: Writer profiles with name, bio, avatar, and email
- **Categories**: Content categorization with name and description

## Deployment Options

- **Vercel**: Connect your repo and deploy with one click
- **Netlify**: Build command `bun run build`, publish directory `.next`
- Set environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`

<!-- README_END -->