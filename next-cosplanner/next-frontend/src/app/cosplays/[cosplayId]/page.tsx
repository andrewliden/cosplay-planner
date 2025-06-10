import { HOSTED_AT } from "@/env";
import type Cosplay from "@/type-definitions/Cosplay";
import ContentBox from "@/components/ContentBox";
import { notFound } from "next/navigation";

export default async function CosplayIdPage({params}: {params: Promise<{cosplayId: string}>}){
    const {cosplayId} = await params;
    const req = await fetch(`${HOSTED_AT}/api/cosplay/${cosplayId}`);
    const j = await req.json() as Cosplay|null;

    if(j) {
        return (
            <ContentBox
                action={<button>Edit</button>}
                label={j.name}
            >
                <p>{j.description}</p>
            </ContentBox>
        );
    } else {
        return notFound();
    }
    
}