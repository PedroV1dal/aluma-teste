"use client";

import {
  LinkIcon,
  VideoCameraIcon,
  NewspaperIcon,
  BookOpenIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { UpcomingLaunchDetails } from "@/utils/types/launchs";

interface RelatedLinksProps {
  launch: UpcomingLaunchDetails;
}

export const RelatedLinks = ({ launch }: RelatedLinksProps) => (
  <div className="mb-6 sm:mb-8">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 border-b border-gray-200 dark:border-gray-600 pb-2 flex items-center gap-2">
      <LinkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
      Links Relacionados
    </h3>
    {launch.reddit?.launch ||
    launch.webcast ||
    launch.article ||
    launch.wikipedia ||
    launch.presskit ? (
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {launch.reddit?.launch && (
          <a
            href={launch.reddit.launch}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-all text-sm sm:text-base"
          >
            <LinkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            Reddit
          </a>
        )}
        {launch.webcast && (
          <a
            href={launch.webcast}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-all text-sm sm:text-base"
          >
            <VideoCameraIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            Webcast
          </a>
        )}
        {launch.article && (
          <a
            href={launch.article}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-all text-sm sm:text-base"
          >
            <NewspaperIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            Artigo
          </a>
        )}
        {launch.wikipedia && (
          <a
            href={launch.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-all text-sm sm:text-base"
          >
            <BookOpenIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            Wikipédia
          </a>
        )}
        {launch.presskit && (
          <a
            href={launch.presskit}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-all text-sm sm:text-base"
          >
            <DocumentTextIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            Press Kit
          </a>
        )}
      </div>
    ) : (
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Nenhum link relacionado disponível.
      </p>
    )}
  </div>
);
