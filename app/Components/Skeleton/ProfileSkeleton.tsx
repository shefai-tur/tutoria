import React from "react";

const ProfileSkeleton: React.FC = () => (
    <div className="w-34 h-34 mx-auto mt-5 border rounded-full relative animate-pulse bg-gray-200">
        <div className="w-34 h-34 rounded-full bg-gray-300" />
        <div className="absolute bottom-0 left-14">
            <div className="w-10 h-10 bg-gray-300 rounded-full mx-auto" />
        </div>
    </div>
);

export default ProfileSkeleton;