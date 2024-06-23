import { Stack } from "@mui/material";
import Header from "@/components/Header";
import BackgroundVideo from "@/components/BackgroundVideo";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <Stack>
      <Header />
      <BackgroundVideo />
      <Stack
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Footer />
      </Stack>
    </Stack>
  );
}
