import React, { useState } from "react";
import CategoryManagement from "../components/admin/categories/CategoryManagement";
import UserManagement from "../components/admin/management/UserManagement";
import { Header, Paragraph, TabButton } from "../components/ui";
import sidebarStyles from "../layouts/Sidebar.module.css";
import styles from "./AdminPage.module.css";
import Categories from "../components/feed/Categories";
import { ADMIN_PAGE } from "../constants";

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"categories" | "users">(
    "categories"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <Header
              level={2}
              value={ADMIN_PAGE.DASHBOARD_TITLE}
              className={styles.pageTitle}
            />
            <Paragraph className="text-gray-600">
              {ADMIN_PAGE.DASHBOARD_DESCRIPTION}
            </Paragraph>
          </div>
        </div>
        <div className={styles.tabsContainer}>
          <TabButton
            label={ADMIN_PAGE.TABS.CATEGORIES}
            isActive={activeTab === "categories"}
            onClick={() => setActiveTab("categories")}
            variant="admin"
          />
          <TabButton
            label={ADMIN_PAGE.TABS.USERS}
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

      {isSidebarOpen && (
        <>
          <div
            className={sidebarStyles.backdrop}
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div className={sidebarStyles.drawer}>
            <Categories onCategoryChange={() => setIsSidebarOpen(false)} />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPage;
