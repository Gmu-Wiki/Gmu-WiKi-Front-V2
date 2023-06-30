import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "./useFetch";

const useLoggedIn = ({ props }) => {
  const { onFetch = true } = props;
  const { user } = useSelector(state => ({ user: state.user }));
  const dispatch = useDispatch();

  const { fetch } = useFetch({
    method: "get",
  });
};

export default useLoggedIn;
