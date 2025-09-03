import { Card } from "./Card"
import figma from "@figma/code-connect"

figma.connect(
  Card,
  "https://www.figma.com/design/l6oLSjlDbBAyDqlHmvtvCI/%F0%9F%93%9A-MYOBDS-%E2%80%93-MCP-TEST--DO-NOT-USE?node-id=31-31",
  {
    props: {
      variant: figma.enum("Variant", {
        Default: "default",
        Elevated: "elevated",
        Flat: "flat",
      }),
      children: figma.textContent("Children"),
      title: figma.textContent("Title"),
      // actions: figma.array("Actions", figma.component("Button")),
    },
    example: ({children, ...restProps}) => <Card {...restProps}>{children}</Card>,
  },
)
