export async function loginUser(data) {
    const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signin`;
  
    // console.log("Logging in user to:", API_URL);
  
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      // console.log("Response status:", response.status);
  
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(`Unexpected response: ${text}`);
      }
  
      const result = await response.json();
      console.log("API Response (Login):", result);
      return result;
    } catch (error) {
      console.error("Error in loginUser:", error);
      return { success: false, message: error.message };
    }
  }