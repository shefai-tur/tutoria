
import React, { ReactNode } from 'react';


interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="dashboard-layout">
            {/* You can add a sidebar or header here */}
            <main>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;