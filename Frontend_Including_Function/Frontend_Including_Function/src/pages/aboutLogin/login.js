import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import './css/login.css';

function Login()
{
    const [id, setInputId]= useState('');
    const [pw, setInputPw]=useState('');
    
    const[cookies ,setCookie]= useCookies(['accessToken','refreshToken']);
    const navigate = useNavigate();

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 	
    const onClickLogin = async (e) => {
        const postInfo = { id, pw };
        try {
          const response = await axios.post('http://localhost:3001/login', postInfo);
          const data = response.data;
          if (data.s === 'success') {
            const access_token = data.accessToken;
            const refresh_token = data.refreshToken;
        
            
            setCookie('accessToken', access_token,{
                secure : false,
                httpOnly: true,
            });
            setCookie('refreshToken', refresh_token,{
                secure : false,
                httpOnly: true,
            });
            alert("Success");
            navigate('/');
          } else {
            alert("Try Again");
          }
        } catch (error) {
          console.log(error);
          alert("로그인 중 오류가 발생했습니다.");
        }
      };
    
    return (
        <div>
            <div className='headLine'>
                <h1>로그인</h1>
            </div>
            <div className='loginBox'>
                <div className='typingId'>
                    <p>아이디</p>
                    <label htmlFor='id'></label>
                    <input type='text' name='id' value={id} onChange={handleInputId} />
                </div>
                <div className='typingPw'>
                    <p>비밀번호</p>
                    <label htmlFor='pw'></label>
                    <input type='password' name='pw' value={pw} onChange={handleInputPw} />
                </div>
                <div className='goLogin'>
                    <button type='button' onClick={onClickLogin}>로그인</button>
                </div>
            </div>
            <br />
            <div className='noAccount'>
                <Link to="/Account">계정이 없으신가요? 계정만들기</Link>
            </div>
        </div>
    )

}

export default Login;