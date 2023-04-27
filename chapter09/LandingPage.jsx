function Landing(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn
                ></Toolbar>
        </div>
    )
}