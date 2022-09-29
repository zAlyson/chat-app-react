import { Outlet, useParams } from 'react-router-dom';
import { ConversationPanel } from '../components/conversations/ConversationPanel';
import { ConversationSideBar } from '../components/conversations/ConversationSideBar';
import { Page } from '../styles';

import mockConversation from '../mocks/conversations';

export const ConversationPage = () => {
  const { id } = useParams();

  return (
    <Page>
      <ConversationSideBar conversations={mockConversation} />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
};
