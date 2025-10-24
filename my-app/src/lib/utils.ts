import axios from "axios";
import iconv from "iconv-lite";

export function fetchGoogleSuggests(keyword) {
    const params = {
        client: 'chrome',
        hl: 'ja',
        gl: 'JP',
        q: keyword,
    }

    const url = 'https://suggestqueries.google.com/complete/search';

    const sendRequest = async () => {
        const res = await axios.get(url, {
            params: params,
            responseType: 'arraybuffer'
        });
        const decodedData = iconv.decode(res.data, 'Shift_JIS');
        const parsedData = JSON.parse(decodedData);
        const suggestions = parsedData[1];
    }

    return sendRequest();
}