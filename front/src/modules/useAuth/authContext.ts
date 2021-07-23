import React from 'react';

interface AuthState {
    authOpen: boolean;
    isAuthenticated: boolean;
    user: {
        id: string;
        name: string;
        userImageUrl: String,
        userImageThumbnailUrl: String
    }
}

type ContextType = {
    authState: AuthState;
    dispatch: (action: any) => void;
};

const defaults = {
    authOpen: true,
    isAuthenticated: false,
    user: {
        id: '',
        name: '',
        userImageUrl: '',
        userImageThumbnailUrl: ''
    }
}

const AuthContext = React.createContext<ContextType>({
    authState: defaults,
    dispatch: () => {}
});

export {
    defaults,
    AuthContext
};