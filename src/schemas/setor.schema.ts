import { number, object, string, TypeOf } from 'zod';

export const createSetorSchema = object({
  body: object({
    Obra: number({
      required_error: 'Obra is required',
    }),
    nome: string({
      required_error: 'Nome is required',
    }),
  }),
});

export type CreateSetorInput = TypeOf<typeof createSetorSchema>['body'];
