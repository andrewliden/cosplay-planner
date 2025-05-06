import useLocalStorageQuery from "./useLocalStorageQuery";

const validateCosplayList = (l: unknown): l is number[] => Array.isArray(l) && l.every(v => typeof v === 'number')

export default function useCosplayList() {
    return useLocalStorageQuery('cosplays', validateCosplayList, []);
}