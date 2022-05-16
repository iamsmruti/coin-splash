import HeadData from "./HeadData";
import Nav from "./Nav";

const Layout = ({children}) => {
    return (
        <div>
            <HeadData prop={""}/>
            <Nav />
            {children}
        </div>
    );
}
 
export default Layout;