import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate} from 'react-router-dom';


const Navbar = ({loginState, setLoginState}) => {
  const navigate = useNavigate();
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

  const search = (event) => {
    if(event.key === "Enter"){
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const btn_log_out = () => {
    setLoginState(false)
  }

  return (
    <div>
      <div>
      {loginState ? (
           <div className='login-btn' onClick={btn_log_out}>
           <FontAwesomeIcon icon={faUser} />
           <div>로그아웃</div>
         </div>
        ) : (
          <Link to="/login" className='login-btn'>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </Link>
      )}
      </div>

      <div className='logo-box'>
        <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png" alt=''/>
      </div>

      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className='search-box'>
          <FontAwesomeIcon className='search-icon' icon={faSearch} />
          <input type='text' onKeyPress={(event) => search(event)} placeholder='검색어를 입력하세요.'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar