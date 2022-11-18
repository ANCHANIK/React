import React, { useCallback, useState } from "react";
import { Form, Error, Label, Input, LinkContainer, Header, Button } from './styles';
import useInput from "@hooks/useInput";

const SignUp = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);

  // 중복 제거로 custom hook 제작
  // const onChangeEmail = useCallback( (e) => {
  //   setEmail(e.target.value);
  // },[]);
  // const onChangeNickname = useCallback( (e) => {
  //   setNickname(e.target.value);
  // },[]);

  const onChangePassword = useCallback( (e) => {
    setPassword(e.target.value);
    setMismatchError(e.target.value !== passwordCheck);
  },[passwordCheck]); // 함수 외부의 변수는 작성할 필요 없음

  const onChangePasswordCheck = useCallback( (e) => {
    setPasswordCheck(e.target.value);
    setMismatchError(e.target.value !== password);
  },[password]);

  const onSubmit = useCallback( (e) => {
    e.preventDefault();

    if(!mismatchError && nickname){
      console.log('서버로 회원가입하기');
    }
    console.log(email, nickname, password, passwordCheck);
  }, [email, nickname, password, passwordCheck, mismatchError]);

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
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {/*{signUpError && <Error>{signUpError}</Error>}*/}
          {/*{signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}*/}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <a href="/login">로그인 하러가기</a>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
