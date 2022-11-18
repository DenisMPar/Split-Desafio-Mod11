import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { Button } from "../../ui/button";
import Input from "../../ui/input";
import { Spinner } from "../../ui/loader";
import TextAreaComp from "../../ui/textArea";
import { TextArea } from "../../ui/textArea/styled";
import { BodyDesk, BodyMobile, SubTitleMobile, Tiny } from "../../ui/texts";
import { ContainerSuccessMessage, Form } from "./syled";
export function ContactForm() {
  const [state, handleSubmit] = useForm("mwkyjynb");
  if (state.succeeded) {
    return (
      <ContainerSuccessMessage>
        <div
          style={{
            backgroundColor: "#f6f9ff",
            borderRadius: "8px",
            padding: "18px",
            margin: "0 18px",
          }}
        >
          <Tiny>
            Gracias por registrarte! En cuanto comience la preventa nos
            pondremos en contacto por email.
          </Tiny>
        </div>
      </ContainerSuccessMessage>
    );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        <TextAreaComp label="Name:" id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Input type="email" id="email" name="email" label="email:" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <Button type="submit" disabled={state.submitting}>
        {state.submitting ? <Spinner /> : "Registrarme"}
      </Button>
    </Form>
  );
}
