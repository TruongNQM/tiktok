import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudUpload, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '../../Poper';
import AccountItem from '~/components/AccountItem';
import Menu from '../../Poper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS=[
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'English',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        }
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
]



function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser =  true;

    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([])
        }, 0);
    },[]);

    const handleMenuChange = (menuItem)=>{
        // console.log(menuItem);
        switch (menuItem.type) {
            case 'language':
                
                break;
        
            default:
                break;
        }
    }

    const useMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@thanhtam',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo}  alt="tiktok"></img>

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs =>(
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder='Search accounts and videos' spellCheck={false}></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}> 
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                
                <div className={cx('action')}>
                    {
                        currentUser ? 
                        (
                            <Tippy delay={[0, 200]} content="Upload video" placement='bottom'>

                                <button>
                                    <FontAwesomeIcon className={cx('action-btn')} icon={faCloudUpload}/>
                                </button>
                            </Tippy>
                        ) 
                        : 
                        (
                                <>
                                    <Button text>Upload</Button>
                                    <Button primary >Login</Button>
                                    
                                </>
                        )
                    }
                    <Menu
                        items={currentUser ? useMenu : MENU_ITEMS}
                        onChange = {handleMenuChange}
                    >
                        {
                            currentUser ?
                            (
                                <img src ='https://scontent.fdad5-1.fna.fbcdn.net/v/t1.15752-9/300129871_1558655734549399_1628834960151341320_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8lCuc17W74kAX87aEh7&_nc_ht=scontent.fdad5-1.fna&oh=03_AVJc1Dr9YZnq_xr6T_RWj7PUDJ8W4CPEt5zsgVk1gvr5Cw&oe=632B7A83' className={cx('user-avatar')} alt='Huynh Thi Thanh Tam'/>
                            )
                            :
                            (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )
                        }
                    </Menu>
                </div>

                
            </div>
        </header>
     );
}

export default Header;