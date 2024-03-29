import React from 'react';

import PageTemplate from '../components/common/PageTemplate';
import ListWrapper from '../components/list/ListWrapper';
import ListContainer from '../containers/list/ListContainer.js';

const ListPage = ({ match }) => {   // page 기본값 = 1
    const { page=1, tag } = match.params;

    return (
        <PageTemplate>
           <ListWrapper>
              <ListContainer
              page={parseInt(page,10)}
              tag={tag}
              />
           </ListWrapper>
        </PageTemplate>
    );
};

export default ListPage;