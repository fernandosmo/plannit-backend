import { any, object, string, TypeOf } from "zod";

export const createTrechoSchema = object({
  body: object({
    nome: string({
      required_error: "Nome is required",
    }),
    setor: any({
      required_error: "Setor is required",
    }),
    rua: any({
      required_error: "Rua is required",
    }),
  }),
});

export type CreateTrechoInput = TypeOf<typeof createTrechoSchema>["body"];
