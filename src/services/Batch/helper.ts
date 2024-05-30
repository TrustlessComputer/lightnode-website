import { BatchStatusEnum, IBatch } from '@/stores/states/batch/types';

export const BatchWrapper = (item: IBatch, status: BatchStatusEnum): IBatch => {
  return {
    ...item,
    batch_status: status || BatchStatusEnum.PENDING,
  };
};
