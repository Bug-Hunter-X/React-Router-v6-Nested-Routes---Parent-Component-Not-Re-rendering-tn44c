# React Router v6 Nested Routes Re-rendering Issue

This repository demonstrates a common issue encountered when using nested routes in React Router v6.  The problem arises when navigating from a nested route back to its parent route; the parent component fails to re-render, resulting in stale data display. This is because React's component lifecycle isn't triggering a remount of the parent component.  This often leads to unexpected behavior and data inconsistencies in applications.

The `bug.js` file showcases the problematic behavior, while `bugSolution.js` provides a solution using techniques such as keys or using `useLocation` hook to force a re-render.  This example helps illustrate the issue and provides a practical way to resolve it. 