'use server'
import { redirect } from "next/navigation";
import { BACKEND_AT } from "@/env";
import type CosplayFormErrors from "@/type-definitions/CosplayFormErrors";
import type FormActionState from "@/type-definitions/FormActionState";
import type Cosplay from "@/type-definitions/Cosplay";

const query = `
    mutation CreateNew($name: String!, $description: String!) {
        createCosplay(
            name: $name,
            description: $description
        ) { cosplay { id } }
    }
`;

const validateName = (name: unknown) => typeof name === 'string' ? (name ? null : 'Name is required') : 'Name is an unexpected data type';
const validateDescription = (description: unknown) => typeof description === 'string' ? (description ? null : 'Description is required') : 'Description is an unexpected data type';

const validateVariables = (variables: {name: unknown, description: unknown}) => ({
    name: validateName(variables.name),
    description: validateDescription(variables.description)
});

export default async function createCosplay(_: FormActionState<CosplayFormErrors, Cosplay>, f: FormData) {
    const variables = {
        name: f.get('name'),
        description: f.get('description')
    };

    const errors = validateVariables(variables);
    if(errors.name === null && errors.description === null) {
        const r = await fetch(BACKEND_AT +'/graph', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query, variables})
        });
        
        const j = await r.json() as Cosplay;
        
        return {
            errors,
            status: 1,
            data: j
        };
    } else {
        return {
            errors,
            status: 2
        };
    }
}