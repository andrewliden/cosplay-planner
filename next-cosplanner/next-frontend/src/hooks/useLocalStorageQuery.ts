'use client'
import { useState, useEffect } from "react";

const getStatusName = (status: number) => {
    switch(status) {
        case 0: return 'uninitialized';
        case 1: return 'loading';
        case 2: return 'success';
        case 3: return 'error';
        default: return 'unexpected-status'
    }
};

const getStatusObject = (status: number) => ({
    statusName: getStatusName(status),
    isUninitialized: status === 0,
    isLoading: status === 1 || status === 0,
    isSuccess: status === 2,
    isError: status === 3
});

export default function useLocalStorageQuery<T=unknown>(key: string, validator: (data: unknown) => data is T, defaultValue: T) {
    const [status, setStatus] = useState(0);
    const [data, setData] = useState<T|null>(null);
    const [errorData, setErrorData] = useState<unknown|null>(null);
    useEffect(() => {
        setStatus(1);
        if(typeof window !== 'undefined') {
            const loadedData = window.localStorage.getItem(key);
            if(loadedData === null) {
                setStatus(2);
                setData(defaultValue);
                setErrorData(null);
            } else {
                try {
                    const parsedData = JSON.parse(loadedData) as unknown;
                    if(validator(parsedData)) {
                        setStatus(2);
                        setData(parsedData);
                        setErrorData(null);
                    } else {
                        setStatus(3);
                        setData(null);
                        setErrorData(new Error('Invalid data'));
                    }
                } catch(e) {
                    setStatus(3);
                    setData(null);
                    setErrorData(e);
                }
            }
        }
    }, [key, validator]);

    return {
        status,
        ...getStatusObject(status),
        data,
        errorData
    }
}