import React from 'react';
import useAuth from '../../../../Hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2 className="text-3xl">Hi, Welcome {user?.displayName}</h2>
        </div>
    );
};

export default UserHome;