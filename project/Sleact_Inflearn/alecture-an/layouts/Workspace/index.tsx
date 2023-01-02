import React, { FC, useCallback } from 'react';
import { Redirect, Route } from 'react-router';
import useSWR from 'swr';
import axios from 'axios';
import fetcher from '@utils/fetcher';
import {
  Channels,
  Chats,
  Header, MenuScroll,
  ProfileImg,
  RightMenu, WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from '@layouts/Workspace/styles';
import gravatar from 'gravatar';
import loadable from '@loadable/component';

const Channel = loadable( () => import('@pages/Channel'));
const DirectMessage = loadable( () => import('@pages/DirectMessage'));

const Workspace: FC = ({ children }) => {
  // VFC : children을 안쓰는 컴포넌트의 타입 ( <-> FC)
  // children : <Workspace></Workspace> 안에 들어있는 jsx
  const {data, error, isValidating, mutate} = useSWR('http://localhost:3095/api/users', fetcher);

  const onLogout = useCallback( () => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false);
      })
  },[])

  if (!data) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <Header>
        <RightMenu>
          <span>
            <ProfileImg src={gravatar.url(data.nickname, { s: '20px', d: 'retro'})} alt={data.nickname}/>
          </span>
        </RightMenu>
      </Header>

      <WorkspaceWrapper>
        <Workspaces>test</Workspaces>
        <Channels>
          <WorkspaceName>Sleact</WorkspaceName>
          <MenuScroll>menu scroll</MenuScroll>
        </Channels>
        <Chats>
          <switch>
            <Route path="/workspace/channel" component={Channel} />
            <Route path="/workspace/dm" component={DirectMessage} />
          </switch>
        </Chats>
      </WorkspaceWrapper>

      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  )
}

export default Workspace;