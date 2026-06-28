"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = exports.JobStatus = void 0;
const typeorm_1 = require("typeorm");
var JobStatus;
(function (JobStatus) {
    JobStatus["PENDING"] = "PENDING";
    JobStatus["RUNNING"] = "RUNNING";
    JobStatus["SUCCEEDED"] = "SUCCEEDED";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["DEAD"] = "DEAD";
})(JobStatus || (exports.JobStatus = JobStatus = {}));
let Job = class Job {
    id;
    jobName;
    payload;
    status;
    attempts;
    maxAttempts;
    availableAt;
    lockedAt;
    lockedBy;
    lastError;
    createdAt;
    updatedAt;
};
exports.Job = Job;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Job.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'job_name' }),
    __metadata("design:type", String)
], Job.prototype, "jobName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb' }),
    __metadata("design:type", Object)
], Job.prototype, "payload", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: JobStatus,
        default: JobStatus.PENDING,
    }),
    __metadata("design:type", String)
], Job.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Job.prototype, "attempts", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'max_attempts', default: 3 }),
    __metadata("design:type", Number)
], Job.prototype, "maxAttempts", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'available_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Job.prototype, "availableAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'locked_at', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Object)
], Job.prototype, "lockedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'locked_by', type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Job.prototype, "lockedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_error', type: 'text', nullable: true }),
    __metadata("design:type", Object)
], Job.prototype, "lastError", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Job.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Job.prototype, "updatedAt", void 0);
exports.Job = Job = __decorate([
    (0, typeorm_1.Entity)('jobs')
], Job);
//# sourceMappingURL=job.entity.js.map