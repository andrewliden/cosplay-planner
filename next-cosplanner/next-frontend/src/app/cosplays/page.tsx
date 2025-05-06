import type Cosplay from "@/type-definitions/Cosplay";
import { HOSTED_AT } from "@/env";
import PageHeading from "@/components/PageHeading";

export default async function CosplaysPage() {
    const req = await fetch(`${HOSTED_AT}/api/cosplay`);
    const j = await req.json() as Cosplay[];
    return (
        <div>
            <PageHeading>
                Your cosplays
            </PageHeading>
            {j.length === 0 ?
                <p>It looks like you don&apos;t have any cosplays yet.</p>
                :
                j.map(cosplay => 
                    <div key={cosplay.id}>
                        {JSON.stringify(cosplay)}
                    </div>
                )
            }
        </div>
    );
}