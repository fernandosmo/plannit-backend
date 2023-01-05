import { object, string, TypeOf } from 'zod';

export const createSetorSchema = object({
  body: object({
    nome: string({
      required_error: 'Nome is required',
    }),
  }),
});

export type CreateSetorInput = TypeOf<typeof createSetorSchema>['body'];
