'use server'
import { BACKEND_AT } from "@/env";

export default async function createCosplay(f: FormData) {
    const query = `
        mutation CreateNew($name: String!, $description: String!) {
            createCosplay(
                name: $name,
                description: $description
            ) { cosplay { id } }
        }
    `;
    const rawVariables = {
        name: f.get('name'),
        description: f.get('description')
    };
    const variables = {
        name: typeof rawVariables.name === 'string' ? rawVariables.name : null,
        description: typeof rawVariables.description === 'string' ? rawVariables.description : null
    };
    
    const r = await fetch(BACKEND_AT +'/graph', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query, variables})
    });
    const j = await r.json();
    console.log(j);
    return j;
}