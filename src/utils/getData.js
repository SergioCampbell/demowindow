const TEMPAPI = process.env.TEMPAPI;
const API = process.env.API;

const RESULT = API.status === undefined ? TEMPAPI : API;

const fetchApi = async ({data}) => {
    try {
        const response = await fetch(RESULT);
        const data = await response.json();
        console.log('Response: ',data.countries);
        return data.countries;
    } catch (error) {
        console.log('‼️ Error in fetch: ', error)
    }
}

export default fetchApi;