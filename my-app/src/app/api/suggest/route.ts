import { NextRequest, NextResponse } from "next/server";
import { fetchGoogleSuggests, fetchAmazonSuggests } from '@/lib/utils';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get('keyword');

    const gRes = await fetchGoogleSuggests(keyword);
    const aRes = await fetchAmazonSuggests(keyword);
    const res = {
        google: gRes,
        amazon: aRes,
    }
    return NextResponse.json(res);
}