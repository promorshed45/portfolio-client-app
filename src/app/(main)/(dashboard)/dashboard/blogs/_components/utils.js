// utils.js


export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}



export const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};
