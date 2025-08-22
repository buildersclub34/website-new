import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  logo: string;
  description: string;
  usedBy: string;
  deal: string;
  savings: string;
  dealLink: string;
  isPremium?: boolean;
  isSecretPick?: boolean;
  tags?: string[];
}

type ProductCardProps = Product;

export function ProductCard({
  id,
  name,
  logo,
  description,
  usedBy,
  deal,
  savings,
  dealLink,
  isPremium = false,
  isSecretPick = false,
  tags = [],
}: ProductCardProps) {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-visible hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-300 h-full flex flex-col hover:border-yellow-500/50 transform hover:-translate-y-1 min-h-[450px] max-w-[320px] mx-auto w-full">

      <div className="flex gap-4 items-start p-5 pb-0 relative z-10">
        <div className="flex-shrink-0 relative group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-yellow-500/10 rounded-lg transform group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative bg-white/5 backdrop-blur-sm p-2 rounded-lg border border-gray-700/50">
            <Image
              width={48}
              height={48}
              className="rounded-md h-12 w-12 object-contain"
              alt={`${name} Logo`}
              src={logo}
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 pt-1 relative">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-white leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                {name}
              </h3>
              <div className="mt-1.5 flex items-center">
                <span className="text-xs text-gray-400">
                  <span className="font-medium text-yellow-400">{usedBy}</span> members using this
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {isPremium && (
                <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium px-2.5 py-1 rounded-full border border-yellow-500/30">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  Premium
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 pt-0 flex-1 flex flex-col relative z-10">
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 mb-6">{description}</p>

        <div className="mt-auto flex flex-col">
          <div className="border-t border-gray-700/50 pt-5">
            <p className="text-yellow-400 font-bold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">{deal}</p>
            <p className="text-xs text-gray-400 mb-2">
              Save up to <span className="font-bold text-yellow-400">{savings}</span>
            </p>
          </div>

          <div className="mt-4 mb-5">
            <Link
              href={dealLink}
              className="block w-full text-center py-2.5 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold text-sm rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-500/20"
            >
              <div className="flex items-center justify-center gap-2">
                Get This Deal
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2.5 py-1 rounded-full border border-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link 
        href={`/products/${id}`} 
        className="absolute inset-0 z-1" 
        aria-label={`View ${name} details`} 
        style={{
          zIndex: 1,
          pointerEvents: 'auto'
        }}
      />
    </div>
  );
}
