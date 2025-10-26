import { Text } from "./Text"
import figma from "@figma/code-connect"

figma.connect(
  Text,
  "https://www.figma.com/design/l6oLSjlDbBAyDqlHmvtvCI/%F0%9F%93%9A-MYOBDS-%E2%80%93-MCP-TEST--DO-NOT-USE?node-id=31-116",
  {
    props: {
      type: figma.enum("type", {
        "H1": "h1",
        "H2": "h2",
        "H3": "h3",
        "H4": "h4",
        "H5": "h5",
        "H6": "h6",
        "paragraph": "paragraph"
      }),
      color: figma.enum("color", {
        "default": "default",
        "danger": "danger",
        "inverse": "inverse",
      }),
      children: figma.textContent("Children"),
    },
    example: ({ children, ...restProps }) => <Text {...restProps}>{children}</Text>,
  },
)
