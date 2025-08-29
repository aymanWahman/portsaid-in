/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/places-service.ts
import { db } from '@/lib/prisma';
import { cache } from '@/lib/cache';

export const getPlaces = cache(
  async (filters?: {
    region?: string;
    category?: string;
    search?: string;
  }) => {
    try {
      const where: any = {};

      if (filters?.region && filters.region !== 'all') {
        where.region = filters.region;
      }

      if (filters?.category && filters.category !== 'all') {
        where.OR = [
          { category: { name: { contains: filters.category, mode: 'insensitive' } } },
          { placeType: { contains: filters.category, mode: 'insensitive' } }
        ];
      }

      if (filters?.search) {
        where.OR = [
          ...(where.OR || []),
          { name: { contains: filters.search, mode: 'insensitive' } },
          { description: { contains: filters.search, mode: 'insensitive' } },
          { address: { contains: filters.search, mode: 'insensitive' } }
        ];
      }

      const places = await db.place.findMany({
        where,
        include: {
          area: true,
          category: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return places.map(place => ({
        id: place.id,
        name: place.name,
        description: place.description || '',
        image: place.images || '/images/placeholder.jpg',
        region: place.region,
        address: place.address,
        phone: place.phone,
        rating: place.rating,
        category: place.category?.name || place.placeType,
        coordinates: place.coordinates ? JSON.parse(place.coordinates) : undefined
      }));
    } catch (error) {
      console.error('Error fetching places:', error);
      return [];
    }
  },
  ['places'],
  { revalidate: 3600 }
);

export const getPlacesStatistics = cache(
  async () => {
    try {
      const [totalCount, byRegion, byCategory] = await Promise.all([
        db.place.count(),
        db.place.groupBy({
          by: ['region'],
          _count: { _all: true }
        }),
        db.place.groupBy({
          by: ['placeType'],
          _count: { _all: true }
        })
      ]);

      return {
        total: totalCount,
        byRegion: byRegion.reduce((acc, item) => {
          acc[item.region] = item._count._all;
          return acc;
        }, {} as Record<string, number>),
        byCategory: byCategory.reduce((acc, item) => {
          acc[item.placeType] = item._count._all;
          return acc;
        }, {} as Record<string, number>)
      };
    } catch (error) {
      console.error('Error fetching statistics:', error);
      return { total: 0, byRegion: {}, byCategory: {} };
    }
  },
  ['places-statistics'],
  { revalidate: 3600 }
);