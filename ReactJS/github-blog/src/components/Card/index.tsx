import { Posts } from "../../pages/Home";
import { limitDescription } from "../../utils";
import { relativeDateFormatter } from "../../utils/formatter";
import { CardContainer } from "./styles";

export function Card({ body,created_at,number,title }: Posts) {
  return (
    <CardContainer>
      <header>
        <h2>{title}</h2>
        <span>{relativeDateFormatter(created_at)}</span>
      </header>
      <footer>
        {limitDescription(body)}
      </footer>
    </CardContainer>
  );
}
