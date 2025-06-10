'use server'
import type Cosplay from "@/type-definitions/Cosplay";
import { HOSTED_AT } from "@/env";
import ContentBox from "@/components/ContentBox";
import CreateNewCosplay from "@/components/CreateNewCosplay";

function ListCosplay({data}: {data: Cosplay}) {
    return (
        <a href={`/cosplays/${data.id}/`}>
            <div className='bg-gray-800 p-2 w-56 rounded-lg'>
                <h2 className='text-xl'>{data.name}</h2>
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
            <div className='flex gap-2 my-2 flex-wrap'>
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
            <CreateNewCosplay />
        </ContentBox>
    );
}