"use client";

import { ServerIcon } from "@heroicons/react/24/outline";

interface PassengerInfoProps {
  fullName: string;
  age: number;
  hasHealthIssue: string;
}

export const PassengerInfo = ({
  fullName,
  age,
  hasHealthIssue,
}: PassengerInfoProps) => (
  <div className="mb-6 sm:mb-8">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 border-b border-gray-200 dark:border-gray-600 pb-2 flex items-center gap-2">
      <ServerIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
      Informações do Passageiro
    </h3>
    <div className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
      <p className="flex justify-between">
        <span className="font-medium">Nome:</span> <span>{fullName}</span>
      </p>
      <p className="flex justify-between">
        <span className="font-medium">Idade:</span> <span>{age}</span>
      </p>
      <p className="flex justify-between">
        <span className="font-medium">Problemas de Saúde:</span>{" "}
        <span>{hasHealthIssue === "yes" ? "Sim" : "Não"}</span>
      </p>
    </div>
  </div>
);
