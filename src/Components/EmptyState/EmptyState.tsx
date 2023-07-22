import React from 'react';

import { AWSIllustrationsUrl, IllustrationNames } from 'Constants/AWS';
import { ErrorHeader, ErrorImage, PageBody } from 'Styles/common.styles';

export default function EmptyState() {
  return (
    <PageBody>
      <ErrorHeader>No calls here!</ErrorHeader>
      <ErrorImage src={AWSIllustrationsUrl + IllustrationNames.archiveEmpty} />
    </PageBody>
  );
}
