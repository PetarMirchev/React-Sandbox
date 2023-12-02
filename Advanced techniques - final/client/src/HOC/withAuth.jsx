import { useContext } from "react";
import AuthContext from "../contexts/authContext";

export default function withAuth(Component) {
    const EnhancedComponent = (props) => {
        const auth = useContext(AuthContext);

        return <Component {...props} {...auth} />
    }

    return EnhancedComponent;
}

// this is "High Order Component in react" --> offer a versatile way to enhance the functionality 
// and behavior of components. They can be applied to various use cases in your application.
// most common use case is when you have class components & want to mix functional 
// base components whit Hooks (useState, useEffect). is acting/using as a middleware.