import { Injectable } from '@nestjs/common';
import { Job, JobStatus } from '../entities/job.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  // Implementation for job service
  async createJob(jobName: string, payload: Record<string, any>): Promise<Job> {
    const job = this.jobRepository.create({
      jobName,
      payload,
      status: JobStatus.PENDING,
      attempts: 0,
      maxAttempts: 3,
    });
    return await this.jobRepository.save(job);
  }
}
