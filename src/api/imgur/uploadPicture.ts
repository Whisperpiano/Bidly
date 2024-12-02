export async function uploadPicture(image: File) {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Client-ID ${import.meta.env.VITE_IMGUR_CLIENT_ID}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to upload image:", error);
  }
}
