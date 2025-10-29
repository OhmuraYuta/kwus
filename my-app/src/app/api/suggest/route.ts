import { NextRequest, NextResponse } from "next/server";
import { fetchGoogleSuggests, fetchAmazonSuggests, fetchRakutenSuggests, fetchYahooSuggests } from '@/lib/utils';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get('keyword');

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
}