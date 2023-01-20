import { number, object, string, TypeOf } from 'zod';

export const createObraSchema = object({
  body: object({
    user: string({
      required_error: 'Nome is required',
    }),
    Empreendimento: string({
      required_error: 'Empreendimento is required',
    }),
    Endereço: string({
      required_error: 'Endereço is required',
    }),
    Estado: string({
      required_error: 'Estado is required',
    }),
    Regiao: string({
      required_error: 'Regiao is required',
    }),
    Assinatura_Contrato: string({
      required_error: 'Assinatura_Contrato is required',
    }),
    Alvara_Exec: string({
      required_error: 'Alvara_Exec is required',
    }),
    Prazo_Exec: number({
      required_error: 'Prazo_Exec is required',
    }),
    Data_Final: string({
      required_error: 'Data_Final is required',
    }),
    prazo_exec_invest: string({
      required_error: 'prazo_exec_invest is required',
    }),
    Início_atividades: string({
      required_error: 'Início_atividades is required',
    }),
    Coordenacao: string({
      required_error: 'Coordenacao is required',
    }),
    Gestor: string({
      required_error: 'Gestor is required',
    }),
  }),
});

export type CreateObraInput = TypeOf<typeof createObraSchema>['body'];
