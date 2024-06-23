import { Stack } from "@mui/material";

export default function BackgroundVideo() {
  return (
    <Stack>
      <video
        src="/assets/nails.mp4"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      />
    </Stack>
  );
}
