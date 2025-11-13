import { NextRequest, NextResponse } from "next/server";
import { fetchGoogleSuggests, fetchAmazonSuggests, fetchRakutenSuggests, fetchYahooSuggests, getFuncByPlatform } from '@/lib/utils';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get('keyword');
    const platform = searchParams.get('platform');

    if (platform === null) {
        const gRes = await fetchGoogleSuggests(keyword);
        const aRes = await fetchAmazonSuggests(keyword);
        const rRes = await fetchRakutenSuggests(keyword);
        const yRes = await fetchYahooSuggests(keyword);
        const res = {
            google: gRes,
            amazon: aRes,
            rakuten: rRes,
            yahoo: yRes,
        }
        return NextResponse.json(res);
    } else {
        const fetchSuggests = getFuncByPlatform(platform);
        const res = await fetchSuggests(keyword);
        return NextResponse.json(res);
    }

}