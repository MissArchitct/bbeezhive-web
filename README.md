# BBeezHive - Permanent Website

**BBeezHive** is a full-featured web platform for dual-user partnerships, AI-powered agents, marketplace monetization, and Ghost-Fi Pro security.

**KPI Signature:** `SIG-LK-SFT-ALPHA-992-VAULT-8TB-2026-NEXUS`

---

## 🚀 Features

### AI Agents
- **KODAX** - Amethyst Repair Sage (Technical Analysis & Problem Solving)
- **CHANCE** - Signal Blue Visionary (Creative Brainstorming & Ideation)
- **SCRIBE** - Neon Lime Knowledge Keeper (Documentation & Organization)

### Partner Network
- Dual-user partnership system (Partner A & B)
- Hive Key linking for seamless collaboration
- Shared pods and file management
- Real-time partner status

### Marketplace
- Browse and purchase AI agents, templates, themes
- Monetize your creations
- Rating and download tracking
- Shopping cart with checkout

### Ghost-Fi Pro
- Advanced encryption and security
- Analytics and reporting
- Priority support (24/7)
- Custom branding and white-label options
- API access and bulk operations
- Dedicated account manager (Enterprise)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom neon theme
- **State Management:** React hooks + TanStack Query
- **Backend:** tRPC + Express
- **Database:** MySQL with Drizzle ORM
- **Testing:** Vitest

---

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run tests
pnpm test
```

---

## 🎨 Design System

### Colors (Dark Pods Neon Theme)
- **Void Black** - `#0a0e27` (Background)
- **Laser Pink** - `#ff006e` (Primary accent)
- **Neon Lime** - `#39ff14` (Success/highlight)
- **Signal Blue** - `#00d9ff` (Secondary accent)
- **Amethyst** - `#b537f2` (Purple accent)
- **Gold** - `#ffd700` (Premium/featured)

### Components
- Glass morphism cards with neon borders
- Neon text glow effects
- Animated hover states
- Responsive grid layouts

---

## 📄 Pages

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Landing page with features & pricing |
| Agents | `/agents` | AI agent chat interface |
| Partners | `/partners` | Partner network & collaboration |
| Marketplace | `/marketplace` | Browse & purchase items |
| Pro | `/pro` | Ghost-Fi Pro features & pricing |
| Login | `/login` | User authentication |
| Signup | `/signup` | Account creation |

---

## 🔌 API Integration

### Backend Endpoints (tRPC)
- `agents.kodax.chat` - KODAX agent chat
- `agents.chance.chat` - CHANCE agent chat
- `agents.scribe.chat` - SCRIBE agent chat
- `payments.subscription.createProIntent` - Create Pro subscription
- `payments.subscription.createEnterpriseIntent` - Create Enterprise subscription
- `payments.marketplace.createPurchaseIntent` - Create marketplace purchase
- `auth.me` - Get current user
- `auth.logout` - Logout user

---

## 📊 Pricing

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | Basic agents, partner linking, marketplace |
| Pro | $9.99/mo | Ghost-Fi, analytics, priority support, API |
| Enterprise | $29.99/mo | Everything + custom branding, dedicated manager |

---

## 🔐 Security

- OAuth authentication (Google, GitHub)
- Ghost-Fi encryption layer (Pro+)
- Secure session management
- HTTPS enforced
- Rate limiting on API endpoints

---

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized for all screen sizes

---

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test agents.test.ts

# Watch mode
pnpm test:watch

# Coverage
pnpm test -- --coverage
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```bash
docker build -t bbeezhive-web .
docker run -p 3000:3000 bbeezhive-web
```

### Manual
```bash
pnpm build
pnpm start
```

---

## 📚 Documentation

- **INTEGRATION_GUIDE.md** - API integration details
- **WHITE_LABEL_FRAMEWORK.md** - White-label architecture
- **AUTOMATION.md** - CI/CD and automation

---

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Write tests
4. Submit a pull request

---

## 📝 License

Proprietary - BBeezHive © 2026

---

## 📞 Support

- Email: support@limitlesskreationz.com
- Status: https://status.bbeezhive.com
- Docs: https://docs.bbeezhive.com

---

**Version:** 2.41.0  
**Last Updated:** March 6, 2026  
**KPI:** SIG-LK-SFT-ALPHA-992-VAULT-8TB-2026-NEXUS
