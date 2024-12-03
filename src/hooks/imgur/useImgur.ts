import { useState } from "react";
import { uploadPicture } from "../../api/imgur/uploadPicture";

export function useImgur() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const picture = await uploadPicture(file);

      if (!picture || !picture.url) {
        setError("Something went wrong uploading the image");
        setIsUploading(false);
        return;
      }
      setImageUrl(picture);
      setIsUploading(false);
    } catch (error) {
      setError(`Uknown error uploading image: ${error}`);
      setIsUploading(false);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    imageUrl,
    isUploading,
    error,
    handleFileChange,
  };
}
