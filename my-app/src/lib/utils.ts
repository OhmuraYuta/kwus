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

export function fetchRakutenSuggests(keyword: string | null) {
    const params = {
        q: keyword,
        acc: 1,
        aid: 1,
    }
    const url = 'https://rdc-api-catalog-gateway-api.rakuten.co.jp/SUI/autocomplete/pc';

    const sendRequest = async () => {
        const res = await axios.get(url, {params: params});
        let response: string[] = [];
        res.data.suggestions.forEach((suggest: {name: string}) => {
            response.push(suggest.name);
        });
        return response;
    }
    return sendRequest();
}

export function fetchYahooSuggests(keyword: string | null) {
    if (keyword?.trim() === '') {
        return [];
    }
    const params = {
        query: keyword,
        appid: "dj0zaiZpPVkwMDJ1RHlqOEdwdCZzPWNvbnN1bWVyc2VjcmV0Jng9M2Y-",
        n: 10,
    }
    const url = 'https://suggest-shop.yahooapis.jp/Shopping/Suggest/V3/suggester';

    const sendRequest = async () => {
        const res = await axios.get(url, {params: params});
        if (res.data.startsWith('(') && res.data.endsWith(')')) {
            const sliced = res.data.slice(1, -1);
            const json = JSON.parse(sliced);
            return json.Result.keyword;
        }
    }
    return sendRequest();
}
