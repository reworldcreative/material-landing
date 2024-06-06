self.onmessage = async (event) => {
  const { url } = event.data;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    self.postMessage({ success: true, data: data.users });
  } catch (error) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    self.postMessage({ success: false, error: errorMessage });
  }
};
