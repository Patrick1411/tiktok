import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({to, href, children, primary, follow, onClick, passProps}) {

    let Component = 'button'
    const props = {
        onClick,
        ...passProps
    }

    const classes = cx('wrapper', {
        primary,
        follow
    })

    if (to) {
        props.to = to
        Component = Link
    } else if (href) {
        props.to = to
        Component = 'a'
    }

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    )
}
export default Button