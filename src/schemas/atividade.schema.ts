import { any, number, object, string, TypeOf } from "zod";

export const createAtividadeSchema = object({
  body: object({
    nome: string({
      required_error: "Nome is required",
    }),
    ordem: number({
      required_error: "Ordem is required",
    }),
    unidade: string({
      required_error: "Unidade is required",
    }),
    etapa: any({
      required_error: "Etapa is required",
    }),
  }),
});

export type CreateAtividadeInput = TypeOf<typeof createAtividadeSchema>["body"];
