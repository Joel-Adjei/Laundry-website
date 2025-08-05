import React, {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
    const [isLogin, setIsLogin] = useState(true);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');

    // Function to handle successful authentication
    const handleAuthSuccess = (newToken, newUser) => {
        setToken(newToken);
        setUser(newUser);
        setMessage(`Welcome, ${newUser.username}!`);
    };

    const handleLogout =() => {
        setToken(null);
        setUser(null);
        setMessage('');
    }

    // Function to switch between login and registration views
    const toggleView = () => {
        setIsLogin(!isLogin);
        setMessage(''); // Clear message when switching forms
    };

    return(
        <AuthContext.Provider value={{
            isLogin,
            token,
            message,
            user,
            setMessage,
            handleAuthSuccess,
            handleLogout,
            toggleView
        }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=> useContext(AuthContext)