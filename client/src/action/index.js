import axios from "./../axios";

export const signIn = (userid) => {
  return {
    type: "SIGN_IN",
    payload: userid,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createStream = (formData) => async (dispatch,getState) => {
  const {userid} = getState().auth;
  const response = await axios.post("/streams", {...formData,userid});
  dispatch({
    type: "CREATE_STREAM",
    payload: response.data,
  });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await axios.get("/streams");
  dispatch({
    type: "FETCH_STREAMS",
    payload: response.data,
  });
};

export const fetchStreamById = (id) => async (dispatch) => {
  const response = await axios.get("/streams/"+id);
  dispatch({
    type: "FETCH_STREAM",
    payload: response.data,
  });
};

export const editStream = (formData,id) => async (dispatch) => {
  const response = await axios.put("/streams/"+id,formData);
  dispatch({
    type: "EDIT_STREAM",
    payload: response.data,
  });
};

export const deleteStream = (id) => async (dispatch) => {
  await axios.delete("/streams/"+id);
  dispatch({
    type: "DELETE_STREAM",
    payload: id,
  });
};
