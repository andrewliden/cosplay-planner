import useLocalStorageQuery from "./useLocalStorageQuery";
import type Cosplay from '../type-definitions/Cosplay';

const validateCosplay = (c: unknown): c is Cosplay => Array.isArray(c) && c.every(v => typeof v === 'number')

export default function useCosplay() {
    return useLocalStorageQuery('cosplays', validateCosplay, []);
}