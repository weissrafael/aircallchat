import { useEffect, useState } from 'react';

import { useFetchMessages } from 'API/Queries/message';
import { MessageResource } from 'Models/MessageResource';

const useGetMessage = (id: number | string) => {
  const { data, isLoading, isError, refetch, isFetching } =
    useFetchMessages(id);

  const [formattedData, setFormattedData] = useState<MessageResource[]>([]);

  function compareDates(a: MessageResource, b: MessageResource) {
    const dateA = new Date(a.sentAt);
    const dateB = new Date(b.sentAt);
    return dateA.getTime() - dateB.getTime();
  }

  useEffect(() => {
    if (data) {
      const newData = [...data];
      newData.sort(compareDates);
      setFormattedData(newData);
    }
  }, [data]);

  return {
    isLoading,
    isError,
    data: formattedData,
    isFetching,
    refetch,
  };
};

export default { useGetMessage };
