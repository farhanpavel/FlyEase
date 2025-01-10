# FlyEase

> Created by Farhan Pavel
> 
> Flyease is a user-friendly Flight Management System designed to simplify flight operations and enhance user experience. It offers seamless user authentication, easy flight search, filtering, and management features. With a focus on efficiency and responsiveness, Flyease ensures smooth navigation and a streamlined approach to handling flight details and bookings.

![image](https://github.com/user-attachments/assets/b8db7b11-59bf-42ae-a944-cff48fd47544)




## 🚀 Features

#### User Authentication

-  Once a user logs in, they cannot access the sign-in page without first logging out, ensuring secure session management.


#### Search by Flight Number

-  Users can search for flights by entering the flight number to quickly find specific flights.

#### Filter by Origin and Destination

-  Users can filter flights by specifying both the origin and destination (origin-destination), streamlining the search process.


#### Create New Flight

-  Users can create a new flight by providing essential details such as flight number, airline, origin, destination, price, and schedule.

#### View Flight Details

- Users can view detailed information for each flight, including the flight number, airline, schedule, and available seats.

#### Sort Flight Table

-  The flight table can be sorted by key attributes such as flight number, origin, destination, and airline for easy data analysis.


## 📁 Project Structure

```
📦 
├─ LICENSE
├─ README.md
└─ client
   ├─ public
   │  ├─ images
   │  │  ├─ Benefit.gif
   │  │  ├─ Hero.gif
   │  │  ├─ logo.png
   │  │  ├─ signin.png
   │  │  └─ signup.png
   │  ├─ next.svg
   │  └─ vercel.svg
   ├─ src
   │  ├─ app
   │  │  ├─ (flight)
   │  │  │  └─ flightdashboard
   │  │  │     ├─ entry
   │  │  │     │  ├─ layout.tsx
   │  │  │     │  ├─ page.tsx
   │  │  │     │  └─ schedule
   │  │  │     │     ├─ _datatable
   │  │  │     │     │  ├─ action.tsx
   │  │  │     │     │  └─ data.tsx
   │  │  │     │     ├─ details
   │  │  │     │     │  └─ page.tsx
   │  │  │     │     ├─ new
   │  │  │     │     │  └─ page.tsx
   │  │  │     │     └─ page.tsx
   │  │  │     └─ layout.tsx
   │  │  ├─ _home
   │  │  │  ├─ Benefit.tsx
   │  │  │  ├─ Bottom.tsx
   │  │  │  ├─ Feature.tsx
   │  │  │  └─ Hero.tsx
   │  │  ├─ favicon.ico
   │  │  ├─ globals.css
   │  │  ├─ layout.tsx
   │  │  ├─ page.tsx
   │  │  ├─ signin
   │  │  │  └─ page.tsx
   │  │  └─ signup
   │  │     └─ page.tsx
   │  ├─ components
   │  │  ├─ Flightpanel
   │  │  │  └─ page.tsx
   │  │  ├─ Flightsidebar
   │  │  │  └─ page.tsx
   │  │  ├─ Footer
   │  │  │  └─ page.tsx
   │  │  ├─ Header
   │  │  │  └─ page.tsx
   │  │  ├─ Loader
   │  │  │  └─ page.tsx
   │  │  ├─ Spinner
   │  │  │  └─ page.tsx
   │  │  └─ ui
   │  │     ├─ button.tsx
   │  │     ├─ card.tsx
   │  │     ├─ checkbox.tsx
   │  │     ├─ dialog.tsx
   │  │     ├─ dropdown-menu.tsx
   │  │     ├─ input.tsx
   │  │     ├─ label.tsx
   │  │     ├─ navigation-menu.tsx
   │  │     ├─ scroll-area.tsx
   │  │     ├─ select.tsx
   │  │     ├─ sheet.tsx
   │  │     ├─ table.tsx
   │  │     └─ textarea.tsx
   │  ├─ lib
   │  │  └─ utils.ts
   │  └─ pages
   │     └─ api
   │        ├─ auth
   │        │  ├─ login.ts
   │        │  └─ register.ts
   │        └─ flight
   │           ├─ [id].ts
   │           ├─ create.ts
   │           └─ getAll.ts
   ├─ tailwind.config.ts
   └─ tsconfig.json

```



## 🛠️ Tech Stack

- **Language**: Typescript
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS



## 🚦 Getting Started

1. **Clone the repository**
```bash
git clone [https://github.com/farhanpavel/FlyEase]
```
2. **Go to client folder**
```bash
cd client
```
3. **Install dependencies in client**
```bash
npm install
```
4. **Run the development server in client folder by**
```bash
npm run dev
```
5. **Build for production**
```bash
npm run build
```


## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📜 License

This project is licensed under the MIT License.

---
Created with 💻 by Farhan Pavel
