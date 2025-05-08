'use client'
import {useState} from 'react';

export default function CreateNewCosplay(){
    const [isCreating, setIsCreating] = useState(false);
    if(isCreating) {
        return (
            <form className='rounded-lg bg-gray-800 p-2'>
                <h2 className='text-xl'>
                    Create a new cosplay
                </h2>
                <div className='flex justify-end gap-2'>
                    <button
                        className='rounded-lg p-2 bg-gray-500 hover:bg-gray-400 text-white'
                        onClick={() => {setIsCreating(false);}}
                    >
                        Cancel
                    </button>
                    <button
                        className='rounded-lg p-2 bg-blue-500 hover:bg-blue-400 text-white'
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
                className='rounded-lg p-2 bg-blue-500 hover:bg-blue-400 text-white'
                onClick={() => {setIsCreating(true);}}
            >
                Create a new cosplay
            </button>
        );
    }
}