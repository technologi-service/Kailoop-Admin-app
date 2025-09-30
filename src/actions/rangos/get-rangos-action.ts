import { defineAction } from 'astro:actions';
import prisma from '../../db/prisma';

export const getRangos = defineAction({
  accept: 'json',
  handler: async ({ request }) => {
    try {
      const rangos = await prisma.puntuaciones.findMany();
      return rangos;
    } catch (error) {
      console.error('Error fetching rango ranges:', error);
      throw new Error('Failed to fetch rangos');
    }
  },
});
