import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import useInput from '@hooks/useInput';
import { Form, Error, Label, Input, LinkContainer, Header, Button, Success } from '@pages/SignUp/styles';
import { Link } from 'react-router-dom';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';
import { Redirect } from 'react-router';

const Login = () => {
  const {data, error, isValidating, mutate} = useSWR('http://localhost:3095/api/users', fetcher);
  // SWR 사용시 get으로 요청
  // data : fetcher 에서 받아온 response.data
  // 로딩 상태도 사용 가능 (data가 존재하지 않으면 로딩)
  // 로그인 되어 있지 않으면 false
  // 다른 탭으로 갔다가 돌아와도 swr이 데이터를 보내 유지해줌
  // isValidating (revalidate의 구버전) : 내가 원할 때 api 호출
  // revalidate 와 mutate 차이점?
  // revalidate : 서버로 요청 보내서 데이터를 다시 가져오는 것
  // mutate : 서버로 요청 안보내고 data를 수정하는 것. 클라이언트에서 직접 데이터 조작 가

  const [logInError, setLoginError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoginError(false);
      axios
        .post(
          'http://localhost:3095/api/users/login',
          {email, password},
          {
            withCredentials: true,
          }
        )
        .then( (res) => {
          mutate(res.data, false);

        })
        .catch((error) => {
          setLoginError(error.response?.data?.statusCode === 401);
        })
    },
    [email, password]
  );

  // 돔이 잠깐 깜빡이며 보일 때
  if (data === undefined) {
    return <>로딩중...</>
  }

  if (data) {
    return <Redirect to="/workspace/channel" />
  }


  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>{logInError}</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
}

export default Login;