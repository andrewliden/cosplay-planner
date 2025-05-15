import { BACKEND_AT } from "@/env";
import type Cosplay from "@/type-definitions/Cosplay";

export async function GET(_req: Request, {params}: {params: Promise<{id: string}>}){
    const variables = await params;
    const query = `query GetCosplay($id: String!) {
        cosplayById(id: $id) {id, name, description}
    }`;
    const r = await fetch(BACKEND_AT +'/graph', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query, variables})
    });
    const j = await r.json() as {data: {cosplayById: Cosplay}};
    return Response.json(j.data.cosplayById);
}