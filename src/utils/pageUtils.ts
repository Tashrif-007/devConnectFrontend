export const parsePage = (
  pageValue: string | number,
  defaultPage: number = 1
): number => {
  if (pageValue === null || pageValue === undefined || pageValue === "") {
    return defaultPage;
  }

  const parsed =
    typeof pageValue === "string" ? parseInt(pageValue, 10) : pageValue;

  if (isNaN(parsed) || parsed < 1) {
    return defaultPage;
  }

  return parsed;
};
