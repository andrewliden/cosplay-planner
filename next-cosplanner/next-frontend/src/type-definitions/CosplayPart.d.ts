export default interface CosplayPart {
    id: number,
    cosplayId: number,
    name: string,
    description: string,
    referenceImage: string,
    buildSteps: string,
    timeEstimate: number,
    storeLink: string,
    isDone: boolean
}