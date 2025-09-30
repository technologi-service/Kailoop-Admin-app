import type { APIRoute } from 'astro';
import prisma from '../../../db/prisma';

export const PATCH: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, peso } = body;
    if (!id || typeof peso !== 'number') {
      return new Response(JSON.stringify({ ok: false, error: 'Datos inválidos' }), { status: 400 });
    }
    const updated = await prisma.variable.update({
      where: { id: Number(id) },
      data: { peso },
    });
    return new Response(JSON.stringify({ ok: true, message: 'Peso actualizado', resultado: updated }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: 'No se pudo actualizar el peso' }), {
      status: 500,
    });
  }
};
