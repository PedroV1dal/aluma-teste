// src/components/organisms/SuccessCard.tsx
"use client";

import Image from "next/image";
import { UpcomingLaunchDetails } from "@/utils/types/launchs";
import { PassengerInfo } from "../molecules/PassengerInfo";
import { FlightDetails } from "../molecules/FlightDetails";
import { TechnicalInfo } from "../molecules/TechnicalInfo";
import { RelatedLinks } from "../molecules/RelatedLinks";
import { NewRegistrationButton } from "../molecules/NewRegistrationButton";

interface SuccessCardProps {
  launch: UpcomingLaunchDetails;
  fullName: string;
  age: number;
  hasHealthIssue: string;
}

export const SuccessCard = ({
  launch,
  fullName,
  age,
  hasHealthIssue,
}: SuccessCardProps) => (
  <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
    <div className="flex items-center justify-center mb-4 sm:mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
        Compra Confirmada! 🚀
      </h2>
    </div>

    {launch.patch && launch.patch.small && (
      <div className="flex justify-center mb-4 sm:mb-6">
        <Image
          src={launch.patch.small}
          alt={`Insígnia do ${launch.name}`}
          width={100}
          height={100}
          className="rounded-lg shadow-md"
        />
      </div>
    )}

    <PassengerInfo
      fullName={fullName}
      age={age}
      hasHealthIssue={hasHealthIssue}
    />

    <FlightDetails launch={launch} />

    <TechnicalInfo launch={launch} />

    <RelatedLinks launch={launch} />

    <NewRegistrationButton />
  </div>
);
