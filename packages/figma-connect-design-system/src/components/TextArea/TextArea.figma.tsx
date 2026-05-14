import { TextArea } from "./TextArea"
import figma from "@figma/code-connect"

const url =
  "https://www.figma.com/design/l6oLSjlDbBAyDqlHmvtvCI/%F0%9F%93%9A-MYOBDS-%E2%80%93-MCP-TEST--DO-NOT-USE?node-id=102-32"

figma.connect(TextArea, url, {
  variant: { variant: "default" },
  props: {
    label: figma.nestedProps("label", {
      value: figma.textContent("Children"),
    }),
    placeholder: figma.nestedProps("placeholder", {
      value: figma.textContent("Children"),
    }),
  },
  example: ({ label, placeholder, ...restProps }) => (
    <TextArea label={label.value} placeholder={placeholder.value} {...restProps} />
  ),
})

figma.connect(TextArea, url, {
  variant: { variant: "error" },
  props: {
    label: figma.nestedProps("label", {
      value: figma.textContent("Children"),
    }),
    placeholder: figma.nestedProps("placeholder", {
      value: figma.textContent("Children"),
    }),
    errorMessage: figma.nestedProps("errorMessage", {
      value: figma.textContent("Children"),
    }),
  },
  example: ({ label, placeholder, errorMessage, ...restProps }) => (
    <TextArea
      label={label.value}
      placeholder={placeholder.value}
      errorMessage={errorMessage.value}
      {...restProps}
    />
  ),
})
