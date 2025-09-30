import { defineAction } from 'astro:actions';
import prisma from '../../db/prisma';

export const getPesos = defineAction({
  accept: 'json',
  handler: async ({ request }) => {
    try {
      const pesos = await prisma.variable.findMany();
      return pesos;
    } catch (error) {
      console.error('Error fetching peso ranges:', error);
      throw new Error('Failed to fetch peso ranges');
    }
  },
});
