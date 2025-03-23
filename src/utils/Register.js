export async function registerUser(data) {
    const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup`;
  
    // console.log("Registering user to:", API_URL);
  
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
      console.log("API Response (Register):", result);
      localStorage.setItem('accesstoken',result.token)
      return result;
    } catch (error) {
      console.error("Error in registerUser:", error);
      return { success: false, message: error.message };
    }
  }