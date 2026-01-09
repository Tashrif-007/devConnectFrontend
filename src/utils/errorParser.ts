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

  const fieldKeywords: Record<string, string[]> = {
    email: ["email"],
    username: ["username"],
    name: ["name", "full name"],
    password: ["password"],
    confirmPassword: ["confirm password", "confirmation password"],
  };

  for (const err of uniqueErrors) {
    const match = err.match(/^([^:]+):\s*(.+)$/);
    if (match) {
      const [, field, message] = match;
      const fieldName = field.toLowerCase().trim();
      fieldErrors[fieldName] = message.trim();
    } else {
      const classifiedField = classifyErrorByField(err, fieldKeywords);
      if (classifiedField !== "general") {
        fieldErrors[classifiedField] = err;
      } else {
        generalError = err;
      }
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { form: "", fields: fieldErrors };
  }
  return { form: generalError, fields: fieldErrors };
};

export const classifyErrorByField = (
  errorMessage: string,
  fieldKeywords: Record<string, string[]> = {}
): string => {
  if (!errorMessage) return "general";

  const lowerMessage = errorMessage.toLowerCase();

  for (const [field, keywords] of Object.entries(fieldKeywords)) {
    if (keywords.some((keyword) => lowerMessage.includes(keyword))) {
      return field;
    }
  }

  return "general";
};
