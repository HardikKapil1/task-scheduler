import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum JobStatus {
  PENDING = 'PENDING',
  RUNNING = 'RUNNING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  DEAD = 'DEAD',
}

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'job_name' })
  jobName!: string;

  @Column({ type: 'jsonb' })
  payload!: Record<string, any>;

  @Column({
    type: 'enum',
    enum: JobStatus,
    default: JobStatus.PENDING,
  })
  status!: JobStatus;

  @Column({ default: 0 })
  attempts!: number;

  @Column({ name: 'max_attempts', default: 3 })
  maxAttempts!: number;

  // When a retry is scheduled, your retry logic sets this to a future timestamp.
  @Column({
    name: 'available_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  availableAt!: Date;

  // Nullable: only set while a worker holds the job.
  @Column({ name: 'locked_at', type: 'timestamptz', nullable: true })
  lockedAt!: Date | null;

  // Nullable: worker identity string, e.g. worker-hostname-pid-uuid
  @Column({ name: 'locked_by', type: 'varchar', nullable: true })
  lockedBy!: string | null;

  @Column({ name: 'last_error', type: 'text', nullable: true })
  lastError!: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
