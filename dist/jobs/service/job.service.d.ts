import { Job } from '../entities/job.entity';
import { Repository } from 'typeorm';
export declare class JobService {
    private jobRepository;
    constructor(jobRepository: Repository<Job>);
    createJob(jobName: string, payload: Record<string, any>): Promise<Job>;
}
