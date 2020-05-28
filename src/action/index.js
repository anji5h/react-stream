export const signIn = (userid) => {
  return {
    type: "SIGN_IN",
    payload : userid
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
