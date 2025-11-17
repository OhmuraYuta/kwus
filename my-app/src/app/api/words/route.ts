import { NextRequest, NextResponse } from "next/server";

export type Words = {
  [key: string]: number;
}

function count(word_list: string[]) {
  const wordCounts: Words = {};
  for (const word of word_list) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }
  const sortedEntries = Object.entries(wordCounts)
    .sort((a, b) => {
      return b[1] - a[1];
    });
  return sortedEntries;
}

async function wordsFromRakuten(keyword:string) {
  const url = `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&keyword=${encodeURIComponent(keyword)}&applicationId=${process.env.RAKUTEN_APPLICATION_ID}`;
  const res = await fetch(url);
  const data = await res.json();

  const items = data.Items;

  let word_list: string[] = [];
  for (let item of items) {
    item = item.Item;
    const catchcopy = item.catchcopy;
    const itemName = item.itemName;
    const splitedCatchcopy = catchcopy.split(' ');
    const splitedItemName = itemName.split(' ');
    word_list = [...word_list, ...splitedCatchcopy, ...splitedItemName];
  }
  return count(word_list);
}

async function wordsFromYahoo(keyword: string) {
  const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${process.env.YAHOO_APPLICATION_ID}&query=${encodeURIComponent(keyword)}`;
  const res = await fetch(url);
  const data = await res.json();
  const items = data.hits;
  let word_list: string[] = [];
  for (const item of items) {
    const name = item.name;
    const description = item.description;
    const splitedName = name ? name.split(' ') : [];
    const splitedDescription = description? description.split(' ') : [];
    word_list = [...word_list, ...splitedName, ...splitedDescription];
  }
  return count(word_list);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const platform = searchParams.get('platform');
  const keyword = searchParams.get('keyword');

  if (keyword === null) {
    return;
  }

  if (platform === 'rakuten') {
    try {
      const res = await wordsFromRakuten(keyword);
      return NextResponse.json(res);
    } catch (error) {
      return NextResponse.json([]);
    }
  } else {
    try {
      const res = await wordsFromYahoo(keyword);
      return NextResponse.json(res);
    } catch (e) {
      console.log(e)
      return NextResponse.json([]);
    }
  }
}
