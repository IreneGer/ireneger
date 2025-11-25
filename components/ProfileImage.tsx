import Image from 'next/image';

const ProfileImage = (): JSX.Element => (
  <Image
  src="/images/me.jpeg"
  alt="My profile image"
  width={260}
  height={260}
  style={{ objectFit: "cover", objectPosition: "center" }}
  priority
  unoptimized
  className="rounded-full select-none"
/>

);

export default ProfileImage;

