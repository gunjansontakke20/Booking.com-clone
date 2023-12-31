import SearchForm from "@/components/SearchForm";
import { trending_data } from "@/Data/Trending";

export default function Home() {
  return (
    <main className="bg-[#000]" >
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-4xl text-white">Find your Next Stay</h2>
        <h3 className="text-white py-1">
          Search low prices on hotels, homes and much more...
        </h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4 bg-[#000]" >
        <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-[#454545] rounded-t-lg ">
        <div className="pt-7">
          <h3 className="text-xl font-bold text-white">Trending Destinations</h3>
          <p className="font-light text-white">
            Most popular choices for travellers from around the world
          </p>
        </div>

        <div className="flex space-x-4 py-7 overflow-x-scroll text-white">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img
                key={item.id}
                className="w-30 h-40 object-cover rounded-lg pb-2"
                src={item.src}
                alt=""
              />

              <p className="font-bold">{item.title}</p>
              <p className="">{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}