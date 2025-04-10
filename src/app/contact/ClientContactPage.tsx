"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import BreadCrumb from "../components/utils/BreadCrumb";
import LowerTitle from "../components/utils/LowerTitle";
import Sheet from "../components/utils/Sheet";
import { theme } from "@/app/components/theme/theme";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../_validations/scheme";
import { sendFormDataToHubSpot, FormData } from "../_actions/contact";
import { useEffect, useState } from "react";

export default function ClientContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false); // 送信成功状態
  const [error, setError] = useState<string | null>(null); // エラー状態

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: "smooth" }); // 画面を一番上にスクロール
    }
  }, [isSubmitted]);

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      furigana: "",
      company: "",
      position: "",
      tel: "",
      mail: "",
      inquires: {
        staffing: false,
        recruitment_support: false,
        foreign_employment: false,
        others: false,
      },
      inquiry_detail: "",
    },
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await sendFormDataToHubSpot(data);
      setIsSubmitted(true); // 成功時に状態を変更
    } catch (err) {
      setError("送信に失敗しました。もう一度お試しください。");
      console.error(err);
    }
  };

  const inquires = watch("inquires");
  // inquiresの型を取得する
  type InquireKeys = keyof typeof inquires;

  if (isSubmitted) {
    return (
      <Sheet>
        <LowerTitle title="CONTACT" />
        <div className="mb-28">
          <BreadCrumb />
        </div>
        <div className="mb-24 flex h-[50vh] items-center justify-center border border-main-green px-5">
          <p className="text-center text-[min(4vw,20px)] leading-relaxed">
            お問い合わせいただき、誠にありがとうございます。
            <br />
            送信が完了いたしました。担当者より3営業日以内にご連絡させていただきます。
            <br />
            今しばらくお待ちください。
          </p>
        </div>
      </Sheet>
    );
  }

  return (
    <Sheet>
      <LowerTitle title="CONTACT" />
      <div className="mb-28">
        <BreadCrumb />
      </div>
      <div className="mb-24">
        <p className="mx-auto mb-16 w-[90%] text-[min(4vw,20px)] leading-loose">
          以下の項目に必要事項をご入力いただき、内容をご確認の上、「送信」ボタンを押してください。
          <br />
          ※印は必須項目です。
          <br />
          ご提供いただいた情報は、お問い合わせの対応およびご連絡以外の目的では使用いたしません。
        </p>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={6}
            sx={{
              width: "90%",
              mx: "auto",
            }}
          >
            {/* お名前 */}
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="お名前*"
                  type="text"
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />

            {/* ふりがな */}
            <Controller
              name="furigana"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="ふりがな*"
                  type="text"
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
                  error={!!errors.furigana}
                  helperText={errors.furigana?.message}
                />
              )}
            />

            {/* 会社名/組織名 */}
            <Controller
              name="company"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="会社名/組織名*"
                  type="text"
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
                  error={!!errors.company}
                  helperText={errors.company?.message}
                />
              )}
            />

            {/* 部署名/役職名 */}
            <Controller
              name="position"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="部署名/役職"
                  type="text"
                  placeholder="人事部 部長"
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
                />
              )}
            />

            {/* 電話番号 */}
            <Controller
              name="tel"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="電話番号*"
                  type="tel"
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
                  error={!!errors.tel}
                  helperText={errors.tel?.message}
                />
              )}
            />

            {/* メールアドレス */}
            <Controller
              name="mail"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="メールアドレス*"
                  type="email"
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
                  error={!!errors.mail}
                  helperText={errors.mail?.message}
                />
              )}
            />

            <Box>
              <FormLabel
                component="legend"
                sx={{ mb: 2 }}
                error={!!errors.inquires}
              >
                お問い合わせの種類*
              </FormLabel>
              {errors.inquires && (
                <Typography color="error">
                  {errors.inquires.root?.message}
                </Typography>
              )}
              <FormGroup>
                {Object.keys(inquires).map((key) => (
                  <Controller
                    key={key}
                    name={`inquires.${key}` as `inquires.${InquireKeys}`}
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        {...field}
                        control={<Checkbox checked={field.value} />}
                        label={
                          key === "staffing"
                            ? "人材派遣について"
                            : key === "recruitment_support"
                              ? "採用サポートについて"
                              : key === "foreign_employment"
                                ? "外国人材の雇用について"
                                : "その他"
                        }
                      />
                    )}
                  />
                ))}
              </FormGroup>
            </Box>

            <Controller
              name="inquiry_detail"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="お問い合わせの詳細*"
                  type="text"
                  multiline
                  rows={10}
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
                  error={!!errors.inquiry_detail}
                  helperText={errors.inquiry_detail?.message}
                />
              )}
            />

            {error && (
              <Box>
                <Typography color="error" align="center" sx={{ mb: 4 }}>
                  {error}
                </Typography>
              </Box>
            )}
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{ p: 2, maxWidth: "500px" }}
                fullWidth
              >
                <span className="text-base tracking-wider lg:text-xl">
                  送信
                </span>
              </Button>
            </Box>
          </Stack>
        </Box>
      </div>
    </Sheet>
  );
}
