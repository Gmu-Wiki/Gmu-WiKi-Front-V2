import useMarkdown from "../../../../Hooks/useMarkdown";

function MarkDownConverter({ value }) {
  const { markdownToHtml } = useMarkdown();

  const html = markdownToHtml(value);

  return (
    <>
      <div
        className="markdownConverter"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}

export default MarkDownConverter;
