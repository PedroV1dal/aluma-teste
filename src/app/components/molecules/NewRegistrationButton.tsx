"use client";

import { useRouter } from "next/navigation";

export const NewRegistrationButton = () => {
  const router = useRouter();

  const handleNewRegistration = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={handleNewRegistration}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm sm:text-base"
      >
        Novo Cadastro
      </button>
    </div>
  );
};
