import { Input } from "./Input"
import figma from "@figma/code-connect"

// Rename Text instances under Input to: Label, Placeholder, and Error (error variant only).
// Inner text layers on Text stay named "Children" (Text component default).
const url =
  "https://www.figma.com/design/l6oLSjlDbBAyDqlHmvtvCI/%F0%9F%93%9A-MYOBDS-%E2%80%93-MCP-TEST--DO-NOT-USE?node-id=96-169"

figma.connect(Input, url, {
  variant: { variant: "default" },
  props: {
    label: figma.nestedProps("Label", {
      value: figma.textContent("Children"),
    }),
    placeHolder: figma.nestedProps("Placeholder", {
      value: figma.textContent("Children"),
    }),
  },
  example: ({ label, placeHolder, ...restProps }) => (
    <Input label={label.value} placeHolder={placeHolder.value} {...restProps} />
  ),
})

figma.connect(Input, url, {
  variant: { variant: "error" },
  props: {
    label: figma.nestedProps("Label", {
      value: figma.textContent("Children"),
    }),
    placeHolder: figma.nestedProps("Placeholder", {
      value: figma.textContent("Children"),
    }),
    errorMessage: figma.nestedProps("Error", {
      value: figma.textContent("Children"),
    }),
  },
  example: ({ label, placeHolder, errorMessage, ...restProps }) => (
    <Input
      label={label.value}
      placeHolder={placeHolder.value}
      errorMessage={errorMessage.value}
      {...restProps}
    />
  ),
})
