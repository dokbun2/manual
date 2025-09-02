# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AIFI (AI Film Framework) guide website built with React, Vite, and Tailwind CSS. The project serves as a user manual for the AIFI video production framework, providing comprehensive guides for video creation using AI-powered tools.

## Key Technologies

- **Build Tool**: Vite
- **Framework**: React 19 with React Router DOM
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui components (Radix UI based)
- **Animation**: Framer Motion
- **Package Manager**: pnpm (v10.4.1)

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting
pnpm lint
```

## Project Architecture

### Route Structure
The application uses React Router with the following main routes:
- `/` - Homepage with overview of AIFI features
- `/gem-guide` - GEM (8-stage video production) guide
- `/storyboard` - Storyboard functionality guide
- `/concept-art` - Concept art generation guide
- `/faq` - Frequently asked questions

### Component Organization
- **Page Components**: Located in `src/components/` (HomePage, GemGuidePage, StoryboardPage, ConceptArtPage, FAQPage)
- **UI Components**: Located in `src/components/ui/` (shadcn/ui components)
- **Navigation**: Persistent navigation component across all pages

### Path Aliases
The project uses the `@` alias for the `src` directory:
- `@/components` - Component files
- `@/components/ui` - UI component library
- `@/lib` - Utility functions
- `@/hooks` - Custom React hooks

## Key Files and Their Purpose

- **components.json** - shadcn/ui configuration with New York style theme
- **vite.config.js** - Vite configuration with React and Tailwind plugins
- **gem-stage-*.md** - Content files for 8 stages of video production
- **storyboard-*.md** - Storyboard usage documentation
- **concept-art-*.md** - Concept art usage documentation

## Content Structure

The website focuses on three main features of AIFI:
1. **GEM Guide** - 8-stage systematic video production process
2. **Storyboard** - Visual planning and scene design tools
3. **Concept Art** - AI-powered image generation for pre-production

Each section provides:
- Usage instructions (사용방법)
- Practical application methods (활용법)
- Step-by-step guides for video production workflow

## rules
- 답변은 한국어로 해줘
- 아이콘은 rails_icons 쓰고, tabler 써줘 