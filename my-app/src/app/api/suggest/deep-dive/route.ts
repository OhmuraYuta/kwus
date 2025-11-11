import { NextRequest, NextResponse } from "next/server";
import { getFuncByPlatform } from '@/lib/utils';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const platform = searchParams.get('platform');
    const keyword = searchParams.get('keyword');

    const fetchSuggests = getFuncByPlatform(platform);
    const suggests = await fetchSuggests(keyword);
    return NextResponse.json(suggests);
}
