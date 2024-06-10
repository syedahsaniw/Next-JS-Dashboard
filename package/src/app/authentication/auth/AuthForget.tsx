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
    <h2>Forgot your password?</h2>
    </Typography>
    <Typography
      variant="subtitle1"
      textAlign="center"
      color="textSecondary"
      mb={1}
    >
      <p>Don&rsquo;t worry, we&rsquo;ll help you reset it. Just enter your email below.</p>
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
