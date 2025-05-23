'use server'
import type Cosplay from "@/type-definitions/Cosplay";
import { HOSTED_AT } from "@/env";
import ContentBox from "@/components/ContentBox";
import CreateNewCosplay from "@/components/CreateNewCosplay";

function ListCosplay({data}: {data: Cosplay}) {
    return (
        <a href={`/cosplays/${data.id}/`}>
            <div className='bg-gray-800 p-1'>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
            </div>
        </a>
    );
}

export default async function CosplaysPage() {
    const req = await fetch(`${HOSTED_AT}/api/cosplay`);
    const j = await req.json() as Cosplay[];
    return (
        <ContentBox label='My cosplays'>
            <CreateNewCosplay />
            <div className='flex'>
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