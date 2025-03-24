"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { LaunchRepository } from "@/repository/launchRepository";
import { UpcomingLaunchList } from "@/utils/types/launchs";
import { AsyncData } from "@/api/models";
import { STATUS_CODE } from "@/api/constants";

interface FlightFormData {
  flightId: string;
  fullName: string;
  age: number;
  hasHealthIssue: "yes" | "no";
}

export function useFlightReservation() {
  const router = useRouter();
  const [asyncFlights, setAsyncFlights] = useState<
    AsyncData<UpcomingLaunchList[]>
  >({
    status: "not-loaded",
  });

  const form = useForm<FlightFormData>({
    defaultValues: {
      flightId: "",
      fullName: "",
      age: undefined,
      hasHealthIssue: "no",
    },
  });

  const fetchFlights = async () => {
    setAsyncFlights({ status: "loading" });
    try {
      const response = await LaunchRepository.fetchAll();
      if (response.status === STATUS_CODE.OK && response.data) {
        setAsyncFlights({ status: "loaded", data: response.data });
        if (response.data.length > 0) {
          form.setValue("flightId", response.data[0].id);
        }
      } else {
        setAsyncFlights({ status: "error" });
      }
    } catch (error) {
      console.error("Erro ao buscar voos:", error);
      setAsyncFlights({ status: "error" });
    }
  };

  const onSubmit = (data: FlightFormData) => {
    const queryParams = new URLSearchParams({
      flightId: data.flightId,
      fullName: data.fullName,
      age: data.age.toString(),
      hasHealthIssue: data.hasHealthIssue,
    }).toString();
    router.push(`/success?${queryParams}`);
  };

  useEffect(() => {
    fetchFlights();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    asyncFlights,
    form,
    onSubmit,
  };
}
