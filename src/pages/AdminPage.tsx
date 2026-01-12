import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import CategoryManagement from "../components/admin/categories/CategoryManagement";
import UserManagement from "../components/admin/management/UserManagement";
import { Header, Paragraph, TabButton, Button } from "../components/ui";
import sidebarStyles from "../layouts/Sidebar.module.css";
import styles from "./AdminPage.module.css";
import Categories from "../components/feed/Categories";

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
              value="Dashboard"
              className={styles.pageTitle}
            />
            <Paragraph className="text-gray-600">
              Manage platform tags, users, and content moderation.
            </Paragraph>
          </div>
          <Button
            className={styles.sidebarToggle}
            onClick={() => setIsSidebarOpen(true)}
          >
            <RxHamburgerMenu size={24} />
          </Button>
        </div>

        <div className={styles.tabsContainer}>
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

      {isSidebarOpen && (
        <>
          <div
            className={sidebarStyles.backdrop}
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div className={sidebarStyles.drawer}>
            <button
              className={sidebarStyles.closeButton}
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <RxCross2 size={24} />
            </button>
            <div className="p-4">
              <Categories onCategoryChange={() => setIsSidebarOpen(false)} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPage;
