// Small helpers for login, logout and the greeting.
// Put this file at src/auth/auth.js

// Address of your backend server. Change this when you deploy.
export const API_URL = "http://localhost:5000";

// Save what the server sends back after login: { token, user: { email, role } }
export function saveLogin(data) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
}

export function getToken() {
    return localStorage.getItem("token");
}

export function getUser() {
    const saved = localStorage.getItem("user");
    if (!saved) {
        return null;
    }
    try {
        return JSON.parse(saved);
    } catch (error) {
        return null;
    }
}

export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

// "abhishek.tiwari92@gmail.com" becomes "Abhishek Tiwari"
export function getNameFromEmail(email) {
    if (!email) {
        return "there";
    }

    const beforeAt = email.split("@")[0];           // "abhishek.tiwari92"
    const noNumbers = beforeAt.replace(/[0-9]/g, ""); // "abhishek.tiwari"
    const words = noNumbers.split(/[._-]+/).filter(Boolean); // ["abhishek", "tiwari"]

    if (words.length === 0) {
        return "there";
    }

    const capitalised = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    return capitalised.join(" ");
}

export function getFirstName(email) {
    return getNameFromEmail(email).split(" ")[0];
}

// Good morning, Good afternoon or Good evening
export function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Good morning";
    }
    if (hour < 17) {
        return "Good afternoon";
    }
    return "Good evening";
}