# 🛒 Shopzz Cart Dashboard — Admin & Analytics Panel

![Shopzz Cart Dashboard Banner](./src/assets/Screenshots/shopzz-cart-logo.png)

**A modern, fully responsive admin dashboard built with React 19**

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.x-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Pages & Components](#-pages--components)
- [State Management](#️-state-management)
- [Responsive Design](#-responsive-design)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Dependencies](#-dependencies)
- [Development Journey](#️-development-journey)
- [Future Enhancements](#-future-enhancements)
- [Acknowledgements](#-acknowledgements)
- [License](#-license)

---

## 📖 About the Project

**Shopzz Cart Dashboard** is a feature-rich admin panel developed entirely with **React 19** and **Vite**. The project was built as a practice project to bring together the kind of features a real internal dashboard product needs — e-commerce style analytics, interactive charts, a calendar, a Kanban board, data tables, and a rich text editor — all inside one consistent shell.

The application is built as a **multi-page single-page application (SPA)** using React Router DOM for client-side navigation, the React Context API for global state management (theme, sidebar, and user-level state), and **Tailwind CSS 4** for all styling.

Every page and component has been designed to be **fully responsive** across all screen sizes, from small phones up to large desktop monitors.

---

## ✨ Features

### 🏠 Ecommerce (Dashboard Home)

- Overview landing page combining key stats, charts, and recent activity
- Entry point for the rest of the dashboard's navigation

### 📊 Charts

- Individual, dedicated pages for **Area, Bar, Line, Pie, Pyramid, Stacked, Financial**, and **Color Mapping** charts
- Built with **ApexCharts** and **Recharts**
- Lightweight trend indicators via **React Sparklines**
- Shared, reusable chart components (`LineChart`, `PieChart`, `SparkLine`, `Stacked`) used across multiple pages

### 📅 Calendar

- Full month/week/day/list views powered by **FullCalendar**
- Drag-and-drop and click-to-create event interaction (`daygrid`, `timegrid`, `list`, `interaction` plugins)

### 🗂️ Kanban Board

- Drag-and-drop task/card management built with **@hello-pangea/dnd**
- Cards can be moved freely across status columns

### 📝 Editor

- Rich text content editing powered by **TinyMCE** and **SunEditor**

### 🎨 Color Picker

- Standalone utility page for quick color selection and preview

### 👥 Customers / Employees / Orders

- Dedicated data-table pages for managing customer records, employee records, and order history

### 🧭 Dashboard Shell

- Collapsible **Sidebar** navigation and a fixed **Navbar**
- **Header** housing search, cart, notifications, and profile controls
- **Theme Settings** panel for customizing dashboard appearance
- **User Profile** and **Notification** dropdown panels
- **Cart** preview component
- Persistent **Footer**

---

## 📸 Screenshots

Get a glimpse of the Shopzz Cart Dashboard UI across different pages:

### 🏠 Ecommerce Overview

![Ecommerce Page](./src/assets/Screenshots/ecommerce.png)

### 📊 Charts

![Charts Page](./src/assets/Screenshots/charts.png)

### 📅 Calendar

![Calendar Page](./src/assets/Screenshots/calender.png)

### 🗂️ Kanban Board

![Kanban Page](./src/assets/Screenshots/kanban.png)

---

## 🛠️ Tech Stack

| Technology                          | Version   | Purpose                                     |
| ----------------------------------- | --------- | ------------------------------------------- |
| **React**                           | 19.x      | Core frontend framework                     |
| **Vite**                            | 8.x       | Build tool and dev server                   |
| **Tailwind CSS**                    | 4.x       | Utility-first styling (`@tailwindcss/vite`) |
| **React Router DOM**                | 7.x       | Client-side routing and navigation          |
| **Context API**                     | Built-in  | Global state management                     |
| **ApexCharts / React ApexCharts**   | 5.x / 2.x | Chart rendering                             |
| **Recharts**                        | 3.x       | Chart rendering                             |
| **React Sparklines**                | 1.x       | Inline trend indicators                     |
| **FullCalendar**                    | 6.x       | Calendar views & event interaction          |
| **@hello-pangea/dnd**               | 18.x      | Drag-and-drop Kanban board                  |
| **TinyMCE React / SunEditor React** | 6.x / 3.x | Rich text editing                           |
| **Floating UI (React)**             | 0.x       | Tooltips, popovers, dropdowns               |
| **React Icons**                     | 5.x       | Icon components                             |
| **ESLint**                          | 10.x      | Code quality checks                         |

> ⚠️ No component UI library (MUI, Ant Design, shadcn) is used — all layout and components are custom-built on top of Tailwind CSS.

---

## 📁 Project Structure

```
mega-dashboard/
│
├── public/
│
├── src/
│   ├── assets/                       → Images, fonts, static media
│   │
│   ├── Components/
│   │   ├── Charts/
│   │   │   ├── LineChart.jsx
│   │   │   ├── PieChart.jsx
│   │   │   ├── SparkLine.jsx
│   │   │   └── Stacked.jsx
│   │   ├── Button.jsx                → Shared button component
│   │   ├── Cart.jsx                  → Cart preview / dropdown
│   │   ├── ChartsHeader.jsx          → Header used across chart pages
│   │   ├── Chart.jsx                 → Base chart wrapper
│   │   ├── Footer.jsx                → App footer
│   │   ├── Header.jsx                → Navbar content (search, cart, notifications, profile)
│   │   ├── Index.jsx                 → Barrel export for Components
│   │   ├── Navbar.jsx                → Fixed top navigation bar
│   │   ├── Notification.jsx          → Notification dropdown panel
│   │   ├── Sidebar.jsx               → Collapsible sidebar navigation
│   │   ├── ThemeSettings.jsx         → Theme/color customization panel
│   │   └── UserProfile.jsx           → User profile dropdown
│   │
│   ├── Context/
│   │   └── ContextProvider.jsx       → Global state (theme, sidebar, user, cart)
│   │
│   ├── data/                          → Static dummy data & demo media
│   │   ├── avatar.jpg / avatar2.jpg / avatar3.png / avatar4.jpg
│   │   ├── dummy.jpg
│   │   ├── product1.jpg – product9.jpg
│   │   └── welcome-bg.svg
│   │
│   ├── Pages/
│   │   ├── charts/
│   │   │   ├── Area.jsx
│   │   │   ├── Bar.jsx
│   │   │   ├── ColorMapping.jsx
│   │   │   ├── Financial.jsx
│   │   │   ├── Line.jsx
│   │   │   ├── Pie.jsx
│   │   │   ├── Pyramid.jsx
│   │   │   └── Stacked.jsx
│   │   ├── Calendar.jsx              → FullCalendar integration
│   │   ├── ColorPicker.jsx           → Color picker utility page
│   │   ├── Customers.jsx             → Customers data table
│   │   ├── Ecommerce.jsx             → Dashboard home / overview
│   │   ├── Editor.jsx                → Rich text editor (TinyMCE / SunEditor)
│   │   ├── Employee.jsx              → Employees data table
│   │   ├── index.jsx                 → Barrel export for Pages
│   │   ├── Kanban.jsx                → Drag-and-drop Kanban board
│   │   └── Orders.jsx                → Orders data table
│   │
│   ├── App.css                       → Global app-level styles
│   ├── App.jsx                       → Root component & route definitions
│   ├── index.css                     → Tailwind entry & base styles
│   └── main.jsx                      → React DOM entry point
│
├── .gitignore
├── eslint.config.js                  → ESLint 10 flat config
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📄 Pages & Components

### `App.jsx`

The root component that holds the route definitions and renders the persistent dashboard shell (`Navbar`, `Sidebar`, `Footer`) around every page.

### `ContextProvider.jsx`

The global state provider wrapping the entire app.

- Manages sidebar open/collapsed state
- Manages the active theme/color settings surfaced via `ThemeSettings`
- Manages cart and notification panel visibility
- Values exposed through React's Context API to any component in the tree

### `Sidebar.jsx` / `Navbar.jsx` / `Header.jsx`

- `Sidebar` renders the collapsible navigation linking to every page in `Pages/`
- `Navbar` stays fixed to the top of the viewport
- `Header` houses the search bar, cart icon, notification bell, and user profile trigger

### Chart Pages (`Pages/charts/*.jsx`)

- Each chart type (`Area`, `Bar`, `Line`, `Pie`, `Pyramid`, `Stacked`, `Financial`, `ColorMapping`) is its own page/route
- Shared chart components in `Components/Charts/` are reused where the same visualization appears in multiple places (e.g. dashboard overview + dedicated chart page)

### `Calendar.jsx`

- Wraps FullCalendar's React component with the `daygrid`, `timegrid`, `list`, and `interaction` plugins enabled for full month/week/day/list views and event interaction

### `Kanban.jsx`

- Uses `@hello-pangea/dnd`'s `DragDropContext`, `Droppable`, and `Draggable` to allow cards to be reordered and moved across status columns

### `Editor.jsx`

- Hosts a rich text editor instance (TinyMCE and/or SunEditor) for in-app content editing

### `Customers.jsx` / `Employee.jsx` / `Orders.jsx`

- Table-based pages listing customer, employee, and order records respectively, using the shared `data/` demo assets for display content

---

## 🗂️ State Management

The application uses **React Context API** for global state — no Redux or external state library is used directly by the app itself.

```
ContextProvider
├── activeMenu       → sidebar collapsed/expanded state
├── currentColor      → active theme/accent color
├── currentMode        → light/dark mode setting
├── themeSettings       → visibility of the ThemeSettings panel
├── isClicked            → tracks which navbar icon panel (cart/notification/profile) is open
└── setIsClicked etc.      → setters exposed alongside each piece of state
```

> Note: `@reduxjs/toolkit` appears in the dependency tree only because Recharts and `@hello-pangea/dnd` use it internally — it is not used directly for app-level state.

---

## 📱 Responsive Design

All pages and components are built mobile-first with Tailwind CSS and adapt across:

| Breakpoint        | Target                 |
| ----------------- | ---------------------- |
| `1280px+`         | Desktop                |
| `1024px – 1279px` | Small desktop / laptop |
| `768px – 1023px`  | Tablet                 |
| `480px – 767px`   | Large phone            |
| `< 480px`         | Small phone            |

Key responsive techniques used:

- Tailwind's responsive utility variants (`sm:`, `md:`, `lg:`, `xl:`) across all layouts
- A collapsible sidebar that overlays on smaller screens instead of pushing content
- Chart containers sized with relative units so ApexCharts/Recharts resize fluidly
- Data tables that reflow for smaller viewports

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** ≥ 20.19 (required by React Router DOM 7 and Vite 8)
- **npm** v9 or above

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Yashtagad12/Shopzz-Cart.git

# 2. Navigate into the project directory
cd mega-dashboard

# 3. Install all dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📜 Available Scripts

| Script            | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the Vite development server    |
| `npm run build`   | Builds the app for production         |
| `npm run preview` | Previews the production build locally |
| `npm run lint`    | Runs ESLint for code quality checks   |

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "@floating-ui/react": "^0.27.19",
    "@fullcalendar/daygrid": "^6.1.21",
    "@fullcalendar/interaction": "^6.1.21",
    "@fullcalendar/list": "^6.1.21",
    "@fullcalendar/react": "^6.1.21",
    "@fullcalendar/timegrid": "^6.1.21",
    "@hello-pangea/dnd": "^18.0.1",
    "@tailwindcss/vite": "^4.3.1",
    "@tinymce/tinymce-react": "^6.3.0",
    "apexcharts": "^5.16.0",
    "react": "^19.2.6",
    "react-apexcharts": "^2.1.1",
    "react-dom": "^19.2.6",
    "react-icons": "^5.6.0",
    "react-router-dom": "^7.18.0",
    "react-sparklines": "^1.7.0",
    "recharts": "^3.9.1",
    "suneditor-react": "^3.6.1"
  },
  "devDependencies": {
    "@babel/core": "^7.29.0",
    "@eslint/js": "^10.0.1",
    "@rolldown/plugin-babel": "^0.2.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "babel-plugin-react-compiler": "^1.0.0",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "postcss": "^8.5.15",
    "tailwindcss": "^4.3.1",
    "vite": "^8.0.12"
  }
}
```

---

## 🛤️ Development Journey

This project was developed iteratively, with each feature building on the previous:

1. **Project Setup** — Initialized with Vite + React 19, configured Tailwind CSS 4 and React Router DOM 7
2. **Dashboard Shell** — Built `Navbar`, `Sidebar`, `Header`, and `Footer` to form the persistent layout
3. **Context API** — Implemented `ContextProvider` for sidebar, theme, and panel visibility state shared across the app
4. **Ecommerce Overview** — Built the dashboard home page combining stats and charts
5. **Charts** — Added dedicated pages for Area, Bar, Line, Pie, Pyramid, Stacked, Financial, and Color Mapping charts using ApexCharts and Recharts
6. **Calendar** — Integrated FullCalendar with day grid, time grid, list, and interaction plugins
7. **Kanban Board** — Implemented drag-and-drop task management with `@hello-pangea/dnd`
8. **Editor** — Added rich text editing via TinyMCE/SunEditor
9. **Data Tables** — Built Customers, Employees, and Orders pages
10. **Theme Settings** — Added the customization panel for dashboard appearance
11. **Responsive Polish** — Applied Tailwind's responsive utilities across all pages and the sidebar/navbar

---

## 🔮 Future Enhancements

- [ ] Authentication & role-based access
- [ ] Backend/API integration
- [ ] Persistent data storage
- [ ] Dark / light theme toggle
- [ ] Search & filtering across data tables
- [ ] Export reports (PDF/Excel)
- [ ] Real-time notifications

---

## 🙌 Acknowledgements

- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Charting powered by [ApexCharts](https://apexcharts.com/) and [Recharts](https://recharts.org/)
- Calendar powered by [FullCalendar](https://fullcalendar.io/)
- Built and developed as a practice project to explore React 19, Vite 8, and Tailwind CSS 4

---

## 📃 License

This project is open source and available under the MIT License.

---

**Built with Conceptualization and for learning purpose using React JS**

_🛒 Shopzz Cart Dashboard — Practice project exploring modern dashboard UI patterns_
