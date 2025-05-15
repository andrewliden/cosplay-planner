import { HOSTED_AT } from "@/env";
import type Cosplay from "@/type-definitions/Cosplay";

export default async function CosplayIdPage({params}: {params: Promise<{cosplayId: string}>}){
    const {cosplayId} = await params;
    const req = await fetch(`${HOSTED_AT}/api/cosplay/${cosplayId}`);
    const j = await req.json() as Cosplay|null;
    return (
        JSON.stringify(j)
    );
}