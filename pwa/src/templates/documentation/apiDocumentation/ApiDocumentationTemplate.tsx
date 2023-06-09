import * as React from "react";
import * as styles from "./ApiDocumentationTemplate.module.css";
import { Container } from "@conduction/components";
import { Heading1, LeadParagraph, Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { ExternalLinkIcon } from "@gemeente-denhaag/icons";

export const ApiDocumentationTemplate: React.FC = () => {
  return (
    <Container layoutClassName={styles.container}>
      <section className={styles.section}>
        <Heading1>API Documentatie</Heading1>

        <LeadParagraph>
          Quisque id mi. Vivamus in erat ut urna cursus vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia Curae Sed aliquam.{" "}
          <span
            onClick={() => {
              navigate("#");
            }}
          >
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              Lees meer.
            </Link>
          </span>{" "}
          Nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
        </LeadParagraph>
      </section>
    </Container>
  );
};
