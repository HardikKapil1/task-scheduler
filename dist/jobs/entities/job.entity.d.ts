export declare enum JobStatus {
    PENDING = "PENDING",
    RUNNING = "RUNNING",
    SUCCEEDED = "SUCCEEDED",
    FAILED = "FAILED",
    DEAD = "DEAD"
}
export declare class Job {
    id: string;
    jobName: string;
    payload: Record<string, any>;
    status: JobStatus;
    attempts: number;
    maxAttempts: number;
    availableAt: Date;
    lockedAt: Date | null;
    lockedBy: string | null;
    lastError: string | null;
    createdAt: Date;
    updatedAt: Date;
}
