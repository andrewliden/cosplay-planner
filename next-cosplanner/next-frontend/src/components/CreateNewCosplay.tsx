'use client'
import {useState, useActionState} from 'react';
import type {Dispatch, SetStateAction} from 'react';
import Input from './Input';
import createCosplay from '@/app/actions/createCosplay';
import Textarea from './Textarea';
import type FormActionState from '@/type-definitions/FormActionState';
import SubmitButton from './SubmitButton';
import type CosplayFormErrors from '@/type-definitions/CosplayFormErrors';
import type Cosplay from '@/type-definitions/Cosplay';
import FormFeedback from './FormFeedback';

const initialState: FormActionState<CosplayFormErrors, number> = {
    status: 0,
    errors: {
        name: null,
        description: null
    }
};

function CreateCosplayForm({setIsCreating}: {setIsCreating: Dispatch<SetStateAction<boolean>>}) {
    const [state, action, isPending] = useActionState(createCosplay, initialState);
    
    return (
        <form
            noValidate
            className='rounded-lg bg-gray-800 p-2 my-2'
            action={action}
        >
            <h2 className='text-xl'>
                Create a new cosplay
            </h2>
            <div className='flex gap-2'>
                <label className='flex flex-col'>
                    Name
                    <Input
                        required
                        name='name'
                    />
                    <FormFeedback errorData={state.errors.name} />
                </label>
                <label className='flex flex-col'>
                    Description
                    <Textarea
                        required
                        name='description'
                    />
                    <FormFeedback errorData={state.errors.description} />
                </label>
            </div>
            <div className='flex justify-end gap-2'>
                <button
                    className='rounded-lg p-2 bg-secondary-500 hover:bg-secondary-400 text-white'
                    onClick={() => {setIsCreating(false);}}
                >
                    Cancel
                </button>
                <SubmitButton
                    status={state.status}
                    isPending={isPending}
                >
                    Create
                </SubmitButton>
            </div>
        </form>
    )
}

export default function CreateNewCosplay(){
    const [isCreating, setIsCreating] = useState(false);
    if(isCreating) {
        return (
            <CreateCosplayForm setIsCreating={setIsCreating} />
        )
    } else {
        return (
            <button
                className='rounded-lg p-2 bg-primary-500 hover:bg-primary-400 text-white'
                onClick={() => {setIsCreating(true);}}
            >
                Create a new cosplay
            </button>
        );
    }
}