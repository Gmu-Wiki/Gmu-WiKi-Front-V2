import { Routes, Route } from "react-router-dom";
import * as P from "../pages";
import GetRole from "../lib/GetRole";
import { useEffect, useState } from "react";
import TokenManager from "../apis/TokenManager";

export default function Router() {
  const tokenManager = new TokenManager();

  const hastoken = tokenManager.accessToken;
  const role = GetRole();
  const [roleUrl, setRoleUrl] = useState("");

  useEffect(() => {
    if (role === "관리자") {
      setRoleUrl("admin");
    } else if (role === "사용자") {
      setRoleUrl("user");
    }
  }, [role]);

  // if (!hastoken) return <h1>하이</h1>;

  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/student" element={<P.Student />} />
      <Route path="/teacher" element={<P.Teacher />} />
      <Route path="/club" element={<P.Club />} />
      <Route path="/major" element={<P.Major />} />
      <Route path="/event" element={<P.Event />} />
      <Route path="/notice" element={<P.Notice />} />
      <Route path="/notice/:id" element={<P.NoticeDetail />} />
      <Route path="/post" element={<P.Post />} />
      <Route path={`/${roleUrl}/board/:id`} element={<P.BoardDetail />} />
      <Route path={`/${roleUrl}/board/:id/record`} element={<P.History />} />
      <Route path={`/${roleUrl}/board/edit/:id`} element={<P.Edit />} />
      <Route
        path={`/${roleUrl}/board/:id/record/detail`}
        element={<P.HistoryDetail />}
      />
      <Route path="/inquiry" element={<P.Inquiry />} />
      <Route path="/inquiryWrite" element={<P.InquiryWrite />} />
      <Route path="/schedule" element={<P.Schedule />} />

      <Route path="/role" element={<P.Role />} />
      <Route path="/inquiry/:id" element={<P.InquiryDetail />} />
      <Route path="/noticeWrite" element={<P.NoticeWrite />} />
      <Route path="*" element={<P.NotFound />} />
    </Routes>
  );
}
