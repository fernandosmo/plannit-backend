import { object, string, TypeOf } from 'zod';

export const createEtapaSchema = object({
  body: object({
    nome: string({
      required_error: 'Nome is required',
    }),
  }),
});

export type CreateEtapaInput = TypeOf<typeof createEtapaSchema>['body'];
