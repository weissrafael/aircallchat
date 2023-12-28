import React, { useEffect } from 'react';

import ContactCard from 'Components/ContactCard/ContactCard';
import EmptyState from 'Components/EmptyState/EmptyState';
import ErrorState from 'Components/ErrorState/ErrorState';
import SkeletonFeed from 'Components/SkeletonFeed/SkeletonFeed';
import useContacts from 'Hooks/useContacts';
import { useGroupStore } from 'Stores/group';
import { useLoggedUser } from 'Stores/loggedUser';
import { CardList, PageHeader } from 'Styles/common.styles';

function Contacts() {
  const { isGroupMode, selectedUsers, setUsersAvailable } = useGroupStore(
    (state) => state
  );
  const { loggedUser } = useLoggedUser((state) => state);

  const {
    isLoading,
    isError,
    data: dataFromApi,
  } = useContacts.useGetContacts();

  const selectedUsersLength = selectedUsers.length;

  const subtitle =
    selectedUsersLength > 0
      ? `You have selected ${selectedUsersLength} contact${
          selectedUsersLength > 1 ? 's' : ''
        }`
      : isGroupMode
      ? 'Select the contacts you want for the new group'
      : 'Click on a contact to start a conversation';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (dataFromApi) {
      setUsersAvailable(dataFromApi);
    }
  }, [dataFromApi, setUsersAvailable]);

  if (isError) return <ErrorState />;
  else if (isLoading) return <SkeletonFeed />;
  else if (dataFromApi.length === 0)
    return (
      <EmptyState
        title="No contacts available..."
        subtitle="Check if your phone call app to create new phone contacts"
      />
    );
  else
    return (
      <>
        <PageHeader>
          <h1>{isGroupMode ? 'New Group' : 'Contacts'}</h1>
          <span>{subtitle}</span>
        </PageHeader>
        <CardList>
          {dataFromApi.map((item) => {
            if (item._id === loggedUser._id) return null;
            return <ContactCard key={item._id} contact={item} />;
          })}
        </CardList>
      </>
    );
}

export default React.memo(Contacts);
