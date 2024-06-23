"use client";
import { useEffect } from "react";
import { Link, Stack } from "@mui/material";
import style from "@/styles/footer.module.css";

export function Footer() {
  useEffect(() => {
    const animatedContent = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(style.show);
        } else {
          entry.target.classList.remove(style.show);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(`.${style.hiddenlogo}`);
    hiddenElements.forEach((e) => animatedContent.observe(e));

    return () => {
      hiddenElements.forEach((e) => animatedContent.unobserve(e));
    };
  }, []);

  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        mt: "40px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        spacing={3}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack className={`${style.hidden} ${style.hiddenlogo}`}>
          <Link sx={{ mb: "10px" }} href="https://wa.me/+491638711521">
            <img
              style={{ height: "40px", width: "40px" }}
              src="/assets/icons/whatsapp.png"
              alt="WhatsApp"
            />
          </Link>
        </Stack>
        <Stack className={`${style.hidden} ${style.hiddenlogo}`}>
          <Link
            sx={{ mb: "10px" }}
            href="https://www.instagram.com/barbara_krinke_/"
          >
            <img
              style={{ height: "40px", width: "40px" }}
              src="/assets/icons/instagram.png"
              alt="Instagram"
            />
          </Link>
        </Stack>
        <Stack className={`${style.hidden} ${style.hiddenlogo}`}>
          <Link
            sx={{ mb: "10px" }}
            href="https://www.instagram.com/barbara_krinke_/"
          >
            <img
              style={{ height: "40px", width: "40px" }}
              src="/assets/icons/facebook.png"
              alt="Instagram"
            />
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
