import styles from './style.module.css'

const Header = (props) => {
    return (
        <>
            <h1 className={styles.h1}>
                Welcome {props.pageName} page
            </h1>
        </>
    )
}


export default Header;