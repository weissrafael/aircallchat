import { useEffect, useState } from 'react';

import { useFetchContacts } from 'API/Queries/contact';
import { ContactResource } from 'Models/ContactResource';

const useGetContacts = () => {
  const { data, isLoading, isError } = useFetchContacts();

  const [formattedData, setFormattedData] = useState<ContactResource[]>([]);

  function compareNames(a: ContactResource, b: ContactResource) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    if (data) {
      const newData = [...data];
      newData.sort(compareNames);
      setFormattedData(newData);
    }
  }, [data]);

  return {
    isLoading,
    isError,
    data: formattedData,
  };
};

export default { useGetContacts };
