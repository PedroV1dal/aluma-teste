import { LaunchRepository } from "@/repository/launchRepository";
import { SuccessCard } from "../organisms/SuccessCard";
import { MainLayout } from "../templates/MainLayout";

interface SuccessProps {
  searchParams: Promise<{ [key: string]: string }>;
}

export const Success = async ({ searchParams }: SuccessProps) => {
  const resolvedSearchParams = await searchParams;
  const { flightId, fullName, age, hasHealthIssue } = resolvedSearchParams;

  const response = await LaunchRepository.getUpcomingLaunchById(flightId);

  if (response.status !== 200 || !response.data) {
    return <div>Erro ao carregar os detalhes do voo</div>;
  }

  const launch = response.data;

  return (
    <MainLayout title="Confirmação de Reserva">
      <SuccessCard
        launch={launch}
        fullName={fullName}
        age={Number(age)}
        hasHealthIssue={hasHealthIssue}
      />
    </MainLayout>
  );
};
