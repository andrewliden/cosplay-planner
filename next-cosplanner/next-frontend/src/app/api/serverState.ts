import type Cosplay from "@/type-definitions/Cosplay";
import type CosplayPart from "@/type-definitions/CosplayPart";
import type Material from "@/type-definitions/Material";
/**
 * This is a temporary/dev solution.
 * 
 * Obviously mutating server-side state as a storage mechanism has problems. Volatile memory is just that: volatile.
 * 
 * But it makes for a nice way to do development since I don't have to deploy multiple servers to start working on features.
 */

interface ServerState {
    cosplays: Cosplay[],
    cosplayParts: CosplayPart[],
    materials: Material[],
    events: unknown[]
}

const serverState: ServerState = {
    cosplays: [],
    cosplayParts: [],
    materials: [],
    events: []
};

export default serverState;