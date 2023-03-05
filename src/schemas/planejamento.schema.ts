import { any, number, object, string, TypeOf } from "zod";

export const createPlanejamentoSchema = object({
  body: object({
    etapa: any({
      required_error: "Etapa is required",
    }),
    atividade: any({
      required_error: "Atividade is required",
    }),
    unidade: any({
      required_error: "Unidade is required",
    }),
    ordem: any({
      required_error: "Ordem is required",
    }),
    total: number({
      required_error: "Total is required",
    }),
    executado: number({
      required_error: "Executado is required",
    }),
    previsao_fim: string({
      required_error: "Previsao fim is required",
    }),
  }),
});

export type CreatePlanejamentoInput = TypeOf<
  typeof createPlanejamentoSchema
>["body"];
