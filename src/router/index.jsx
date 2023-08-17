import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import TokenManager from "../apis/TokenManager";
import * as P from "../pages";

export default function Router() {
  const tokenManager = new TokenManager();
  const accessToken = tokenManager.accessToken;
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/promotion");
    } else if (window.location.pathname === "/promotion") {
      navigate("/");
    }
  }, [accessToken, navigate]);

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
      <Route path={`/board/:id`} element={<P.BoardDetail />} />
      <Route path={`/board/:id/record`} element={<P.History />} />
      <Route path={`/board/edit/:id`} element={<P.Edit />} />
      <Route path={`/notice/edit/:id`} element={<P.EditNotice />} />
      <Route path={`/board/:id/record/detail`} element={<P.HistoryDetail />} />
      <Route path="/inquiry" element={<P.Inquiry />} />
      <Route path="/inquiryWrite" element={<P.InquiryWrite />} />
      <Route path="/schedule" element={<P.Schedule />} />
      <Route path="/promotion" element={<P.Promotion />} />

      <Route path="/role" element={<P.Role />} />
      <Route path="/inquiry/:id" element={<P.InquiryDetail />} />
      <Route path="/noticeWrite" element={<P.NoticeWrite />} />
      <Route path="*" element={<P.NotFound />} />
    </Routes>
  );
}
