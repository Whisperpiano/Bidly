import { PiSealCheckFill } from "react-icons/pi";
import ProfileStats from "./ProfileStats";
import ProfileOptions from "./ProfileOptions";
import ShareProfile from "./ShareProfile";
import { UserProfile } from "../../types/types";
import { useAuthStore } from "../../store/user";
import { useEffect, useState } from "react";
import { uploadPicture } from "../../api/imgur/uploadPicture";
import updateProfile from "../../api/profiles/updateProfile";

export default function ProfileBanner({ profile }: { profile: UserProfile }) {
  const userName = useAuthStore((state) => state.username);
  const [avatar, setAvatar] = useState<string>("");
  const [banner, setBanner] = useState<string>("");

  const handleAvatarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const picture = await uploadPicture(file);
      await updateProfile({ avatar: picture });
      console.log(picture);
      setAvatar(picture);
    }
  };

  const handleBannerChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const picture = await uploadPicture(file);
      await updateProfile({ banner: picture });
      console.log(picture);
      setBanner(picture);
    }
  };

  useEffect(() => {
    setAvatar(profile.avatar.url ?? "https://placehold.co/260x160");
    setBanner(profile.banner.url ?? "https://placehold.co/260x160");
  }, [profile]);

  return (
    <>
      <div className="relative">
        <img
          src={avatar}
          alt={`Banner of ${profile.name}`}
          className="h-[200px] md:h-[220px] lg:h-[300px] w-full object-cover object-center rounded-lg"
        />
        <ProfileStats count={profile._count} credits={profile.credits} />
      </div>

      {/* Profile */}
      <div className="flex justify-between p-2 md:p-4 lg:p-6 -translate-y-1/2">
        <div className="flex items-end gap-2 md:gap-3 lg:gap-4">
          <img
            src={banner}
            alt={`Avatar of ${profile.name}`}
            className="aspect-square w-20 sm:w-24 md:w-28 object-cover object-center rounded-lg border dar:border-neutral-950 dark:border-neutral-950 border-neutral-50"
          />
          <div className="flex gap-1 items-center mb-2">
            <h1 className="text-base md:text-xl font-semibold dark:text-neutral-50 text-neutral-900">
              {profile.name}
            </h1>
            <PiSealCheckFill size={16} className="text-yellow-400" />
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <ShareProfile />
          {userName === profile.name && (
            <ProfileOptions
              setAvatar={handleAvatarChange}
              setBanner={handleBannerChange}
            />
          )}
        </div>
      </div>
    </>
  );
}
