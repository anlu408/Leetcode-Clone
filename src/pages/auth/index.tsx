import React from 'react';
import Navbar from '@/components/Navbar/Navbar';

type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    
    return <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
        <div className="max-w-7x1 mx-auto">
            <Navbar />
        </div>
        </div>
}
export default AuthPage;