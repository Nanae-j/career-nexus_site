import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import BreadCrumb from "../components/utils/BreadCrumb";
import LowerTitle from "../components/utils/LowerTitle";
import Sheet from "../components/utils/Sheet";
import { theme } from "@/app/components/theme/theme";
import { useState } from "react";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";

const page = () => {
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
            <TextField
              required
              id="name"
              name="name"
              label="お名前"
              type="text"
              sx={{ borderColor: theme.palette.primary.main }}
              fullWidth
            />
            <TextField
              required
              id="furigana"
              name="furigana"
              label="ふりがな"
              type="text"
              sx={{ borderColor: theme.palette.primary.main }}
              fullWidth
            />
            <TextField
              required
              id="company"
              name="company"
              label="会社名/組織名"
              type="text"
              sx={{ borderColor: theme.palette.primary.main }}
              fullWidth
            />
            <TextField
              id="position"
              name="position"
              label="部署名/役職"
              type="text"
              placeholder="人事部 部長"
              sx={{ borderColor: theme.palette.primary.main }}
              fullWidth
            />
            <TextField
              required
              id="tel"
              name="tel"
              label="電話番号"
              type="tel"
              sx={{ borderColor: theme.palette.primary.main }}
              fullWidth
            />
            <TextField
              required
              id="mail"
              name="mail"
              label="メールアドレス"
              type="email"
              sx={{ borderColor: theme.palette.primary.main }}
              fullWidth
            />

            <Box>
              <FormLabel required component="legend" sx={{ mb: 2 }}>
                お問い合わせの種類
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="staffing" />}
                  label="人材派遣について"
                />
                <FormControlLabel
                  control={<Checkbox name="recruitment_support" />}
                  label="採用サポートについて"
                />
                <FormControlLabel
                  control={<Checkbox name="foreign_employment" />}
                  label="外国人材の雇用について"
                />
                <FormControlLabel
                  control={<Checkbox name="others" />}
                  label="その他"
                />
              </FormGroup>
            </Box>

            <TextField
              required
              id="inquiry-detail"
              name="inquiry_detail"
              label="お問い合わせの詳細"
              type="text"
              multiline
              rows={10}
              sx={{ borderColor: theme.palette.primary.main }}
              fullWidth
            />

            <Button variant="contained" type="submit" sx={{ p: 2 }}>
              送信
            </Button>
          </Stack>
        </Box>
      </div>
    </Sheet>
  );
};

export default page;
