import React, { useState, useEffect, useMemo } from 'react';
import * as firebase from 'firebase';

export const UserContext = React.createContext({
    user: {
        context: "",
        displayName: '',
        email: '',
        emailVerified: false,
        expiresIn: '',
        federatedId: '',
        firstName: '',
        fullName: '',
        idToken: '',
        kind: '',
        lastName: '',
        localId: '',
        oauthAccessToken: '',
        oauthExpireIn: 0,
        oauthIdToken: '',
        photoURL: '',
        providerId: '',
        rawUserInfo: '',
        refreshToken: ''
    },
   setUser: (user: any) => {}
});

export default function UserProvider(props: any) {
    const [user, setUser] = useState(null);

    // tslint:disable-next-line: ter-arrow-body-style
    const value = useMemo(() => {
        return ({
            user,
            setUser
        });
    }, [user]);

    return <UserContext.Provider value={value} {...props} />;
}

export function useUser() {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error('variables globales deben estar dentro del provedor');
    }
    return context;
}
