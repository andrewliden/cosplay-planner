export enum ActionStateStatus {
    Uninitialized,
    Success,
    Error
}

export default interface FormActionState<T, R> {
    status: FormStatus,
    errors: T,
    data?: R
}