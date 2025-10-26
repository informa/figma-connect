import { TextArea } from "./TextArea"
import figma from "@figma/code-connect"

figma.connect(
  TextArea,
  "https://www.figma.com/design/l6oLSjlDbBAyDqlHmvtvCI/%F0%9F%93%9A-MYOBDS-%E2%80%93-MCP-TEST--DO-NOT-USE?node-id=102-32",
  {
    props: {
      label: figma.textContent("label"),
      placeholder: figma.textContent("placeholder"),
      errorMessage: figma.enum("variant", {
        error: figma.textContent("errorMessage"),
      }),
    },
    example: ({ label, placeholder, errorMessage }) => (
      <TextArea 
        label={label}
        placeholder={placeholder}
        errorMessage={errorMessage}
      />
    ),
  },
)