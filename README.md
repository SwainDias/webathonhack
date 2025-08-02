# Webathon Project

A modern web experience featuring a loading animation, infinite marquee, and interactive navbar built with React and Vite.

## 🚀 Features

### Loading Page
- Animated counter from 0-100
- Typography animations with custom fonts (Plain and SilkSerif)
- Blinking "NOW" text effect
- Smooth scroll transition to main content

### Infinite Marquee
- Horizontal scrolling gallery with 6 sample images
- Customizable scroll speed (currently set to 11s)
- Hover effects on images
- Pause on hover functionality
- Responsive design spanning full viewport width

### Interactive Navbar
- Popup-style navigation (2/3 screen width)
- Rounded edges with light outline
- Hover effects with color-coded sections:
  - **ABOUT US** - Orange
  - **WORKS** - Yellow
  - **SERVICES** - Light Orange
  - **CONTACTS** - Red
- Click outside to close functionality

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Fonts** - Plain and SilkSerif fonts
- **Git** - Version control

## 📁 Project Structure

```
webathonhack/
├── src/
│   ├── components/
│   │   ├── LoaderPage.jsx      # Loading animation component
│   │   ├── InfiniteMarquee.jsx # Image marquee component
│   │   └── Navbar.jsx          # Navigation popup component
│   ├── assets/
│   │   ├── images/             # Sample images for marquee
│   │   └── fonts/              # Custom font files
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles and animations
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd webathonhack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Changing Marquee Speed
Edit the animation duration in `src/index.css`:
```css
.animate-marquee {
  animation: marquee 11s linear infinite; /* Change 11s to desired speed */
}
```

### Adding/Replacing Images
1. Add new images to `src/assets/`
2. Update the `collections` array in `src/components/InfiniteMarquee.jsx`
3. Update image paths and titles as needed

### Modifying Navbar Sections
Edit the `sections` array in `src/components/Navbar.jsx` to add, remove, or modify navigation items.

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🎯 Key Features

- **Smooth Animations**: CSS transitions and keyframe animations
- **Custom Typography**: Plain and SilkSerif fonts for unique visual appeal
- **Interactive Elements**: Hover effects and click interactions
- **Modern UI**: Clean, minimalist design with attention to detail
- **Performance Optimized**: Efficient rendering and smooth scrolling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created for Webathon Hackathon

---

**Note**: This project was built as part of a webathon challenge, showcasing modern web development techniques and creative UI/UX design. 