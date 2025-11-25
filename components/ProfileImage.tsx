import Image from 'next/image';

const ProfileImage = (): JSX.Element => {
  return (
    <div className="w-40 h-40 md:w-64 md:h-64 relative rounded-full overflow-hidden mx-auto md:mx-0">
      <Image
        src="/images/me.jpeg"
        alt="My profile image"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        draggable={false}
      />
    </div>
  );
};

export default ProfileImage;
