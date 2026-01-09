import React, { useState } from "react";
import CategoryManagement from "../components/admin/CategoryManagement";
import UserManagement from "../components/admin/UserManagement";
import { Header } from "../components/ui/Header";
import { Paragraph } from "../components/ui/Paragraph";
import TabButton from "../components/ui/TabButton";

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"categories" | "users">(
    "categories"
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Header
            level={2}
            value="Dashboard"
            className="text-3xl font-bold text-gray-900 mb-2"
          />
          <Paragraph className="text-gray-600">
            Manage platform tags, users, and content moderation.
          </Paragraph>
        </div>

        <div className="flex gap-8 border-b border-gray-200 mb-8">
          <TabButton
            label="Tags"
            isActive={activeTab === "categories"}
            onClick={() => setActiveTab("categories")}
            variant="admin"
          />
          <TabButton
            label="User Management"
            isActive={activeTab === "users"}
            onClick={() => setActiveTab("users")}
            variant="admin"
          />
        </div>
        <div>
          {activeTab === "categories" && <CategoryManagement />}
          {activeTab === "users" && <UserManagement />}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
