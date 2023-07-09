import useMarkdown from "../../../../Hooks/useMarkdown";
import * as S from "./style";

function MarkDownConverter({ value }) {
  const {markdownToHtml} = useMarkdown();
  
  const html = markdownToHtml(value);
    
  return (
    <S.MarkdownContainer>
      <div dangerouslySetInnerHTML={{ __html: html }} />
   </S.MarkdownContainer>
  );
}

export default MarkDownConverter;
