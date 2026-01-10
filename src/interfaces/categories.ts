export interface Category {
  categoryId: string;
  name: string;
  description?: string;
  createdAt?: string;
}

export interface CreateCategoryPayload {
  name: string;
  description?: string;
}