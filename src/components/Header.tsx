import { Button, Stack } from "@mui/material";
import styles from "@/styles/style.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const pages: string[] = ["Über Mich", "Zertifikate", "Kontakt"];
  const router = useRouter();

  const getRoute = (pages: string[]): Promise<boolean> | undefined => {
    pages.map((page) => {
      if (page === "Über Mich") {
        return router.push("/about");
      } else if (page === "Zertifikate") {
        return router.push("/about");
      } else if (page === "Kontakt") {
        return router.push("/about");
      }
    });
    return undefined;
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      className={styles.header}
      sx={{
        position: "sticky",
        boxShadow: "0 -6px 30px 5px rgba(0,0,0,0.5)",
        height: "8vh",
        justifyContent: "space-between",
      }}
    >
      <Stack sx={{ fontSize: 26, color: "#df1010", ml: "2vw" }}>
        Nails4You
      </Stack>
      <Stack
        direction="row"
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => getRoute(pages)}
            sx={{
              mx: 1,
              whiteSpace: "nowrap",
              fontSize: 18,
            }}
            variant="text"
            color="secondary"
          >
            {page}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
