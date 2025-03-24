// src/components/organisms/FlightForm.tsx
"use client";

import { useEffect } from "react";
import { useFlightReservation } from "../hooks/useFlightReservation";
import { Input } from "../atoms/Input";
import { Select } from "../atoms/Select";
import { RadioGroup } from "../molecules/RadioGroup";
import { Button } from "../atoms/Button";
import { UpcomingLaunchList } from "../../../utils/types/launchs";

export const FlightForm = () => {
  const { asyncFlights, form, onSubmit } = useFlightReservation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  useEffect(() => {
    reset({
      flightId: "",
      fullName: "",
      age: undefined,
      hasHealthIssue: "no",
    });
  }, [reset]);

  if (asyncFlights.status === "loading") {
    return (
      <div className="text-gray-600 dark:text-gray-300">Carregando voos...</div>
    );
  }

  if (asyncFlights.status === "error" || asyncFlights.status === "not-loaded") {
    return <div className="text-red-500">Erro ao carregar os voos</div>;
  }

  const flights = asyncFlights.data;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto space-y-6"
    >
      <Select
        id="flightId"
        label="Seleção de Voo"
        options={flights.map((flight: UpcomingLaunchList) => ({
          value: flight.id,
          label: flight.name,
        }))}
        {...register("flightId", { required: "Selecione um voo" })}
      />
      {errors.flightId && (
        <p className="text-red-500 text-sm">{errors.flightId.message}</p>
      )}

      <Input
        id="fullName"
        label="Nome Completo"
        type="text"
        {...register("fullName", { required: "Nome é obrigatório" })}
      />
      {errors.fullName && (
        <p className="text-red-500 text-sm">{errors.fullName.message}</p>
      )}

      <Input
        id="age"
        label="Idade"
        type="number"
        {...register("age", {
          required: "Idade é obrigatória",
          min: {
            value: 16,
            message: "Você deve ter 16 anos ou mais para reservar um voo",
          },
          valueAsNumber: true,
        })}
      />
      {errors.age && (
        <p className="text-red-500 text-sm">{errors.age.message}</p>
      )}

      <RadioGroup
        label="Possui algum problema de saúde?"
        name="hasHealthIssue"
        options={[
          { value: "yes", label: "Sim" },
          { value: "no", label: "Não" },
        ]}
        value={form.watch("hasHealthIssue")}
        onChange={(value) =>
          form.setValue("hasHealthIssue", value as "yes" | "no")
        }
      />

      <Button type="submit">Comprar Ticket</Button>
    </form>
  );
};
