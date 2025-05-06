import serverState from "../serverState";

export async function GET(){
    const {cosplays} = serverState;
    return Response.json(cosplays);
}

export async function POST(){
    return new Response('WIP');
}