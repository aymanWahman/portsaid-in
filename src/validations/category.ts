import { Translations } from "@/types/translations";
import * as z from "zod";

export const addCategorySchema = (translations: Translations) => {
  return z.object({
    name: z.string().trim().min(1, {
      message: translations.admin.categories.form.name.validation.required,
    }),
    nameEn: z.string().trim().optional(), // ← أضفنا الحقل الإنجليزي
  });
};

export const updateCategorySchema = (translations: Translations) => {
  return z.object({
    categoryName: z.string().trim().min(1, {
      message: translations.admin.categories.form.name.validation.required,
    }),
    categoryNameEn: z.string().trim().optional(), // ← أضفنا الحقل الإنجليزي
  }).transform((data) => ({
    ...data,
    // fallback: لو مفيش categoryNameEn ناخد categoryName
    nameEn: data.categoryNameEn ?? data.categoryName,
  }));
};
