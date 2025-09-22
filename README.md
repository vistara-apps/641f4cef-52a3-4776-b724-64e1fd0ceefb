# HealthPulse Hub

Your curated intelligence and collaboration network for proactive public health.

## Overview

HealthPulse Hub is a Base Mini App designed for public health professionals to access curated intelligence, connect with peers, and launch local initiatives. Built with Next.js 15, MiniKit, and OnchainKit.

## Features

- **Curated Health Intelligence Feed**: Real-time feed of news, research, and policy updates
- **Peer-to-Peer Networking**: Connect with other public health professionals
- **Local Initiative Toolkit**: Access customizable templates for community health programs
- **Expert Q&A Bot**: AI-powered assistance for public health questions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (via MiniKit and OnchainKit)
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **AI**: OpenRouter API integration

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthpulse-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your API keys:
   - `NEXT_PUBLIC_MINIKIT_API_KEY`: Your MiniKit API key
   - `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key
   - `OPENROUTER_API_KEY`: Your OpenRouter API key for AI features

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   ├── providers.tsx      # App providers
│   ├── loading.tsx        # Loading UI
│   └── error.tsx          # Error boundary
├── components/            # React components
│   ├── AppShell.tsx       # Main app layout
│   ├── FeedCard.tsx       # Intelligence feed cards
│   ├── ProfileCard.tsx    # User profile cards
│   ├── InitiativeCard.tsx # Initiative template cards
│   ├── ExpertChat.tsx     # AI chat component
│   ├── TopicTag.tsx       # Topic filter tags
│   └── NetworkButton.tsx  # Networking action buttons
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript type definitions
│   ├── constants.ts       # App constants and mock data
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Key Components

### AppShell
Main application layout with navigation and responsive design.

### FeedCard
Displays intelligence items (news, research, policy updates) with:
- Content type indicators
- Priority levels
- Topic tags
- Action buttons (bookmark, share, external link)

### ProfileCard
Shows user profiles with:
- Avatar and subscription tier
- Bio and expertise
- Connection and messaging actions

### InitiativeCard
Displays initiative templates with:
- Difficulty levels
- Estimated time
- Download and customization options

### ExpertChat
AI-powered chat interface for public health Q&A.

## Data Models

### User
- Basic profile information
- Interests and expertise
- Subscription tier
- Connection count

### IntelligenceItem
- Title, source, and content
- Tags and categorization
- Priority and read time
- Publication date

### InitiativeTemplate
- Name and description
- Category and difficulty
- Tags and estimated time
- Content URL

## Subscription Tiers

- **Free**: Basic intelligence feed, limited networking
- **Pro** ($10/mo): Enhanced features, advanced networking
- **Agency** ($50/mo): Team features, custom templates

## Development

### Adding New Features

1. Define types in `lib/types.ts`
2. Add constants in `lib/constants.ts`
3. Create components in `components/`
4. Update main page logic in `app/page.tsx`

### Styling Guidelines

- Use Tailwind CSS classes
- Follow the design system tokens in `tailwind.config.js`
- Maintain mobile-first responsive design
- Use the custom CSS classes defined in `globals.css`

### API Integration

The app is designed to integrate with:
- Farcaster API for user profiles and social features
- Content aggregation APIs for health intelligence
- OpenRouter/OpenAI for AI chat functionality
- MiniKit for Base blockchain integration

## Deployment

This app is designed to be deployed as a Base Mini App within the Farcaster ecosystem.

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to your hosting platform**
   - Vercel (recommended)
   - Netlify
   - Custom hosting

3. **Configure your Mini App manifest**
   Update the manifest configuration for Base App discovery.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
