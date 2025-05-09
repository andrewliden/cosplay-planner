'use server'
import serverState from "../api/serverState";
import type Cosplay from "@/type-definitions/Cosplay";

const generateId = (c: Cosplay[]) => c.reduce((prev, {id}) => Math.max(prev, id + 1), 1);

function validateCosplay(v: unknown): v is Cosplay {
    if(v && typeof v === 'object') {
        return (
            'id' in v && typeof v.id === 'number' &&
            'name' in v && typeof v.name === 'string' &&
            'description' in v && typeof v.description === 'string' &&
            'referenceImage' in v && (typeof v.referenceImage === 'string' || v.referenceImage === null)
        );
    }
    return false;
}

export default async function createCosplay(f: FormData) {
    const {cosplays} = serverState;
    const maybeCosplay = {
        id: generateId(cosplays),
        name: f.get('name'),
        description: f.get('description'),
        referenceImage: f.get('referenceImage') || null
    };
    if(validateCosplay(maybeCosplay)) {
        cosplays.push(maybeCosplay);
    } else {
        throw new Error('Invalid data');
    }
}