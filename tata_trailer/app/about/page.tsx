import About1 from "@/components/About1";
import About2 from "@/components/About2";
import About3 from "@/components/About3";

export default function About() {
  return (
    <main>
      <div className="">
        <div className=" w-full h-96 bg-rose-200 flex justify-center items-center">
          <div>
            <h2 className=" font-bold text-5xl text-white text-center">
              About Us
            </h2>
            <p className=" font-medium text-orange-500 text-center">
              Transportation and Logistic Specialist with a vision of future.
            </p>
          </div>
        </div>
        {/* <div className="  bg-red-500  w-full h-96 mt-20 flex flex-wrap">
          <div className=" w-2/5  bg-orange-200 flex justify-center items-center">
            <div className="w-full h-full relative">
              <Image
                src="/assets/truck3.jpg"
                alt="about"
                objectFit="cover"
                objectPosition="center"
                layout="fill"
              />
            </div>
          </div>
          <div className=" w-3/5 bg-green-300 h-full">
            <div className=" h-full w-full flex flex-col justify-center items-center">
              <h2 className=" font-bold text-5xl text-white text-center">
                Our Mission
              </h2>
              <p className=" font-medium text-orange-500 text-center max-w-3xl p-5">
                To provide the best transportation services to our clients.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem eaque natus dolorum. Laboriosam culpa modi quidem dolor quae corrupti delectus? Saepe et tempore laboriosam quia esse illo accusantium suscipit molestiae laborum error, reprehenderit tempora. Ipsam ullam quis, iste dolorum ducimus at, soluta nihil ut doloremque perferendis, dolores officia ipsum est.
              </p>
            </div>
          </div>
        </div> */}

      </div>
        <About1/>
        <About2/>
        <About3/>
    </main>
  );
}
