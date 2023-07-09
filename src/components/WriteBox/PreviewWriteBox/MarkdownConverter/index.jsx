import useMarkdown from "../../../../Hooks/useMarkdown";
import "./style.css";

function MarkDownConverter({ value }) {
  const {markdownToHtml} = useMarkdown();
  
  const html = markdownToHtml(value);
    
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default MarkDownConverter;
