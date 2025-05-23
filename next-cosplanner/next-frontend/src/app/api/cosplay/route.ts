import { BACKEND_AT } from "@/env";
import type Cosplay from "@/type-definitions/Cosplay";

export async function GET(){
    const query = `query {cosplays {id, name, description}}`;
    const r = await fetch(BACKEND_AT +'/graph', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query})
    });
    const j = await r.json() as {data: {cosplays: Cosplay[]}};
    return Response.json(j.data.cosplays);
}