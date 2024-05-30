import BatchAPI from '@/services/Batch';
import { IStatusResponse } from '@/services/Batch/type';
import { getErrorMessage } from '@/utils/error';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
  fetchNow?: boolean;
};

export const useBatchStatus = (props: Props) => {
  const { fetchNow = false } = props;
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<IStatusResponse | undefined>(undefined);

  const fetchBatchStatus = async () => {
    try {
      setLoading(true);
      const data = await BatchAPI.getBatchStatus();
      setData(data);
    } catch (error) {
      const { message } = getErrorMessage(error);
      toast.error(message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fetchNow) {
      fetchBatchStatus();
    }
  }, []);

  return {
    isLoading,
    error,
    data,
    fetchBatchStatus,
  };
};
