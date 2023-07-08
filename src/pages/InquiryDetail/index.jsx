import React, { useEffect, useState } from "react";
import * as C from "../../components";
import { useFetch } from "../../Hooks";
import { useParams } from "react-router-dom";

const InquiryDetail = () => {
  const [state, setState] = useState({
    content: "",
    title: "",
    name: "",
    inquiryType: ""
  });

  let { id } = useParams();

  const { fetch } = useFetch({
    url: `/admin/inquiry/${id}`,
    method: "get",
    onSuccess: data => {
      setState(data);
    },
    erros: {
      400: "글을 불러오지 못했습니다."
    }
  });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title={state.title} sort="문의">
        <C.Explanation>
          <C.InquiryDetailItem
            title={state.title}
            name={state.name}
            content={state.content}
            inquiryType={state.inquiryType}
          />
        </C.Explanation>
      </C.PageContainer>
    </>
  );
};

export default InquiryDetail;
