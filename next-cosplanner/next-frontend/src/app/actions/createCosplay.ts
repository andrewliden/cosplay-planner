'use server'
import { BACKEND_AT } from "@/env";
import type CosplayFormErrors from "@/type-definitions/CosplayFormErrors";
import type FormActionState from "@/type-definitions/FormActionState";
import type Cosplay from "@/type-definitions/Cosplay";
import { z } from "zod/v4";

const query = `
    mutation CreateNew($name: String!, $description: String!) {
        createCosplay(
            name: $name,
            description: $description
        ) { cosplay { id } }
    }
`;

const inputSchema = z.object({
    name: z.string('Name must be a string').nonempty('Name is required'),
    description: z.string('Description must be a string').nonempty('Description is required')
});

const outputSchema = z.object({
    data: z.object({
        createCosplay: z.object({
            cosplay: z.object({
                id: z.number()
            })
        })
    })
});

export default async function createCosplay(_: FormActionState<CosplayFormErrors, number>, f: FormData) {
    try {
        const variables = inputSchema.parse({
            name: f.get('name'),
            description: f.get('description')
        });
        const r = await fetch(BACKEND_AT +'/graph', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query, variables})
        });
        
        const j = await r.json() as unknown;
        const output = outputSchema.parse(j);
        
        return {
            errors: {name: null, description: null},
            status: 1,
            data: output.data.createCosplay.cosplay.id
        };
    } catch(e) {
        if(e instanceof z.ZodError) {
            const errors = {name: [], description: []};
            // TODO - figure out the best way to transform ZodError to what I want.
            return {
                errors,
                status: 2
            };
        } else {
            return {
                errors: {name: ['An unexpected error has occurred'], description: null},
                status: 2
            };
        }
    }
}