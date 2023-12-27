import React, { useEffect } from 'react';

import ConversationCard from 'Components/ConversationCard/ConversationCard';
import EmptyState from 'Components/EmptyState/EmptyState';
import ErrorState from 'Components/ErrorState/ErrorState';
import SkeletonFeed from 'Components/SkeletonFeed/SkeletonFeed';
import useConversations from 'Hooks/useConversations';
import { CardList, PageHeader } from 'Styles/common.styles';

function Inbox() {
  const {
    isLoading,
    isError,
    data: dataFromApi,
  } = useConversations.useGetConversations();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isError) return <ErrorState />;
  else if (isLoading) {
    return (
      <>
        <PageHeader>
          <h1>Inbox</h1>
        </PageHeader>
        <SkeletonFeed />
      </>
    );
  } else if (!dataFromApi.length)
    return (
      <EmptyState
        title="No conversations yet!"
        subtitle="Start a new one by clicking on the add button"
      />
    );
  else
    return (
      <>
        <PageHeader>
          <h1>Inbox</h1>
        </PageHeader>
        <CardList>
          {dataFromApi.map((item) => (
            <ConversationCard key={item._id} conversation={item} />
          ))}
        </CardList>
      </>
    );
}

export default React.memo(Inbox);
