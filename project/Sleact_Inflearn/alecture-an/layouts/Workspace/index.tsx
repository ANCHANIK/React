import React, { FC, useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';
import fetcher from '@utils/fetcher';
import {
  AddButton,
  Channels,
  Chats,
  Header, LogOutButton, MenuScroll,
  ProfileImg, ProfileModal,
  RightMenu, WorkspaceButton, WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from '@layouts/Workspace/styles';
import { Button, Input, Label } from '@pages/SignUp/styles';
import gravatar from 'gravatar';
import loadable from '@loadable/component';
import Menu from '@components/Menu';
import Modal from '@components/Modal';
import useInput from '@hooks/useInput';
import { IUser } from '@typings/db';
import { toast } from 'react-toastify';

const Channel = loadable( () => import('@pages/Channel'));
const DirectMessage = loadable( () => import('@pages/DirectMessage'));

const Workspace: FC = ({ children }) => {
  // VFC : children을 안쓰는 컴포넌트의 타입 ( <-> FC)
  // children : <Workspace></Workspace> 안에 들어있는 jsx
  const {data: userData, error, isValidating, mutate} = useSWR<IUser | false>('http://localhost:3095/api/users', fetcher);
  // data : userData 데이터 변수명 개명
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCreateWorkspaceModaΩl,setShowCreateWorkspaceModal] = useState(false);
  const [newWorkspace, onChangeNewWorkspace, setNewWorkspace] = useInput('');
  const [newUrl, onChangeNewUrl, setNewUrl] = useInput('');

  const onLogout = useCallback( () => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false);
      })
  },[]);

  const onCloseUserProfile = useCallback((e) => {
    e.stopPropagation();
    setShowUserMenu(false);
  },[]);

  const onClickUserProfile = useCallback(() => {
    setShowUserMenu((prev) => !prev);
  },[]);


  // workspace 생성 버튼
  const onClickCreateWorkspace = useCallback(() => {
    setShowCreateWorkspaceModal(true);
  },[])

  const onCreateWorkspace = useCallback((e) => {
    e.preventDefault();
    if(!newWorkspace || !newWorkspace.trim()) return;
    // .trim() 공백 제거
    if(!newUrl || !newUrl.trim()) return;

    axios.post('http://localhost:3095/api/workspaces', {
      workspace: newWorkspace,
      url: newUrl
    }, {
      withCredentials: true,
    })
      .then(() => {
        mutate(false);
        setShowCreateWorkspaceModal(false);
        setNewWorkspace('');
        setNewUrl('');
      })
      .catch((error) => {
        console.dir(error);
        toast.error(error.response?.data, {position: 'bottom-center'});
      })
  },[newWorkspace, newUrl]);

  const onCloseModal = useCallback(() => {
    setShowCreateWorkspaceModal(false);
  },[]);

  if (!userData) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <Header>
        <RightMenu>
          <span onClick={onClickUserProfile}>
            <ProfileImg src={gravatar.url(userData.nickname, { s: '32px', d: 'retro'})} alt={userData.nickname}/>
            { showUserMenu && (
              <Menu style={{right: 0, top: 38}} show={showUserMenu} onCloseModal={onCloseUserProfile}>
                <ProfileModal>
                  <img src={gravatar.url(userData.nickname, { s: '40px', d: 'retro'})} alt={userData.nickname}/>
                  <div>
                    <span id="profile-name">{userData.nickname}</span>
                    <span id="profile-active">Active</span>
                  </div>
                </ProfileModal>
                <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
              </Menu>
            )}
          </span>
        </RightMenu>
      </Header>

      <WorkspaceWrapper>
        <Workspaces>
          {userData?.Workspaces.map((ws) => {
            return (
              <Link key={ws.id} to={`/workspace/${123}/channel/일반`} >
                <WorkspaceButton>{ws.name.slice(0,1).toUpperCase()}</WorkspaceButton>
              </Link>
            )
          })}
          <AddButton onClick={onClickCreateWorkspace}>+</AddButton>
        </Workspaces>
        <Channels>
          <WorkspaceName>Sleact</WorkspaceName>
          <MenuScroll>menu scroll</MenuScroll>
        </Channels>
        <Chats>
          <Switch>
            <Route path="/workspace/channel" component={Channel} />
            <Route path="/workspace/dm" component={DirectMessage} />
          </Switch>
        </Chats>
      </WorkspaceWrapper>
      <Modal show={showCreateWorkspaceModaΩl} onCloseModal={onCloseModal}>
        <form onSubmit={onCreateWorkspace}>
          <Label id="workspace-label">
            <span>워크스페이스 이름</span>
            <Input id="workspace" value={newWorkspace} onChange={onChangeNewWorkspace}></Input>
          </Label>
          <Label id="workspace-url-label">
            <span>워크스페이스 URL</span>
            <Input id="workspace" value={newUrl} onChange={onChangeNewUrl}></Input>
          </Label>
          <Button type="submit">생성하기</Button>
        </form>
      </Modal>
    </div>
  )
}

export default Workspace;