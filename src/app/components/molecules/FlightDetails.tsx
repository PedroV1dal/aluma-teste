// src/components/molecules/FlightDetails.tsx
"use client";

import { useState } from "react";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  RocketLaunchIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { UpcomingLaunchDetails } from "@/utils/types/launchs";

interface FlightDetailsProps {
  launch: UpcomingLaunchDetails;
}

export const FlightDetails = ({ launch }: FlightDetailsProps) => {
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);

  const formattedDate = launch.date_utc
    ? format(parseISO(launch.date_utc), "dd 'de' MMMM 'de' yyyy, HH:mm", {
        locale: ptBR,
      })
    : "Data não disponível";

  const statusText = launch.upcoming
    ? "Futuro"
    : launch.success
    ? "Sucesso"
    : "Falha";

  const statusColor = launch.upcoming
    ? "text-blue-600 dark:text-blue-400"
    : launch.success
    ? "text-green-600 dark:text-green-400"
    : "text-red-600 dark:text-red-400";

  return (
    <div className="mb-6 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 border-b border-gray-200 dark:border-gray-600 pb-2 flex items-center gap-2">
        <RocketLaunchIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
        Detalhes do Voo
      </h3>
      <div className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
        <p className="flex justify-between">
          <span className="font-medium">Voo:</span> <span>{launch.name}</span>
        </p>
        <p className="flex justify-between">
          <span className="font-medium">Data do Lançamento:</span>{" "}
          <span>{formattedDate}</span>
        </p>
        <p className="flex justify-between">
          <span className="font-medium">Status:</span>{" "}
          <span className={statusColor}>{statusText}</span>
        </p>
        {launch.details && (
          <div className="mt-3 sm:mt-4">
            <button
              onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
            >
              <span className="font-medium">Detalhes da Missão</span>
              {isDetailsExpanded ? (
                <ChevronUpIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>
            {isDetailsExpanded && (
              <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {launch.details}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
