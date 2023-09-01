import Counter from "./components/counter/Counter";
import About from "./pages/home/index";
import Home from "./pages/about/index";
import Users from "./components/users/Users";



const App = () => {
    return (
        <>
            <Home pageName="Home" />
            <About pageName="About" />
            <Counter />
            <Users/>
        </>
    )
}


export default App;