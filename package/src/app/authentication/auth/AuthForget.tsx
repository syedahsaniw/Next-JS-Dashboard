import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

interface AuthForgetProps {
  subtext?: React.ReactNode;
  subtitle?: React.ReactNode;
}

const AuthForget: React.FC<AuthForgetProps> = ({ subtext, subtitle }) => (
  <>
    <Typography fontWeight="700" variant="h2" mb={1} textAlign="center">
      Forgot Password
    </Typography>
    <Typography
      variant="subtitle1"
      textAlign="center"
      color="textSecondary"
      mb={1}
    >
      Enter your email address and we'll send you a link to reset your password.
    </Typography>
    <CustomTextField
      variant="outlined"
      fullWidth
      label="Email Address"
      type="email"
    />
    <Box mt={2}>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="/authentication/login"
      >
        Send Reset Link
      </Button>
    </Box>
  </>
);

export default AuthForget;
