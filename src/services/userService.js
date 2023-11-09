export const fetchUserToken = async (username) => {
    return await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
        expiresInMins: 30, // optional
        })
    })
    .then(response => response.json());
}
