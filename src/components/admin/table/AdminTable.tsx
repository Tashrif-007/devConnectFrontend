import React from "react";
import styles from "./AdminTable.module.css";

export interface ColumnDef<T> {
  header: string;
  key: keyof T | string;
  render?: (value: any, item: T) => React.ReactNode;
  align?: "left" | "center" | "right";
}

interface AdminTableProps<T extends { [key: string]: any }> {
  columns: ColumnDef<T>[];
  data: T[];
  emptyMessage?: string;
  rowKey: keyof T;
}

const AdminTable = <T extends { [key: string]: any }>({
  columns,
  data,
  emptyMessage = "No data found",
  rowKey,
}: AdminTableProps<T>) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={`${styles.headerCell} ${
                  column.align === "right"
                    ? styles.headerCellRight
                    : column.align === "center"
                    ? styles.headerCellCenter
                    : styles.headerCellLeft
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={String(item[rowKey])} className={styles.tableRow}>
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className={`${styles.tableCell} ${
                      column.key === "actions"
                        ? styles.tableCellRight
                        : column.align === "right"
                        ? styles.tableCellRight
                        : column.align === "center"
                        ? styles.tableCellCenter
                        : styles.tableCellLeft
                    }`}
                  >
                    {column.render
                      ? column.render(item[column.key], item)
                      : column.key === "actions"
                      ? item[column.key]
                      : typeof item[column.key] === "string"
                      ? item[column.key]
                      : String(item[column.key])}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className={styles.emptyCell}>
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
