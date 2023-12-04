import { Icon } from '@iconify-icon/react';
import logo from './assets/dev-logo.png'
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <>
            <div className='top-nav-container'>
                
                <div className="top-nav-logo-container">
                    <Link to='/'><img src={logo} alt=".dev-logo" /></Link>
                </div>
                <div className="top-nav-search-container">
                    <div className="top-nav-serch">
                        <input type="text" id='search-input' placeholder='Search...' className='top-nav-search-input' />
                        <button type='button'style={{padding: 0}}><label htmlFor="search-input" className='top-nav-search-icon'><span className="iconify" data-icon="iconoir:search"></span></label></button>
                    </div>
                </div>
                <div className="top-nav-profile-noti-post-contaier">
                    <div className="top-nav-login-container">
                        <a href=""><button type='button'>Login</button></a>
                    </div>
                    <div className="top-nav-create-post-button">
                        <Link to='createpost'><button type='button'>Create Post</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}