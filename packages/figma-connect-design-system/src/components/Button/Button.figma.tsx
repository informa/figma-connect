import { Button } from "./Button"
import figma from "@figma/code-connect"

figma.connect(
  Button,
  "https://www.figma.com/design/l6oLSjlDbBAyDqlHmvtvCI/%F0%9F%93%9A-MYOBDS-%E2%80%93-MCP-TEST--DO-NOT-USE?node-id=29-97",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Destructive: "destructive",
      }),
      size: figma.enum("Size", {
        Small: "small",
        Large: "large",
      }),
      children: figma.textContent("Children"),
    },
    example: ({children, ...restProps}) => <Button {...restProps}>{children}</Button>,
  },
)
