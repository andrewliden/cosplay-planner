'use client'
import {useState} from 'react';
import createCosplay from '@/app/actions/createCosplay';

export default function CreateNewCosplay(){
    const [isCreating, setIsCreating] = useState(false);
    if(isCreating) {
        return (
            <form
                className='rounded-lg bg-gray-800 p-2'
                action={createCosplay}
            >
                <h2 className='text-xl'>
                    Create a new cosplay
                </h2>
                <div className='flex gap-2'>
                    <label className='flex flex-col'>
                        Name
                        <input
                            required
                            name='name'
                        />
                    </label>
                    <label className='flex flex-col'>
                        Description
                        <textarea
                            required
                            name='description'
                        />
                    </label>
                    <label className='flex flex-col'>
                        Reference image
                        <input
                            type='url'
                            name='referenceImage'
                        />
                    </label>
                </div>
                <div className='flex justify-end gap-2'>
                    <button
                        className='rounded-lg p-2 bg-secondary-500 hover:bg-secondary-400 text-white'
                        onClick={() => {setIsCreating(false);}}
                    >
                        Cancel
                    </button>
                    <button
                        className='rounded-lg p-2 bg-primary-500 hover:bg-primary-400 text-white'
                        type='submit'
                    >
                        Create
                    </button>
                </div>
            </form>
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