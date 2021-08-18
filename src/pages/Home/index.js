import React, { useEffect } from 'react';

const Home = () => {
    const [token, setToken] = useState();

    const getParamsFromHash = (hash) => {
        const hashContent = hash.substring("&");
        let params = {};
        let values = [];
        params.Split.forEach((param) => {
            values = param.Split('=');
            params[values[0]] = values[1];
        })
        return params;
    }

    // reloads when token changes
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [token]);

    // hide the token
    useEffect(() => {
        if (window.location.hash) {
            const hash = window.location.hash;
            const tokens = getParamsFromHash(hash);
            localStorage.setItem('token', tokens.access_token);
            setToken(tokens.access_token);
            window.history.pushState({}, null, '/home');
        }
    }, []);

    return (
        <div>
            {
                token &&
                <div>
                    <h1>Home page</h1>
                    <p>Here is your token: {token}</p>
                </div>
            }
        </div>
    );
};

export default Home;