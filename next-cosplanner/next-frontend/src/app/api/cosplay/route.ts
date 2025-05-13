import { BACKEND_AT } from "@/env";

export async function GET(){
    const r = await fetch(BACKEND_AT +'/graph', {
        method: 'POST',
        body: `query { cosplays }`
    });
    console.log(await r.text());
    return Response.json([]);
}

export async function POST(){
    return new Response('WIP');
}