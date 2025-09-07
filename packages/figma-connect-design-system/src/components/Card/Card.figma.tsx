import { Card } from "./Card"
import figma from "@figma/code-connect"

figma.connect(
  Card,
  "https://www.figma.com/design/l6oLSjlDbBAyDqlHmvtvCI/%F0%9F%93%9A-MYOBDS-%E2%80%93-MCP-TEST--DO-NOT-USE?node-id=51-5",
  {
    props: {
      variant: figma.enum("Variant", {
        Default: "default",
        Elevated: "elevated",
        Flat: "flat",
      }),
      children: figma.textContent("Children"),
      title: figma.nestedProps('Heading', {
        children: figma.textContent('Children'),
      }),
      actions: figma.children(["Button"]),
    },
    example: ({children, title, actions, ...restProps}) => (
      <Card 
        title={title.children} 
        actions={actions} 
        {...restProps}
      >
        {children}
      </Card>
    ),
  },
)
