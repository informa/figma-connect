import { Box } from "./Box"
import figma from "@figma/code-connect"

figma.connect(
  Box,
  "https://www.figma.com/design/l6oLSjlDbBAyDqlHmvtvCI/%F0%9F%93%9A-MYOBDS-%E2%80%93-MCP-TEST--DO-NOT-USE?node-id=83-28",
  {
    props: {
      backgroundColor: figma.enum("background", {
        default: "default",
        neutral: "neutral", 
        info: "info",
        warning: "warning",
      }),
      borderRadius: figma.enum("borderRadius", {
        clear: "clear",
        sm: "sm",
        md: "md",
      }),
      boxShadow: figma.enum("shadow", {
        clear: "clear",
        weak: "weak", 
        strong: "strong",
      }),
      borderColor: figma.enum("border", {
        clear: "clear",
        default: "default",
        info: "info",
        danger: "danger",
      }),
      borderWidth: figma.enum("border", {
        clear: undefined,
        default: 1,
        info: 1,
        danger: 1,
      }),
      borderStyle: figma.enum("border", {
        clear: undefined,
        default: "solid",
        info: "solid", 
        danger: "solid",
      }),
    },
    example: ({ backgroundColor, borderRadius, boxShadow, borderColor, borderWidth, borderStyle, ...restProps }) => (
      <Box 
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
        borderColor={borderColor}
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        {...restProps}
      >
        {/* Box content */}
      </Box>
    ),
  },
)