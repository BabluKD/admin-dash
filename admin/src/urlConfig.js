const baseUrl = process.env.API || "http://localhost:5000";
//const baseUrl = "http://localhost:2000";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
