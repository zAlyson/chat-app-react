import { ConversationSideBarStyle } from '../../styles/index';

import { TbEdit } from 'react-icons/tb';

export const ConversationSideBar = () => {
  return (
    <ConversationSideBarStyle>
      <header>
        <h1>Conversations</h1>
        <TbEdit size={40} />
      </header>
    </ConversationSideBarStyle>
  );
};
