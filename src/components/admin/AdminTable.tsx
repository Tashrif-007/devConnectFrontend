import React from "react";

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
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={`px-6 py-3 text-sm font-semibold text-gray-900 ${
                  column.align === "right"
                    ? "text-right"
                    : column.align === "center"
                    ? "text-center"
                    : "text-left"
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((item) => (
              <tr
                key={String(item[rowKey])}
                className="hover:bg-gray-50 transition-colors"
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className={`px-6 py-4 text-sm ${
                      column.key === "actions"
                        ? "text-right"
                        : column.align === "right"
                        ? "text-right"
                        : column.align === "center"
                        ? "text-center"
                        : "text-left"
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
              <td
                colSpan={columns.length}
                className="px-6 py-8 text-center text-gray-500"
              >
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
