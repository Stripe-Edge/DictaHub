// Resend Email Integration
export const sendEmail = async (to: string, subject: string, body: string) => {
  console.log(`Sending email to ${to}: ${subject}`);
  return { success: true };
};
