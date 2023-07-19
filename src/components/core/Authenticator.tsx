import { PropsWithChildren } from "react";
import {
  Authenticator as AmplifyAuthenticator,
  ThemeProvider as AmplifyThemeProvider,
  Theme,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Box, Typography } from "@mui/material";

export const Authenticator: React.FC<PropsWithChildren> = ({ children }) => {
  const theme: Theme = {
    name: "bookshelf",
    tokens: {
      colors: {
        font: {
          secondary: { value: "{colors.brand.primary.90}" },
        },
        brand: {
          primary: {
            10: { value: "{colors.overlay.10}" },
            20: { value: "{colors.overlay.20}" },
            40: { value: "{colors.overlay.40}" },
            60: { value: "{colors.overlay.60}" },
            80: { value: "{colors.overlay.90}" },
            90: { value: "{colors.black}" },
            100: { value: "{colors.black}" },
          },
          secondary: {
            10: { value: "{colors.neutral.10}" },
            20: { value: "{colors.neutral.20}" },
            40: { value: "{colors.neutral.40}" },
            60: { value: "{colors.neutral.60}" },
            80: { value: "{colors.neutral.80}" },
            90: { value: "{colors.neutral.90}" },
            100: { value: "{colors.neutral.100}" },
          },
        },
      },
      radii: {
        small: { value: "0.75rem" },
      },
      components: {
        authenticator: {
          modal: {
            backgroundColor: { value: "{colors.blue.40}" },
          },
          router: {
            borderWidth: { value: "0" },
          },
          state: {
            inactive: {
              backgroundColor: { value: "{colors.brand.primary.100}" },
            },
          },
        },
        tabs: {
          item: {
            borderColor: { value: "{colors.brand.primary.100}" },
            color: { value: "{colors.brand.secondary.20}" },
            _active: {
              backgroundColor: { value: "{colors.brand.primary.100}" },
              color: { value: "{colors.brand.secondary.10}" },
              borderColor: { value: "{colors.brand.secondary.40}" },
            },
            _hover: {
              color: { value: "{colors.brand.secondary.40}" },
            },
            _focus: {
              color: { value: "{colors.brand.secondary.40}" },
            },
          },
        },
      },
    },
  };

  return (
    <AmplifyThemeProvider theme={theme}>
      <AmplifyAuthenticator
        variation="modal"
        signUpAttributes={["given_name", "family_name"]}
        components={{
          Header: () => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                background: "#000",
                color: "#fff",
                py: "1rem",
                borderRadius: "1rem 1rem 0 0",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 550, fontFamily: "fangsong" }}
              >
                Bookshelf
              </Typography>
            </Box>
          ),
          Footer: () => (
            <Box
              sx={{
                background: "#fff",
                borderRadius: " 0 0 1rem 1rem",
                py: "0.4rem",
              }}
            ></Box>
          ),
        }}
        formFields={{
          signIn: {
            username: {
              label: "Email",
              placeholder: "Enter your email",
            },
          },
          signUp: {
            username: {
              label: "Email",
              placeholder: "Enter your email",
            },
            given_name: {
              label: "First name",
              placeholder: "Enter your first name",
            },
            family_name: {
              label: "Last name",
              placeholder: "Enter your last name",
            },
          },
        }}
      >
        {children}
      </AmplifyAuthenticator>
    </AmplifyThemeProvider>
  );
};
