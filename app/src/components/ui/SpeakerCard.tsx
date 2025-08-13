import Image from 'next/image';
import { FC } from 'react';

interface SpeakerCardProps {
  name: string;
  title: string;
  company?: string;
  imageUrl: string;
  companyLogo?: string;
}

export const SpeakerCard: FC<SpeakerCardProps> = ({ 
  name, 
  title, 
  company, 
  imageUrl, 
  companyLogo 
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105">
      <div className="aspect-square overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-300">{title}</p>
          {company && <p className="text-sm text-gray-200">{company}</p>}
          {companyLogo && (
            <div className="mt-2">
              <Image 
                src={companyLogo} 
                alt={`${name}'s company`} 
                width={80}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
