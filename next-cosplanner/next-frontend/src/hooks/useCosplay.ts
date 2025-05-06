import useLocalStorageQuery from "./useLocalStorageQuery";

interface Cosplay {

}

const validateCosplay = (c: unknown): c is Cosplay => Array.isArray(c) && c.every(v => typeof v === 'number')

export default function useCosplay() {
    return useLocalStorageQuery('cosplays', validateCosplay, []);
}