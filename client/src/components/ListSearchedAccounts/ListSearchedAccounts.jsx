import classNames from 'classnames/bind'

import styles from './ListSearchedAccounts.module.scss'
import images from '~/assets'

const cx = classNames.bind(styles)

function ListSearchedAccounts() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('avatarContainer')}>
                <img src="https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/ab4ef36045611fd8d14c95e0df09d84b~c5_300x300.webp?x-expires=1653714000&x-signature=P3HKb8cZzva4NnV%2FtWsfYHVpHu8%3D" alt="" className={cx('avatarUser')} />
            </span>

            <div className={cx('infoUser')}>
                <h4 className={cx('username')}>
                    Nguyen Van A
                    <img src={images.check} alt="checkIcon" className={cx('checkIcon')} />
                </h4>
                <p className={cx('alias')}>Ong trum xa thu</p>
            </div>
        </div>
    )
}

export default ListSearchedAccounts