# Legal Document Search - Client

This is the **frontend** for the Legal Document Search application. It provides a responsive, minimalist interface for querying mock legal documents from the backend API.

---

## Tech Stack

* **React 18** (via Vite)
* **TailwindCSS** for styling
* **Vanilla JavaScript / JSX**
* No UI frameworks (e.g., DaisyUI) used
* Responsive, clean, and modern design

---

## Folder Structure

```
legal-search-client
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── component/
    │   │   ├── ErrorUI.jsx
    │   │   ├── Loader.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── ResultDetails.jsx
    │   │   ├── ResultList.jsx
    │   │   └── SearchBox.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── run_frontend.bat
    └── vite.config.js

```

---

## Setup & Run 

The included `run_frontend.bat` script automates the entire setup and launch process.
```
# Run the script
run_frontend.sh
```

---

## API Connection

The frontend expects the backend FastAPI server to be running locally at:

```
http://127.0.0.1:8000/generate
```

Make sure the backend is running to fetch mock legal documents.

---

## Usage

1. Type your query (e.g., “Lease”, “NDA”, or “Will”) in the search box.
2. Click **Search**.
3. The app displays a summary and the corresponding mock document content.
4. Loading and error states are handled gracefully.

---

## Notes

* The frontend is designed to be **lightweight, responsive, and modular**.
* Components are separated into `SearchBox`, `Loader`, and `ResultList` for maintainability.
* Styling is done entirely with **TailwindCSS**, without additional UI frameworks.

---

## Future Enhancements

* Add glassmorphic cards or subtle gradient effects for premium aesthetics.
* Implement a keyword-based search or AI-based ranking for smarter results.
* Add history of queries and favorites.

---

## License

MIT License
