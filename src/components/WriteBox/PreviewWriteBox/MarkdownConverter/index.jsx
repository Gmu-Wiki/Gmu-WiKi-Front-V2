import useMarkdown from "../../../../Hooks/useMarkdown";
import DOMPurify from "dompurify";

function MarkDownConverter({ value }) {
  const { markdownToHtml } = useMarkdown();

  const html = markdownToHtml(value);

  const cleanHtml = DOMPurify.sanitize(html);

  return (
    <>
      <div
        className="markdownConverter"
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </>
  );
}

export default MarkDownConverter;
