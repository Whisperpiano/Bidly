import { useEffect, useState } from "react";
import { useUpdateProfile } from "../../hooks/imgur/useUpdateProfile";
import { PiSealCheckFill } from "react-icons/pi";
import { useAuthStore } from "../../store/user";
import { UserProfile } from "../../types/types";
import ProfileStats from "./ProfileStats";
import ProfileOptions from "./ProfileOptions";
import ShareProfile from "./ShareProfile";
import Spinner from "../elements/Spinner";

export default function ProfileBanner({ profile }: { profile: UserProfile }) {
  const [avatar, setAvatar] = useState<string>("");
  const [banner, setBanner] = useState<string>("");

  // Get the user name
  const userName = useAuthStore((state) => state.username);

  // Update avatar
  const {
    handleFileChangeAndUpload: handleAvatarChangeAndUpload,
    isUploading: avatarUploading,
  } = useUpdateProfile();

  // Update banner
  const {
    handleFileChangeAndUpload: handleBannerChangeAndUpload,
    isUploading: bannerUploading,
  } = useUpdateProfile();

  // Set the avatar and banner urls
  useEffect(() => {
    setAvatar(profile.avatar.url ?? "https://placehold.co/260x160");
    setBanner(profile.banner.url ?? "https://placehold.co/260x160");
  }, [profile]);

  return (
    <>
      <div className="relative">
        <img
          src={banner}
          alt={`Banner of ${profile.name}`}
          className={`h-[200px] md:h-[220px] lg:h-[300px] w-full object-cover object-center rounded-lg transition-opacity duration-300 ${
            bannerUploading ? "opacity-50" : ""
          }`}
        />
        {bannerUploading && (
          <div className="absolute inset-0 z-[5] flex items-center justify-center animate-reveal">
            <Spinner />
          </div>
        )}
        <ProfileStats count={profile._count} credits={profile.credits} />
      </div>

      {/* Profile */}
      <div className="flex justify-between p-2 md:p-4 lg:p-6 -translate-y-1/2">
        <div className="flex items-end gap-2 md:gap-3 lg:gap-4">
          <div className="relative">
            <img
              src={avatar}
              alt={`Avatar of ${profile.name}`}
              className={`aspect-square w-20 sm:w-24 md:w-28 object-cover object-center rounded-lg border dar:border-neutral-950 dark:border-neutral-950 border-neutral-50`}
            />
            {avatarUploading && (
              <div
                className={`absolute inset-0 z-[5] flex items-center justify-center rounded-lg animate-reveal bg-neutral-900/50 transition-opacity duration-300 ${
                  !avatarUploading ? "opacity-0" : "opacity-100"
                }`}
              >
                <Spinner />
              </div>
            )}
          </div>
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
              setAvatar={setAvatar}
              setBanner={setBanner}
              onAvatarChange={handleAvatarChangeAndUpload}
              onBannerChange={handleBannerChangeAndUpload}
            />
          )}
        </div>
      </div>
    </>
  );
}
