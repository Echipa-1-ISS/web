import React from "react";
import {Profile} from "./UserProfile";
import {Information} from "./InfoCard";
import {StudentCertificate} from "./StudentCertificateCard";
import './main.css'

export const Dashboard = () => {
    return (
        <div className="site-layout-content">
            <Profile/>
            <Information/>
            <StudentCertificate/>
        </div>
    );
};
