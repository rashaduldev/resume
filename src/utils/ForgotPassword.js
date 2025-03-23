export async function forgotPassword(data) {
    const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/forgot-password`;
  
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(`Unexpected response: ${text}`);
      }
  
      const result = await response.json();
      console.log("API Response (Forgot Password):", result);
      return result;
    } catch (error) {
      console.error("Error in forgotPassword:", error);
      return { success: false, message: error.message };
    }
  }