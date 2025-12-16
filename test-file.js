/**
 * Forest Mist Theme Test File
 * This file demonstrates syntax highlighting across different language constructs
 * @author Forest Themes
 * @version 1.0.0
 */

// Import statements
import React, { useState, useEffect } from 'react';
import { fetchUserData, validateEmail } from './utils';

// Constants and variables
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRY_ATTEMPTS = 3;
let currentUser = null;

/**
 * User class demonstrating OOP syntax
 */
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.isActive = true;
    }

    // Method with validation
    updateEmail(newEmail) {
        if (validateEmail(newEmail)) {
            this.email = newEmail;
            return true;
        }
        throw new Error('Invalid email format');
    }

    // Getter method
    get displayName() {
        return `${this.name} (${this.email})`;
    }

    // Static method
    static fromJSON(jsonData) {
        const { name, email, age } = JSON.parse(jsonData);
        return new User(name, email, age);
    }
}

// Async function with error handling
async function loadUserProfile(userId) {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const userData = await response.json();
        currentUser = new User(userData.name, userData.email, userData.age);
        
        console.log('User loaded successfully:', currentUser.displayName);
        return currentUser;
    } catch (error) {
        console.error('Failed to load user:', error.message);
        return null;
    }
}

// React functional component
const UserProfile = ({ userId, onUserLoad }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadUser = async () => {
            setLoading(true);
            setError('');
            
            try {
                const userData = await loadUserProfile(userId);
                if (userData) {
                    setUser(userData);
                    onUserLoad?.(userData);
                } else {
                    setError('User not found');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            loadUser();
        }
    }, [userId, onUserLoad]);

    // Conditional rendering
    if (loading) return <div className="loading">Loading user...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!user) return <div className="empty">No user data</div>;

    return (
        <div className="user-profile">
            <h2>{user.displayName}</h2>
            <p>Age: {user.age}</p>
            <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
        </div>
    );
};

// Array methods and functional programming
const users = [
    { id: 1, name: 'Alice', score: 95 },
    { id: 2, name: 'Bob', score: 87 },
    { id: 3, name: 'Charlie', score: 92 }
];

const topUsers = users
    .filter(user => user.score > 90)
    .map(user => ({ ...user, grade: 'A' }))
    .sort((a, b) => b.score - a.score);

// Regular expressions
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[\d\s\-\(\)]+$/;

// Template literals and string interpolation
const generateWelcomeMessage = (name, score) => {
    return `Welcome ${name}! Your current score is ${score}/100. 
    ${score >= 90 ? 'Excellent work! 🎉' : 'Keep improving! 💪'}`;
};

// Object destructuring and spread operator
const { name: userName, ...userDetails } = users[0];
const updatedUser = { ...userDetails, lastLogin: new Date() };

// Switch statement
function getUserBadge(score) {
    switch (true) {
        case score >= 95:
            return '🏆 Gold';
        case score >= 85:
            return '🥈 Silver';
        case score >= 75:
            return '🥉 Bronze';
        default:
            return '📝 Beginner';
    }
}

// Export statements
export { User, UserProfile, loadUserProfile };
export default generateWelcomeMessage;

/* 
TODO: Add more test cases
FIXME: Handle edge cases in email validation
NOTE: This file is for theme testing purposes only
*/
