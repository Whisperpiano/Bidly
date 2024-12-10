import { useState } from "react";
import { uploadPicture } from "../../api/imgur/uploadPicture";
import updateProfile from "../../api/profiles/updateProfile";
import { useAuthStore } from "../../store/user";
import { toast } from "sonner";

export function useUpdateProfile() {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [imgurError, setImgurError] = useState<string | null>(null);
  const [noroffApiError, setNoroffApiError] = useState<string | null>(null);

  // To update the profile in the localstorage
  const setAuth = useAuthStore((state) => state.setAuth);
  const username = useAuthStore((state) => state.username);
  const accessToken = useAuthStore((state) => state.accessToken);

  const handleFileChangeAndUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    profileField: "avatar" | "banner",
    updateCallback: (picture: string) => void
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      alert("Please upload a JPEG or PNG image");
      return;
    }

    // Start showing the toast for uploading
    const toastId = toast.loading("Uploading picture...");

    setIsUploading(true);

    try {
      // Upload the image to imgur
      const picture = await uploadPicture(file);

      if (!picture.link) {
        setImgurError("Something went wrong uploading the image");
        throw new Error("Something went wrong uploading the image");
      }

      // Update the profile in NOROFF API
      const update = await updateProfile({ [profileField]: picture.link });

      if (!update) {
        setNoroffApiError("Something went wrong updating the profile");
        throw new Error("Something went wrong updating the profile");
      }

      if ("data" in update) {
        updateCallback(picture.link);
      } else if ("errors" in update) {
        setNoroffApiError(update.errors[0].message);
        throw new Error(update.errors[0].message);
      }

      // Update the profile in the localstorage
      if (username && accessToken) {
        setAuth(username, accessToken);
      }

      // If everything is successful, show the success toast
      toast.success("Image updated successfully!", { id: toastId });
    } catch (error) {
      console.log(`Unknown error uploading image: ${error}`);
      toast.error("Something went wrong uploading the image", { id: toastId });
    } finally {
      setIsUploading(false);
    }
  };

  return { isUploading, imgurError, noroffApiError, handleFileChangeAndUpload };
}
