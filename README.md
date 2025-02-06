# Wild Aura Hotel CMS

A modern Content Management System built for hotel management, featuring real-time booking management, cabin administration, and comprehensive analytics dashboard.

## 🌟 Live Demo

- [Vercel Deployment](https://the-wild-aura-hotel-cms.vercel.app)
- [Netlify Deployment](https://wild-aura-cms.netlify.app)

## 🚀 Features

- **Dashboard Analytics**: Real-time statistics, sales charts, and booking trends
- **Booking Management**: Create, view, update, and delete bookings
- **Cabin Administration**: Manage cabin inventory with image uploads
- **Check-in/Check-out System**: Streamlined process for guest management
- **User Authentication**: Secure login and role-based access control
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Fully functional across all device sizes

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Routing**: React Router v7
- **State Management**: TanStack React Query v5
- **Styling**: Styled Components
- **Data Visualization**: Recharts
- **Form Handling**: React Hook Form
- **Backend & Database**: Supabase
- **Development**: Vite
- **Deployment**: Vercel & Netlify

## 📁 Project Structure

```
src/
├── context/          # Context providers (Dark mode)
├── data/            # Static data and assets
├── features/        # Feature-based modules
│   ├── authentication/
│   ├── bookings/
│   ├── cabins/
│   ├── check-in-out/
│   ├── dashboard/
│   └── settings/
├── hooks/           # Custom React hooks
├── pages/           # Route components
├── services/        # API and external service integrations
├── styles/          # Global styles
├── ui/             # Reusable UI components
└── utils/          # Helper functions and constants
```

## 🚦 Getting Started

1. **Clone the repository**
```bash
git clone [repository-url]
cd wild-aura-hotel-cms
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Start the development server**
```bash
npm run dev
```

## 📜 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## 🔧 Configuration

The project uses several key configurations:

- **Vite**: Modern build tool for faster development
- **ESLint**: Code quality and style checking
- **React Query**: Configured with optimal stale time for data fetching
- **React Router**: Protected routes and public routes configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👥 Contact

For any queries or suggestions, please feel free to open an issue in the repository.

---