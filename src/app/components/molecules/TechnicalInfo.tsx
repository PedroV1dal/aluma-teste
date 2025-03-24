"use client";

import { CubeIcon } from "@heroicons/react/24/outline";
import { UpcomingLaunchDetails } from "@/utils/types/launchs";

interface TechnicalInfoProps {
  launch: UpcomingLaunchDetails;
}

export const TechnicalInfo = ({ launch }: TechnicalInfoProps) => (
  <div className="mb-6 sm:mb-8">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 border-b border-gray-200 dark:border-gray-600 pb-2 flex items-center gap-2">
      <CubeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
      Informações Técnicas
    </h3>
    <div className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
      <p className="flex justify-between">
        <span className="font-medium">Foguete:</span>{" "}
        <span>{launch.rocket || "Não informado"}</span>
      </p>
      <p className="flex justify-between">
        <span className="font-medium">Launchpad:</span>{" "}
        <span>{launch.launchpad || "Não informado"}</span>
      </p>
      {launch.cores && launch.cores.length > 0 && (
        <div className="mt-3 sm:mt-4">
          <p className="font-medium mb-2">Núcleo:</p>
          <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-lg space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <p className="flex justify-between">
              <span>Número do Voo:</span>{" "}
              <span>{launch.cores[0].flight || "Não informado"}</span>
            </p>
            <p className="flex justify-between">
              <span>Tipo de Pouso:</span>{" "}
              <span>{launch.cores[0].landing_type ?? "Não informado"}</span>
            </p>
            <p className="flex justify-between">
              <span>Local de Pouso:</span>{" "}
              <span>{launch.cores[0].landpad ?? "Não informado"}</span>
            </p>
            <p className="flex justify-between">
              <span>Sucesso no Pouso:</span>{" "}
              <span>
                {launch.cores[0].landing_success !== undefined
                  ? launch.cores[0].landing_success
                    ? "Sim"
                    : "Não"
                  : "Não informado"}
              </span>
            </p>
            <p className="flex justify-between">
              <span>Reutilizado:</span>{" "}
              <span>{launch.cores[0].reused ? "Sim" : "Não"}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
);
