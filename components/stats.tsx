export function Stats() {
  const stats = [
    { value: "10K+", label: "Joueurs" },
    { value: "250K+", label: "Parties analysées" },
    { value: "35%", label: "Amélioration moyenne" },
    { value: "24/7", label: "Support IA" }
  ];

  return (
    <section className="py-16 bg-[#1a2130]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF7700] to-[#FFAA00]">
                {stat.value}
              </p>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 