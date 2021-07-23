import React from "react";
import { defaults, AuthContext } from "./authContext";
import Auth from "./Auth";

const _ = (props:any):any => {

    const [state, dispatch] = React.useState(defaults);

    return (
        <AuthContext.Provider
            value={{
                authState: state,
                dispatch: (payload: any) => dispatch({...state, ...payload})
            }}
        >
            <Auth />
            {props.children}
        </AuthContext.Provider>
    );
}

export default _;
