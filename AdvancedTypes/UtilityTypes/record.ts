type Status = 'pending' | 'completed' | 'failed';
type StatusMapping = Record<Status, string>;

const taskStatus: StatusMapping = {
  pending: 'Waiting to start',
  completed: 'Finished successfully',
  failed: 'Something went wrong',
};
console.log(taskStatus);