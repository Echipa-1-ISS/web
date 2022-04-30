import React from "react";
import { Profile } from "./UserProfile";
import { Information } from "./InfoCard";
import { StudentCertificate } from "./StudentCertificateCard";

export const Dashboard = () => {
  return (
    <div
      className="site-layout-content"
      style={{
        minHeight: 800,
        background: "#fff",
        padding: 24,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Profile />
      <Information />
      <StudentCertificate />
    </div>
  );
};
