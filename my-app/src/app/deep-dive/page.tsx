'use client';
import Link from "next/link";

import DeepDivePlatformSelector, {Platform} from "@/components/DeepDivePlatformSelector";
import { useState } from "react";

export default function DeepDivePage() {
    const [platform, setPlatform] = useState<Platform>('google');
    return (
        <div>
            <h1>深堀り</h1>
            <Link href="/">トップへ</Link>
            <DeepDivePlatformSelector
                platform={platform}
                setPlatform={setPlatform}
            />
            <p>選択 {platform}</p>
        </div>
    )
};