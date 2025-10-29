import axios from "axios";
import iconv from "iconv-lite";

export function fetchGoogleSuggests(keyword: string | null) {
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
        return suggestions;
    }

    return sendRequest();
}

export function fetchAmazonSuggests(keyword: string | null) {
    const params = {
        prefix: keyword,
        alias: 'aps',
        version: 3,
        lop: 'ja_JP',
        fb: 1,
        'plain-mid': 6,
        'client-info': 'serch-ui',
        ni: 1,
    }

    const url = 'https://completion.amazon.co.jp/api/2017/suggestions';

    const sendRequest = async () => {
        const res = await axios.get(url, {params: params});
        
        const suggestions = res.data.suggestions;
        let results: string[] = [];
        suggestions.forEach((suggestion: {value: string}) => {
            results.push(suggestion.value);
        });
        return results;
    }

    return sendRequest();
}