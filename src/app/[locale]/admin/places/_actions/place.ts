"use server";

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { Pages, Routes } from "@/constants/enums";
import { Region, PlaceCategory } from "@prisma/client"; // استيراد الـ enums

export const addPlace = async (prevState: unknown, formData: FormData) => {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);

  try {
    const data = Object.fromEntries(formData.entries());

    // تأكد من وجود areaId و categoryId قبل الإنشاء
    if (!data.areaId || !data.categoryId) {
      return { status: 400, message: "Area and Category are required." };
    }

    await db.place.create({
      data: {
        name: data.name as string,
        description: data.description as string,
        address: data.address as string,
        phone: data.phone as string,
        website: data.website as string | undefined,
        category: data.category as PlaceCategory,
        subCategory: data.subCategory as "STAR" | "FLAFEL" | "FISH" | "TAKEAWAY" | "PIZZA" | "OTHER",

        region: data.region as Region,
        area: { connect: { id: data.areaId as string } }, // ⬅️ connect
      },
    });

    revalidatePath(`/${locale}/${Routes.ADMIN}/${Pages.PLACES}`);
    return { status: 201, message: translations.messages.placeAdded };
  } catch (error) {
    console.error(error);
    return { status: 500, message: translations.messages.unexpectedError };
  }
};

export const updatePlace = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);

  try {
    const data = Object.fromEntries(formData.entries());

    if (!data.areaId || !data.categoryId) {
      return { status: 400, message: "Area and Category are required." };
    }

    await db.place.update({
      where: { id },
      data: {
        name: data.name as string,
        description: data.description as string,
        address: data.address as string,
        phone: data.phone as string,
        website: data.website as string | undefined,
        category: data.category as PlaceCategory,
        subCategory: data.subCategory as "STAR" | "FLAFEL" | "FISH" | "TAKEAWAY" | "PIZZA" | "OTHER",

        region: data.region as Region,
        area: { connect: { id: data.areaId as string } },
      },
    });

    revalidatePath(`/${locale}/${Routes.ADMIN}/${Pages.PLACES}`);
    return { status: 200, message: translations.messages.updatePlaceSuccess };
  } catch (error) {
    console.error(error);
    return { status: 500, message: translations.messages.unexpectedError };
  }
};

export const deletePlace = async (id: string) => {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);

  try {
    await db.place.delete({ where: { id } });
    revalidatePath(`/${locale}/${Routes.ADMIN}/${Pages.PLACES}`);
    return { status: 200, message: translations.messages.deletePlaceSuccess };
  } catch (error) {
    console.error(error);
    return { status: 500, message: translations.messages.unexpectedError };
  }
};
