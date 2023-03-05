import { any, number, object, string, TypeOf } from "zod";

export const createCriacaoPlanejamentoSchema = object({
  body: object({
    user: any({
      required_error: "User is required",
    }),
    obra: any({
      required_error: "Obra is required",
    }),
    etapa: any({
      required_error: "Etapa is required",
    }),
    atividade: any({
      required_error: "Atividade is required",
    }),
    rua: any({
      required_error: "Rua is required",
    }),
    setor: any({
      required_error: "Setor is required",
    }),
    trecho: any({
      required_error: "Trecho is required",
    }),
    grupo_materiais: any({
      required_error: "Grupo materiais is required",
    }),
    material: any({
      required_error: "Material is required",
    }),
    qtde: number({
      required_error: "Qtde is required",
    }),
    Data_criacao: string({
      required_error: "Data criação is required",
    }),
    Data_prevista: string({
      required_error: "Data prevista is required",
    }),
    executado: number({
      required_error: "Executado is required",
    }),
  }),
});

export type CreateCriacaoPlanejamentoInput = TypeOf<
  typeof createCriacaoPlanejamentoSchema
>["body"];
