import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles);


function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://scontent.fdad5-1.fna.fbcdn.net/v/t1.15752-9/300129871_1558655734549399_1628834960151341320_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8lCuc17W74kAX87aEh7&_nc_ht=scontent.fdad5-1.fna&oh=03_AVJc1Dr9YZnq_xr6T_RWj7PUDJ8W4CPEt5zsgVk1gvr5Cw&oe=632B7A83' alt='Tâm'/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Huỳnh Thị Thanh Tâm</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>huynhthithanhtamsdasdasd </span>
            </div>
        </div>
    );
}

export default AccountItem;