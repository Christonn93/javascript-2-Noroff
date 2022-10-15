export const validateEmail = (email) => {
  return String(email).toLowerCase().match("w-.]+@(stud.)?noroff.no");
};
