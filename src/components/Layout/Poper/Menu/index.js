import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Poper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';


const cx = classNames.bind(styles);

const defaultFn = ()=>{};

function Menu({children, items = [], onChange = defaultFn}) {
    const [history, setHistory] = useState([{data: items}])
    const current = history[history.length - 1];


    const renderItem = ()=>{
        return current.data.map( (item, index) => {
            const isParent = !!item.children
            return (<MenuItem key={index} data={item} onClick={()=>{
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                }else{
                    onChange(item);
                }
            }}/>)
        });
    };

    return (
        <Tippy
            interactive
            delay = {[0, 700]}
            placement='bottom-end'
            render={attrs =>(
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-poper')}>
                        {
                            history.length > 1 && 
                            <HeaderMenu title="Language" onBack={()=>{
                                setHistory(prev => prev.slice(0,prev.length - 1))
                            }}/>
                        }
                       {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide = {()=>setHistory(prev => prev.slice(0,1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;