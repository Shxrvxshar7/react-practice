# react-practice

A hands-on React learning journey — rebuilding a vanilla JS project step by step into a full React app.

---

## What this is

This repo tracks my learning path from raw HTML/CSS/JS into React. The idea is simple: I already built something working in vanilla JS, so instead of doing random tutorials, I'm rebuilding the same project in React — concept by concept — so I can see exactly what React does differently and why.

Every commit = one new thing learned.

---


### Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Tech stack

| Layer | Vanilla version | React version |
|---|---|---|
| Markup | HTML | JSX |
| Styling | Plain CSS | Plain CSS (same file) |
| Logic | main.js | React components |
| State | DOM manipulation | useState |
| Build tool | None | Vite |

---

## What I've built so far (Vanilla JS version)

A simple **User Form App** using only HTML, CSS, and JavaScript. No frameworks, no backend.

**Features:**
- A form with Name and Email fields
- Client-side validation — shows a styled error message if fields are empty
- On valid submit, adds the user as a list item in the DOM
- Error message auto-disappears after 3 seconds
- Button text and color change on submission
- All data lives temporarily in the DOM (refreshing clears it)

**Concepts used:**
- `querySelector`, `getElementById`, `createElement`, `appendChild`
- `addEventListener` for form submit
- `classList.add` for dynamic styling
- `setTimeout` for timed DOM removal
- Template literals, arrow functions, basic JS OOP (constructor functions, prototype methods, classes)

---

## What I'll be doing next (React rebuild)

Rebuilding the same form app in React, one concept at a time:

1. **Project setup** — Vite + React scaffold, understanding folder structure
2. **JSX basics** — converting the HTML form into a JSX component
3. **useState** — managing name, email, and error state instead of grabbing DOM values
4. **Event handling** — `onChange` and `onSubmit` the React way
5. **Conditional rendering** — showing/hiding the error message based on state
6. **Lists and keys** — rendering the users list from a state array using `.map()`
7. **Component split** — breaking the app into `Form`, `UserList`, and `UserItem` components
8. **useEffect** — replacing `setTimeout` for the error message dismissal
9. **Props** — passing data and callbacks between components

---

## End goal

By the end of this repo, I'll have:
- A fully working React version of the same app
- A solid mental model of React's core concepts (state, props, effects, components)
- A commit history that reads like a learning journal

The app itself is small on purpose — the goal is **understanding React**, not building something complex.

---


## How to run (React version — coming soon)

```bash
npm install
npm run dev
```

---

## Folder structure (planned)

```
react-practice/
├── vanilla/          # Original HTML/CSS/JS version
│   ├── index.html
│   ├── style.css
│   └── main.js
├── src/              # React version
│   ├── components/
│   │   ├── Form.jsx
│   │   ├── UserList.jsx
│   │   └── UserItem.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```