export const parseErrorMessage = (errorMessage: string): string => {
  if (!errorMessage) return "An error occurred. Please try again.";

  const errors = errorMessage.split(",").map((err) => err.trim());

  const uniqueErrors = Array.from(new Set(errors));

  const formattedErrors = uniqueErrors.map((err) => {
    const match = err.match(/^[^:]+:\s*(.+)$/);
    return match ? match[1] : err;
  });

  return formattedErrors.join("\n");
};

export const parseFieldErrors = (
  errorMessage: string
): { form: string; fields: Record<string, string> } => {
  const fieldErrors: Record<string, string> = {};
  let generalError = "";

  if (!errorMessage) {
    generalError = "An error occurred. Please try again.";
    return { form: generalError, fields: fieldErrors };
  }

  const errors = errorMessage.split(",").map((err) => err.trim());
  const uniqueErrors = Array.from(new Set(errors));

  for (const err of uniqueErrors) {
    const match = err.match(/^([^:]+):\s*(.+)$/);
    if (match) {
      const [, field, message] = match;
      const fieldName = field.toLowerCase().trim();
      fieldErrors[fieldName] = message.trim();
    } else {
      generalError = err;
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { form: "", fields: fieldErrors };
  }

  return { form: generalError, fields: fieldErrors };
};
