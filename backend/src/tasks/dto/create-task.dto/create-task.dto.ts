export class CreateTaskDto {
  title: string;
  description: string;
  dueDate: Date;
  status: string;
  priority: string;
  projectId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
