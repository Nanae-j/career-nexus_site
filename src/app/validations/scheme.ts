import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "お名前は必須です" }),
  furigana: z.string().min(1, { message: "ふりがなは必須です" }),
  company: z.string().min(1, { message: "会社名/組織名は必須です" }),
  position: z.string(),
  tel: z
    .string()
    .regex(/^\d{10,11}$/, {
      message: "電話番号は10~11桁の数字で入力してください",
    })
    .min(1, { message: "電話番号は必須です" }),
  mail: z
    .string()
    .email({ message: "正しいメールアドレスを入力してください" })
    .min(1, { message: "メールアドレスは必須です" }),
  inquiry_detail: z
    .string()
    .min(1, { message: "お問い合わせの詳細は必須です" }),
  inquires: z
    .object({
      staffing: z.boolean(),
      recruitment_support: z.boolean(),
      foreign_employment: z.boolean(),
      others: z.boolean(),
    })
    .refine(
      (data) => Object.values(data).some((value) => value), // 少なくとも1つ選択されているか確認
      { message: "お問い合わせの種類を少なくとも1つ選択してください。" }
    ),
});

export type Schema = z.infer<typeof contactSchema>;
