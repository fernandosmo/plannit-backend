import { number, object, string, TypeOf } from 'zod';

export const createRuaSchema = object({
  body: object({
    obra: number({
      required_error: 'Obra is required',
    }),
    nome: string({
      required_error: 'Nome is required',
    }),
  }),
});

export type CreateRuaInput = TypeOf<typeof createRuaSchema>['body'];
