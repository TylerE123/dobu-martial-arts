import MembershipCard from "~/components/MembershipCard";

export default function Memberships() {
  return (
    <div className="min-h-screen bg-blue-300 p-4">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-red-900">
        Memberships
      </h1>
      <ul className="mx-auto max-w-xl p-4">
        <MembershipCard
          level="Basic"
          description="1 martial art - 2 sessions per week. Monthly fee."
          price="£25.00"
        />
        <MembershipCard
          level="Intermediate"
          description="1 martial art - 3 sessions per week. Monthly fee."
          price="£35.00"
        />
        <MembershipCard
          level="Advanced"
          description="Any 2 martial arts - 5 sessions per week. Monthly fee."
          price="£45.00"
        />
      </ul>
    </div>
  );
}
