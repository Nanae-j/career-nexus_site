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
import { sendFormDataToHubSpot } from "../_actions/contact";

export default function Page() {
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
  interface FormData {
    name: string;
    furigana: string;
    company: string;
    position: string;
    tel: string;
    mail: string;
    inquiry_detail: string;
    // inquires: {
    //   [key: string]: boolean;
    // };
  }

  const onSubmit = (data: FormData) => {
    // console.log(data);
    sendFormDataToHubSpot(data);
  };

  const inquires = watch("inquires");
  // inquiresの型を取得する
  type InquireKeys = keyof typeof inquires;

  return (
    <Sheet>
      <LowerTitle title="CONTACT" />
      <div className="mb-28">
        <BreadCrumb />
      </div>
      <div className="mb-24">
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
