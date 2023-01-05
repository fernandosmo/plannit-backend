import { any, number, object, string, TypeOf } from 'zod';

export const createMaterialSchema = object({
  body: object({
    grupo: any({
      required_error: 'Grupo is required',
    }),
    descricao: string({
      required_error: 'Descricao is required',
    }),
    custo: number({
      required_error: 'Custo is required',
    }),
    produtividade_dia_equipe: number({
      required_error: 'Produtividade_dia_equipe is required',
    }),
  }),
});

export type CreateMaterialInput = TypeOf<typeof createMaterialSchema>['body'];
