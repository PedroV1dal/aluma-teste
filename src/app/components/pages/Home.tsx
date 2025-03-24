import { FlightForm } from "../organisms/FlightForm";
import { MainLayout } from "../templates/MainLayout";

export const Home = () => (
  <MainLayout title="Reserve seu voo com SpaceX">
    <FlightForm />
  </MainLayout>
);
