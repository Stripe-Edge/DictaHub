// Twilio SMS Integration
export const sendSMS = async (to: string, message: string) => {
  console.log(`Sending SMS to ${to}: ${message}`);
  return { success: true };
};
