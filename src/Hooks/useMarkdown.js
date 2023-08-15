import { marked } from 'marked';

function useMarkdown() {

  const initialState = href => (href.includes('gmuwiki') ? false : true);

  const markdownToHtml = (value) => {
    const renderer = new marked.Renderer();

    // 코드블럭, 인용문, 링크 스타일링을 위한 코드이다.
    renderer.code = code => {
      return `<pre><code>${code}</code></pre>`;
    };

    renderer.blockquote = quote => {
      return `<blockquote>${quote}</blockquote>`;
    };

    renderer.link = (href, title, text) => {
      const target = initialState(href)
      return `<a href=${href} ${target && 'target="_blank"'}><strong>${text}</strong></a>`;
    };

    const options = {
      renderer,
      // marked 경고 메시지를 해제하는 옵션이다.
      mangle: false,
      headerIds: false
    };

    const convertedValue = value
      .replace(/>>/g, `<details open>`)
      .replace(/>==/g, `<summary>`)
      .replace(/==</g, `</summary>`)
      .replace(/<</g, `</details>`);

    const html = marked(convertedValue, options);

    return html;
  }

  return { markdownToHtml };
}

export default useMarkdown;