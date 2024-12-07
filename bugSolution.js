```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  //This will ensure the component re-renders everytime location changes.
  //Add a key prop to Home component as well to force remounting.
  return (
    <div key={location.pathname}>
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}
```