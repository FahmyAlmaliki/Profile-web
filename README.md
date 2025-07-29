# Profile Web 🚀

Website profil personal yang modern dan responsif dibangun dengan React, TypeScript, dan shadcn/ui.

## ✨ Fitur

- **Modern Design**: Interface yang clean dan profesional
- **Responsive**: Tampil sempurna di semua perangkat
- **Dark/Light Mode**: Tema yang dapat disesuaikan
- **Smooth Animations**: Animasi yang halus dan menarik
- **Component-based**: Arsitektur modular dengan shadcn/ui
- **Type-safe**: Dibangun dengan TypeScript untuk keamanan tipe
- **Fast Performance**: Optimized dengan Vite

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form + Zod
- **Package Manager**: Bun

## 📦 Komponen UI

Proyek ini menggunakan shadcn/ui dengan komponen-komponen berikut:
- Accordion, Alert, Avatar, Badge
- Button, Card, Dialog, Form
- Input, Select, Tabs, Toast
- Navigation Menu, Sidebar
- Dan banyak lagi...

## 🚀 Quick Start

### Prerequisites

Pastikan Anda memiliki:
- Node.js (versi 18 atau lebih baru)
- Bun (package manager)

### Installation

1. Clone repository
```bash
git clone https://github.com/FahmyAlmaliki/Profile-web.git
cd Profile-web
```

2. Install dependencies
```bash
bun install
```

3. Jalankan development server
```bash
bun run dev
```

4. Buka browser dan akses `http://localhost:5173`

## 📝 Available Scripts

```bash
# Development server
bun run dev

# Build untuk production
bun run build

# Build untuk development
bun run build:dev

# Lint kode
bun run lint

# Preview build
bun run preview
```

## 📁 Struktur Proyek

```
src/
├── components/          # Komponen React
│   └── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utilities dan konfigurasi
├── pages/              # Halaman aplikasi
│   ├── Index.tsx       # Halaman utama
│   └── NotFound.tsx    # Halaman 404
├── App.tsx             # Root component
└── main.tsx           # Entry point

public/                 # Static assets
├── favicon.ico
├── placeholder.svg
└── robots.txt
```

## 🎨 Customization

### Menambah Komponen Baru

Proyek ini menggunakan shadcn/ui. Untuk menambah komponen baru:

```bash
npx shadcn-ui@latest add [component-name]
```

### Mengubah Tema

Edit file `tailwind.config.ts` untuk menyesuaikan tema:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Tambahkan warna custom di sini
      }
    }
  }
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Fork repository ini
2. Import ke Vercel
3. Deploy otomatis akan berjalan

### Netlify

1. Build project: `bun run build`
2. Upload folder `dist` ke Netlify

### Manual Deployment

```bash
# Build project
bun run build

# Folder dist/ siap untuk di-deploy
```

## 📱 Social Links

Project ini include social media links:
- Instagram: [@nickname_AI](https://instagram.com/nickname_AI)
- GitHub: [FahmyAlmaliki](https://github.com/FahmyAlmaliki)
- LinkedIn: [Fahmy Almaliki](https://www.linkedin.com/in/fahmy-almaliki-951b732a5/)

## 🤝 Contributing

Kontribusi selalu welcome! Silakan:

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**Fahmy Almaliki**
- GitHub: [@FahmyAlmaliki](https://github.com/FahmyAlmaliki)
- LinkedIn: [Fahmy Almaliki](https://www.linkedin.com/in/fahmy-almaliki-951b732a5/)
- Instagram: [@nickname_AI](https://instagram.com/nickname_AI)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

⭐ Jangan lupa berikan star jika project ini membantu Anda!
