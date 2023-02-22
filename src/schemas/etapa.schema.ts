import { any, object, string, TypeOf } from "zod";

export const createEtapaSchema = object({
  body: object({
    obra: any({
      required_error: "Obra is required",
    }),
    nome: string({
      required_error: "Nome is required",
    }),
  }),
});

export type CreateEtapaInput = TypeOf<typeof createEtapaSchema>["body"];
