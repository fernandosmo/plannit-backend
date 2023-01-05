import { object, string, TypeOf } from 'zod';

export const createRuaSchema = object({
  body: object({
    nome: string({
      required_error: 'Nome is required',
    }),
  }),
});

export type CreateRuaInput = TypeOf<typeof createRuaSchema>['body'];
