import { number, object, string, TypeOf } from 'zod';

export const createGrupoMateriaisSchema = object({
  body: object({
    nome: string({
      required_error: 'Nome is required',
    }),
    Obra: number({
      required_error: 'Obra is required',
    }),
  }),
});

export type CreateGrupoMateriaisInput = TypeOf<
  typeof createGrupoMateriaisSchema
>['body'];
