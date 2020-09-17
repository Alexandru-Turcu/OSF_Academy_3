
import React from 'react';

import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../pages/sign-in-up/sign-in.component';
import SignUp from '../../pages/sign-in-up/sign-in.component';


const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;