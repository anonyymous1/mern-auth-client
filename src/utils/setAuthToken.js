import axios from 'axios'

// This utlity will add the authorized user's JWT to the request header.
// Any routes that are protected will require JWT to access them.

const setAUthToken = (token) => {
    if (token) {
        // Apply the token to every request header
        axios.defaults.headers.common['Authorization'] = token;
        console.log('---HEADERS---');
        console.log(axios.defaults.headers.common);
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAUthToken;