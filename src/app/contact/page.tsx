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
} from "@mui/material";
import BreadCrumb from "../components/utils/BreadCrumb";
import LowerTitle from "../components/utils/LowerTitle";
import Sheet from "../components/utils/Sheet";
import { theme } from "@/app/components/theme/theme";
import { Controller, useForm } from "react-hook-form";

const page = () => {
  const { control } = useForm({
    defaultValues: {
      name: "",
      furigana: "",
      company: "",
      position: "",
      tel: "",
      mail: "",
      staffing: false,
      recruitment_support: false,
      foreign_employment: false,
      others: false,
      inquiry_detail: "",
    },
  });
  return (
    <Sheet>
      <LowerTitle title="CONTACT" />
      <div className="mb-28">
        <BreadCrumb />
      </div>
      <div className="mb-24">
        <Box component="form">
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
                  required
                  label="お名前"
                  type="text"
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
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
                  required
                  label="ふりがな"
                  type="text"
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
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
                  required
                  label="会社名/組織名"
                  type="text"
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
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
                  required
                  label="電話番号"
                  type="tel"
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
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
                  required
                  label="メールアドレス"
                  type="email"
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
                />
              )}
            />

            <Box>
              <FormLabel required component="legend" sx={{ mb: 2 }}>
                お問い合わせの種類
              </FormLabel>
              <FormGroup>
                <Controller
                  name="staffing"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      {...field}
                      control={<Checkbox checked={field.value} />}
                      label="人材派遣について"
                    />
                  )}
                />

                <Controller
                  name="recruitment_support"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      {...field}
                      control={<Checkbox checked={field.value} />}
                      label="採用サポートについて"
                    />
                  )}
                />

                <Controller
                  name="foreign_employment"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      {...field}
                      control={<Checkbox checked={field.value} />}
                      label="外国人材の雇用について"
                    />
                  )}
                />

                <Controller
                  name="others"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      {...field}
                      control={<Checkbox checked={field.value} />}
                      label="その他"
                    />
                  )}
                />
              </FormGroup>
            </Box>

            <Controller
              name="inquiry_detail"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  label="お問い合わせの詳細"
                  type="text"
                  multiline
                  rows={10}
                  sx={{ borderColor: theme.palette.primary.main }}
                  fullWidth
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
};

export default page;
