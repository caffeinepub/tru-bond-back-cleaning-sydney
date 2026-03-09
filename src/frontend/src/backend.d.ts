import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Submission {
    id: SubmissionId;
    serviceType: ServiceType;
    fullName: string;
    email: string;
    message: string;
    address: string;
    timestamp: Time;
    phone: string;
}
export type SubmissionId = bigint;
export enum ServiceType {
    handsOnAssistance = "handsOnAssistance",
    carpetAndFloorCare = "carpetAndFloorCare",
    tileAndGroutClean = "tileAndGroutClean",
    endOfLease = "endOfLease",
    externalCleaning = "externalCleaning",
    furnitureAndMattressClean = "furnitureAndMattressClean",
    pressureCleaning = "pressureCleaning",
    internalCleaning = "internalCleaning"
}
export interface backendInterface {
    addAdminPrincipal(adminPrincipal: Principal): Promise<void>;
    getAllFormSubmissions(): Promise<Array<Submission>>;
    getFormSubmission(id: SubmissionId): Promise<Submission>;
    submitContactForm(fullName: string, email: string, phone: string, address: string, serviceType: ServiceType, message: string): Promise<SubmissionId>;
}
