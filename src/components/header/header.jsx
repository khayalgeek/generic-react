const Header = (props) => {
    return (
        <>
            <h1 style={{
                textAlign: "center",
                backgroundColor: "black",
                color: "lime"
            }}>
                Welcome {props.pageName} page
            </h1>
        </>
    )
}


export default Header;