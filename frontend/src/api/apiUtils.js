export const apiErrorResponse = (error) => {
  if (error.response) {
    // If error has a response, it means the error came from the backend.
    console.error("Backend error:", {
      status: error.response.status,
      statusText: error.response.statusText,
      message: error.response.data.error || error.response.data.message,
      endpoint: error.config?.url,
      method: error.config?.method,
      fullError: error,
    });
    return {
      success: false,
      status: error.response.status,
      message: error.response.data.error,
    };
  } else {
    // Otherwise, it's an error with the axios request itself.
    console.error("Request error:", error);
    return { success: false, message: error };
  }
};
