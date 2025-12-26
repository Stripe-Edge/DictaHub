// Abstracted Auth Logic
// This is a scaffold we need to create our our auth logic
export const verifyToken = async (token: string) => {
  // Logic to verify JWT
  return { id: '1', role: 'ADMIN' };
};

export const hashPassword = async (password: string) => {
  return "hashed_" + password;
};

export const comparePassword = async (password: string, hashed: string) => {
  return "hashed_" + password === hashed;
};
