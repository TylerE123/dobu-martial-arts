import ClassesCard from "~/components/ClassesCard";

export default function Classes() {
  return (
    <div className="min-h-screen bg-blue-300 p-4">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-red-900">
        Classes
      </h1>
      <ul className="mx-auto max-w-xl p-4">
        <ClassesCard
          name="Bob"
          description="Bob is Bob "
          price="£25.00 Per Session"
        />
      </ul>
    </div>
  );
}
