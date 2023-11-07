// import { useLocalStorage } from "../hooks/useLocalStorage";

export const fetchUserToken = async (username) => {
    // const [user, setUser] = useLocalStorage("user", userData);

    await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
        expiresInMins: 30, // optional
        })
    })
    .then(response => response.json())
    // .then(console.log)
    .then((userData) => {
        console.log(userData);
        setUser(userData);
        navigate("/portal/dashboard", { replace: true });
    });
}
