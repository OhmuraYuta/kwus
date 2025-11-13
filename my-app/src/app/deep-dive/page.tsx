'use client';
import Link from "next/link";
import { useState } from "react";
import DeepDivePlatformSelector, {Platform} from "@/components/DeepDivePlatformSelector";
import DeepDiveSuggests, { Suggests } from "@/components/DeepDiveSuggests";
import DeepDiveKeywordInput from "@/components/DeepDiveKeywordInput";

export default function DeepDivePage() {
    const [platform, setPlatform] = useState<Platform>('google');
    const [suggests, setSuggests] = useState<Suggests[]>([]);
    return (
        <div className="space-y-2">
            <h1>深堀り</h1>
            <Link href="/">トップへ</Link>
            <DeepDivePlatformSelector
                platform={platform}
                setPlatform={setPlatform}
            />
            <DeepDiveKeywordInput
                platform={platform}
                setSuggests={setSuggests}
            />
            <DeepDiveSuggests
                platform={ platform }
                suggests={suggests}
            />
        </div>
    )
};