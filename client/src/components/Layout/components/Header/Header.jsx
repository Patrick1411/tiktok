import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'
import { 
    Popper as PopperWrapper, 
    ListSearchedAccounts, 
    Button 
} from '~/components'
import images from '~/assets'

const cx = classNames.bind(styles)

function Header() {

    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logoTiktok" />
                </div>

                <div className={cx('contentContainer')}>
                    <div className={cx('searchContainer')}>
                        <Tippy
                            interactive
                            visible={searchResults.length > 0}
                            render={attrs => (
                                <div className={cx('search_results')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <div  className={cx('search_title')}>Accounts</div>
                                        <ListSearchedAccounts />
                                        <ListSearchedAccounts />
                                        <ListSearchedAccounts />
                                        <ListSearchedAccounts />
                                        <ListSearchedAccounts />
                                        <ListSearchedAccounts />
                                        <ListSearchedAccounts />
                                        <ListSearchedAccounts />
                                        <ListSearchedAccounts />
                                        <ListSearchedAccounts />
                                        <ListSearchedAccounts />
                                    </PopperWrapper>
                                </div>
                
                            )}
                        >
                            <div className={cx('wrapper_input')}>
                                <input placeholder="Search accounts and videos" spellCheck="false" />

                                <button className={cx('delete-btn')}>
                                    <img src={images.close} alt="closeIcon" />
                                </button>

                                <FontAwesomeIcon className={cx('loading_icon')} icon={faSpinner} />

                                <span className={cx('separator')}></span>
                                
                
                                <button className={cx('search-btn')}>
                                    <img src={images.search} className={cx('search_icon')} alt="searchIcon" />
                                </button>
                            </div>
                        </Tippy>
                    </div>
                </div>

                <div className={cx('actions')}>
                    <Button to>
                        <div className={cx('upload')}>
                            <img src={images.plus} className={cx('plusIcon')} alt="plusIcon" />
                            <span>Upload</span>
                        </div>
                    </Button>
                    <Button primary>Log in</Button>

                    <Tippy
                        interactive
                        visible
                        render={attrs => (
                            <div className={cx('optionContainer')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <div  className={cx('search_title')}>Accounts</div>
                                    <ListSearchedAccounts />
                                    <ListSearchedAccounts />
                                    <ListSearchedAccounts />
                                </PopperWrapper>
                            </div>
            
                        )}
                    >
                        <i className={cx('seeMoreIcon')}>
                            <img src={images.more} className={cx('ellipsisVertical')} alt="ellipsisVertical" />
                        </i>
                    </Tippy>
                </div>
            </div>
        </header>
    )
}

export default Header