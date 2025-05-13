'use server'
import { BACKEND_AT } from "@/env";

export default async function createCosplay(f: FormData) {
    const r = await fetch(BACKEND_AT +'/graph', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mutation: `mutation {
                createNew: createCosplay(
                    name: "${f.get('name')}",
                    description: "${f.get('description')}"
                )
            }`
        })
    });
    const j = await r.json();
    console.log(j);
    return j;
}