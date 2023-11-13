export const fetchUserData = async (username) => {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: 'kminchelle',
            password: '0lelplR',
            expiresInMins: 30, // optional
        })
    });
    
    return await response.json();
}
