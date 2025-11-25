import Image from 'next/image';

const ProfileImage = (): JSX.Element => (
  <Image
    className="rounded-full select-none transition-all pointer-events-none"
    src="images/me.jpeg" 
    draggable={false}
    alt="My profile image"
    width={260}
    height={260}
    style={{ objectFit: 'cover', objectPosition: 'center' }}
    priority
    unoptimized
  />
);

export default ProfileImage;