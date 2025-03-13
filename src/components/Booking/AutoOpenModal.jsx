import { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

const AutoOpenModal = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Kiểm tra nếu là mobile

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? "90%" : 600, // Mobile 90%, Desktop 600px
          bgcolor: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          p: isMobile ? 3 : 4, // Mobile padding nhỏ hơn
          borderRadius: "12px",
          textAlign: "center",
          opacity: open ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "gray",
            "&:hover": {
              color: "black",
              transform: "scale(1.1)",
              transition: "0.2s",
            },
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: isMobile ? "1.2rem" : "1.5rem", // Mobile chữ nhỏ hơn
          }}
        >
          CHÀO MỪNG ĐẾN VỚI WEB CỦA HOÀNG
        </Typography>

        <Typography
          sx={{
            textAlign: "left",
            lineHeight: "1.6",
            fontSize: isMobile ? "0.9rem" : "1rem", // Mobile nhỏ hơn
          }}
        >
          🌍 Mình đã sử dụng những gì trong dự án này :<br />
          - HTML, CSS (Tailwind CSS) <br />
          - JavaScript (ES6+) <br />
          - ReactJS (Hook, Context API, UseReducer, UseState, useEffect, Redux,
          Redux Toolkit ...) <br />
          - RESTful API, Axios, Fetch <br />
          - GitHub <br />
          😍 Các Api mình sử dụng :<br />
          - Products: https://dummyjson.com <br />
          - Login: https://apiforlearning.zendvn.com <br />
          - Blog: https://apiforlearning.zendvn.com <br />
          - Và 1 số api khác như gửi Email khi mua hàng... <br />
          🚀 Các thư viện web khác bổ trợ :<br />
          - https://fontawesome.com/
          <br />
          - https://mui.com/
          <br />
          - https://www.emailjs.com/
          <br />
          - Và nhiều trang khác... <br />
        </Typography>
      </Box>
    </Modal>
  );
};

export default AutoOpenModal;
