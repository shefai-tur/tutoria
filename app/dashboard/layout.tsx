'use client'
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';


interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="dashboard-layout">
            {/* You can add a sidebar or header here */}
            <main>
                <SessionProvider refetchInterval={5 * 60}>
        
                    {children}
                </SessionProvider>
                
                </main>
        </div>
    );
};

export default DashboardLayout;