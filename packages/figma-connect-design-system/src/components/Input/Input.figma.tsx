import { Input } from "./Input"
import figma from "@figma/code-connect"

figma.connect(
  Input,
  "https://www.figma.com/design/l6oLSjlDbBAyDqlHmvtvCI/%F0%9F%93%9A-MYOBDS-%E2%80%93-MCP-TEST--DO-NOT-USE?node-id=96-169",
  {
    props: {
      label: figma.textContent("Text"),
      placeholder: figma.textContent("Input text"),
      errorMessage: figma.enum("variant", {
        error: figma.textContent("Error message"),
      }),
    },
    example: ({ label, placeholder, errorMessage, ...restProps }) => (
      <Input 
        label={label}
        placeholder={placeholder}
        errorMessage={errorMessage}
        {...restProps}
      />
    ),
  },
)