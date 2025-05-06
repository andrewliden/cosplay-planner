import type Cosplay from "@/type-definitions/Cosplay";
import { HOSTED_AT } from "@/env";
import ContentBox from "@/components/ContentBox";
import CreateNewCosplay from "@/components/CreateNewCosplay";

function ListCosplay({data}: {data: Cosplay}) {
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
}

export default async function CosplaysPage() {
    const req = await fetch(`${HOSTED_AT}/api/cosplay`);
    const j = await req.json() as Cosplay[];
    return (
        <ContentBox label='My cosplays'>
            <CreateNewCosplay />
            <div>
                {j.length === 0 ?
                    <p>It looks like you don&apos;t have any cosplays yet.</p>
                    :
                    j.map(cosplay => 
                        <ListCosplay
                            data={cosplay}
                            key={cosplay.id}
                        />
                    )
                }
            </div>
        </ContentBox>
    );
}