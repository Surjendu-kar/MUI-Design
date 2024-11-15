import { Box, Button, keyframes, styled, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CodeViewer from "../../CodeViewer/CodeViewer";

const moveUpAlternate = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(80%);
  }
  51% {
    transform: translateY(-80%);
  }
  100% {
    transform: translateY(0);
  }
`;

const LetterAnimatedButton = styled(Button)(() => ({
  WebkitTapHighlightColor: "transparent",
  WebkitAppearance: "button",
  backgroundColor: "#000",
  color: "#fff",
  cursor: "pointer",
  fontFamily:
    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto",
  fontSize: "15px",
  lineHeight: 1.5,
  margin: 0,
  border: "1px solid",
  boxSizing: "border-box",
  display: "block",
  overflow: "hidden",
  padding: "0 20px",
  position: "relative",
  textTransform: "uppercase",
  height: "38px",

  "& .original": {
    background: "#fff",
    color: "#000",
    display: "grid",
    inset: 0,
    placeContent: "center",
    position: "absolute",
    transition: "transform 0.2s cubic-bezier(0.87, 0, 0.13, 1)",
  },

  "&:hover .original": {
    transform: "translateY(100%)",
  },

  "& .letters": {
    display: "inline-flex",
  },

  "& span": {
    opacity: 0,
    transform: "translateY(-15px)",
    transition: "transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s",
  },

  "& span:nth-of-type(2n)": {
    transform: "translateY(15px)",
  },

  "&:hover span": {
    opacity: 1,
    transform: "translateY(0)",
  },

  "&:hover span:nth-of-type(2)": {
    transitionDelay: "0.1s",
  },

  "&:hover span:nth-of-type(3)": {
    transitionDelay: "0.2s",
  },

  "&:hover span:nth-of-type(4)": {
    transitionDelay: "0.3s",
  },

  "&:hover span:nth-of-type(5)": {
    transitionDelay: "0.4s",
  },

  "&:hover span:nth-of-type(6)": {
    transitionDelay: "0.5s",
  },
}));

const CircleSlideButton = styled(Button)(() => ({
  fontFamily: "inherit",
  display: "inline-block",
  width: "6em",
  lineHeight: "2.5em",
  overflow: "hidden",
  fontSize: "15px",
  zIndex: 1,
  color: "#ffffff",
  border: "2px solid black",
  borderRadius: "6px",
  position: "relative",
  backgroundColor: "transparent",
  padding: 0,
  textTransform: "none",

  "&::before": {
    position: "absolute",
    content: '""',
    backgroundColor: "white",
    width: "150px",
    height: "200px",
    zIndex: -1,
    borderRadius: "50%",
    top: "100%",
    left: "100%",
    transition: "all 0.3s",
  },

  "&:hover": {
    color: "black",
    backgroundColor: "transparent",

    "&::before": {
      top: "-30px",
      left: "-30px",
    },
  },
}));

const AnimatedButton = styled(Button)(() => ({
  "&.MuiButton-root": {
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: 900,
    lineHeight: 1,
    margin: 0,
    height: "40px",
    padding: "0 40px",
    textTransform: "capitalize",
    borderRadius: "5px",
    borderWidth: "2px",
    zIndex: 0,
    overflow: "hidden",
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    WebkitAppearance: "button",
    mixBlendMode: "normal",

    "&:hover": {
      backgroundColor: "#000",
    },

    "& .text-container": {
      display: "block",
      position: "relative",
      overflow: "hidden",
      mixBlendMode: "difference",
    },

    "& .text": {
      display: "block",
      position: "relative",
    },

    "&:hover .text": {
      animation: `${moveUpAlternate} 0.3s forwards`,
    },

    "&::before, &::after": {
      "--skew": "0.2",
      background: "#fff",
      content: '""',
      display: "block",
      height: "102%",
      pointerEvents: "none",
      position: "absolute",
      transition: "transform 0.2s ease",
      width: "100%",
      transform:
        "skew(calc(150deg * var(--skew))) translateY(var(--progress, 0))",
    },

    "&::before": {
      left: "calc(-50% - 50% * var(--skew))",
      top: "-104%",
      "--progress": "0%",
    },

    "&::after": {
      left: "calc(50% + 50% * var(--skew))",
      top: "102%",
      zIndex: -1,
      "--progress": "0%",
    },

    "&:hover::before": {
      "--progress": "100%",
    },

    "&:hover::after": {
      "--progress": "-102%",
    },
  },
}));

const StyledButton = styled(Button)(() => ({
  textTransform: "capitalize",
  height: "40px",
  padding: "0 40px",
  position: "relative",
  overflow: "hidden",
  border: "1px solid #18181a",
  color: "#18181a",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  lineHeight: "15px",
  textDecoration: "none",
  cursor: "pointer",
  background: "#fff",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",

  "& .primary-text": {
    position: "relative",
    transition: "color 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    zIndex: 10,
  },

  "& .alternate-text": {
    color: "white",
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 500ms cubic-bezier(0.48, 0, 0.12, 1)",
    zIndex: 100,
    opacity: 0,
    top: 0,
    left: 0,
    transform: "translateY(100%)",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-50%",
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    transformOrigin: "bottom center",
    transition: "transform 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    transform: "skewY(9.3deg) scaleY(0)",
    zIndex: 50,
  },

  "&:hover::after": {
    transformOrigin: "bottom center",
    transform: "skewY(9.3deg) scaleY(2)",
  },

  "&:hover .alternate-text": {
    transform: "translateY(0)",
    opacity: 1,
    transition: "all 900ms cubic-bezier(0.48, 0, 0.12, 1)",
  },

  "&:hover .primary-text": {
    color: "transparent",
  },
}));

const PayButton = styled(Button)(() => ({
  width: "130px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(15, 15, 15)",
  border: "none",
  color: "white",
  fontWeight: 600,
  gap: "8px",
  cursor: "pointer",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.103)",
  position: "relative",
  overflow: "hidden",
  transitionDuration: "0.3s",
  textTransform: "none",

  "& svg": {
    width: "16px",
    height: "16px",
    fill: "currentColor",
  },

  "&::before": {
    width: "130px",
    height: "130px",
    position: "absolute",
    content: '""',
    backgroundColor: "white",
    borderRadius: "50%",
    left: "-100%",
    top: 0,
    transitionDuration: "0.3s",
    mixBlendMode: "difference",
  },

  "&:hover": {
    backgroundColor: "rgb(15, 15, 15)",
  },

  "&:hover::before": {
    transitionDuration: "0.3s",
    transform: "translate(100%,-50%)",
    borderRadius: 0,
  },

  "&:active": {
    transform: "translate(5px,5px)",
    transitionDuration: "0.3s",
  },
}));

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <CircleSlideButton disableRipple>Slide</CircleSlideButton>

      <LetterAnimatedButton>
        <Box className="original">Button</Box>
        <Box className="letters">
          <span>B</span>
          <span>U</span>
          <span>T</span>
          <span>T</span>
          <span>O</span>
          <span>N</span>
        </Box>
      </LetterAnimatedButton>

      <AnimatedButton disableRipple>
        <Typography className="text-container">
          <Typography className="text" component="span">
            Button
          </Typography>
        </Typography>
      </AnimatedButton>
      <StyledButton>
        <Typography className="primary-text">Save</Typography>
        <Typography className="alternate-text">Saving...</Typography>
      </StyledButton>
      <PayButton>
        Pay
        <CreditCardIcon sx={{ fontSize: 16 }} />
      </PayButton>
    </Box>
  );
};

const Button5 = () => {
  const shortCode = `<CircleSlideButton disableRipple>Slide</CircleSlideButton>

<LetterAnimatedButton>
  <Box className="original">Button</Box>
  <Box className="letters">
    <span>B</span>
    <span>U</span>
    <span>T</span>
    <span>T</span>
    <span>O</span>
    <span>N</span>
  </Box>
</LetterAnimatedButton> 

<AnimatedButton disableRipple>
  <Typography className="text-container">
    <Typography className="text" component="span">
      Button
    </Typography>
  </Typography>
</AnimatedButton>

<StyledButton>
  <Typography className="primary-text">Save</Typography>
  <Typography className="alternate-text">Saving...</Typography>
</StyledButton>

<PayButton>
  Pay
  <CreditCardIcon sx={{ fontSize: 16 }} />
</PayButton>`;

  const fullCode = `import { Box, Button, keyframes, styled, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const moveUpAlternate = keyframes\`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(80%);
  }
  51% {
    transform: translateY(-80%);
  }
  100% {
    transform: translateY(0);
  }
\`;

const CircleSlideButton = styled(Button)(() => ({
  fontFamily: "inherit",
  display: "inline-block",
  width: "6em",
  lineHeight: "2.5em",
  overflow: "hidden",
  fontSize: "15px",
  zIndex: 1,
  color: "#ffffff",
  border: "2px solid black",
  borderRadius: "6px",
  position: "relative",
  backgroundColor: "transparent",
  padding: 0,
  textTransform: "none",

  "&::before": {
    position: "absolute",
    content: '""',
    backgroundColor: "white",
    width: "150px",
    height: "200px",
    zIndex: -1,
    borderRadius: "50%",
    top: "100%",
    left: "100%",
    transition: "all 0.3s",
  },

  "&:hover": {
    color: "black",
    backgroundColor: "transparent",

    "&::before": {
      top: "-30px",
      left: "-30px",
    },
  },
}));

const LetterAnimatedButton = styled(Button)(() => ({
  WebkitTapHighlightColor: "transparent",
  WebkitAppearance: "button",
  backgroundColor: "#000",
  color: "#fff",
  cursor: "pointer",
  fontFamily:
    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto",
  fontSize: "15px",
  lineHeight: 1.5,
  margin: 0,
  border: "1px solid",
  boxSizing: "border-box",
  display: "block",
  overflow: "hidden",
  padding: "0 20px",
  position: "relative",
  textTransform: "uppercase",
  height: "38px",

  "& .original": {
    background: "#fff",
    color: "#000",
    display: "grid",
    inset: 0,
    placeContent: "center",
    position: "absolute",
    transition: "transform 0.2s cubic-bezier(0.87, 0, 0.13, 1)",
  },

  "&:hover .original": {
    transform: "translateY(100%)",
  },

  "& .letters": {
    display: "inline-flex",
  },

  "& span": {
    opacity: 0,
    transform: "translateY(-15px)",
    transition: "transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s",
  },

  "& span:nth-of-type(2n)": {
    transform: "translateY(15px)",
  },

  "&:hover span": {
    opacity: 1,
    transform: "translateY(0)",
  },

  "&:hover span:nth-of-type(2)": {
    transitionDelay: "0.1s",
  },

  "&:hover span:nth-of-type(3)": {
    transitionDelay: "0.2s",
  },

  "&:hover span:nth-of-type(4)": {
    transitionDelay: "0.3s",
  },

  "&:hover span:nth-of-type(5)": {
    transitionDelay: "0.4s",
  },

  "&:hover span:nth-of-type(6)": {
    transitionDelay: "0.5s",
  },
}));

const AnimatedButton = styled(Button)(() => ({
  "&.MuiButton-root": {
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: 900,
    lineHeight: 1,
    margin: 0,
    height: "40px",
    padding: "0 40px",
    textTransform: "capitalize",
    borderRadius: "5px",
    borderWidth: "2px",
    zIndex: 0,
    overflow: "hidden",
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    WebkitAppearance: "button",
    mixBlendMode: "normal",

    "&:hover": {
      backgroundColor: "#000",
    },

    "& .text-container": {
      display: "block",
      position: "relative",
      overflow: "hidden",
      mixBlendMode: "difference",
    },

    "& .text": {
      display: "block",
      position: "relative",
    },

    "&:hover .text": {
      animation: \`\${moveUpAlternate} 0.3s forwards\`,
    },

    "&::before, &::after": {
      "--skew": "0.2",
      background: "#fff",
      content: '""',
      display: "block",
      height: "102%",
      pointerEvents: "none",
      position: "absolute",
      transition: "transform 0.2s ease",
      width: "100%",
      transform:
        "skew(calc(150deg * var(--skew))) translateY(var(--progress, 0))",
    },

    "&::before": {
      left: "calc(-50% - 50% * var(--skew))",
      top: "-104%",
      "--progress": "0%",
    },

    "&::after": {
      left: "calc(50% + 50% * var(--skew))",
      top: "102%",
      zIndex: -1,
      "--progress": "0%",
    },

    "&:hover::before": {
      "--progress": "100%",
    },

    "&:hover::after": {
      "--progress": "-102%",
    },
  },
}));

const StyledButton = styled(Button)(() => ({
  textTransform: "capitalize",
  height: "40px",
  padding: "0 40px",
  position: "relative",
  overflow: "hidden",
  border: "1px solid #18181a",
  color: "#18181a",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  lineHeight: "15px",
  textDecoration: "none",
  cursor: "pointer",
  background: "#fff",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",

  "& .primary-text": {
    position: "relative",
    transition: "color 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    zIndex: 10,
  },

  "& .alternate-text": {
    color: "white",
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 500ms cubic-bezier(0.48, 0, 0.12, 1)",
    zIndex: 100,
    opacity: 0,
    top: 0,
    left: 0,
    transform: "translateY(100%)",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-50%",
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    transformOrigin: "bottom center",
    transition: "transform 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    transform: "skewY(9.3deg) scaleY(0)",
    zIndex: 50,
  },

  "&:hover::after": {
    transformOrigin: "bottom center",
    transform: "skewY(9.3deg) scaleY(2)",
  },

  "&:hover .alternate-text": {
    transform: "translateY(0)",
    opacity: 1,
    transition: "all 900ms cubic-bezier(0.48, 0, 0.12, 1)",
  },

  "&:hover .primary-text": {
    color: "transparent",
  },
}));

const PayButton = styled(Button)(() => ({
  width: "130px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(15, 15, 15)",
  border: "none",
  color: "white",
  fontWeight: 600,
  gap: "8px",
  cursor: "pointer",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.103)",
  position: "relative",
  overflow: "hidden",
  transitionDuration: "0.3s",
  textTransform: "none",

  "& svg": {
    width: "16px",
    height: "16px",
    fill: "currentColor",
  },

  "&::before": {
    width: "130px",
    height: "130px",
    position: "absolute",
    content: '""',
    backgroundColor: "white",
    borderRadius: "50%",
    left: "-100%",
    top: 0,
    transitionDuration: "0.3s",
    mixBlendMode: "difference",
  },

  "&:hover": {
    backgroundColor: "rgb(15, 15, 15)",
  },

  "&:hover::before": {
    transitionDuration: "0.3s",
    transform: "translate(100%,-50%)",
    borderRadius: 0,
  },

  "&:active": {
    transform: "translate(5px,5px)",
    transitionDuration: "0.3s",
  },
}));

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <CircleSlideButton disableRipple>Slide</CircleSlideButton>

      <LetterAnimatedButton>
        <Box className="original">Button</Box>
        <Box className="letters">
          <span>B</span>
          <span>U</span>
          <span>T</span>
          <span>T</span>
          <span>O</span>
          <span>N</span>
        </Box>
      </LetterAnimatedButton> 

      <AnimatedButton disableRipple>
        <Typography className="text-container">
          <Typography className="text" component="span">
            Button
          </Typography>
        </Typography>
      </AnimatedButton>

      <StyledButton>
        <Typography className="primary-text">Save</Typography>
        <Typography className="alternate-text">Saving...</Typography>
      </StyledButton>

      <PayButton>
        Pay
        <CreditCardIcon sx={{ fontSize: 16 }} />
      </PayButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button5;
