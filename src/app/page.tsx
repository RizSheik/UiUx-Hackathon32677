import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className=" bg-[#F6F7F9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
     
      <section className="first w-full flex flex-wrap justify-center sm:flex-nowrap gap-4 sm:gap-8">
        <Image src={"/Images/Ads 1.png"} alt="" width={640} height={360} className="max-w-full" />
        <Image src={"/Images/Ads 2.png"} alt="" width={640} height={360} className="max-w-full" />
      </section>

    
      <section className="first w-full flex flex-wrap justify-center items-center sm:flex-nowrap gap-0">
          <Image src={"/Images/Pick - Up.png"} alt="" width={582} height={136} className="max-w-ful" />
          <Image src={"/Images/Switch.png"} alt="" width={60} height={60} className="sm:w-[100px] max-w-full" />
          <Image src={"/Images/Drop - Off.png"} alt="" width={582} height={132} className=' max-w-ful' />
        </section>

      
      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex justify-between items-center">
          <h1 className="text-[#90A3BF] text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563E9] font-bold hover:underline decoration-[#3563E9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className=" text-[#1A202C] w-full flex justify-between items-center">
                Koenigsegg <Image src={"/Images/heart.png"} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription className="text-[#90A3BF]">Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center gap-4">
              <Image src={"/Images/Koenigsegg.png"} alt="Koenigsegg" width={232} height={72} />
              <Image src={"/Images/Spesification.png"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex justify-between items-center">
              <p className="text-[#1A202C]">
                $99.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

         
          <Card className="text-[#1A202C] w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex justify-between items-center">
                NissanGT - R <Image src={"/Images/heart 2.png"} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription className="text-[#90A3BF]">Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center gap-4">
              <Image src={"/Images/nissan-gtr.png"} alt="Nissan-GTR" width={204} height={64} />
              <Image src={"/Images/Spesification.png"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex justify-between items-center">
            <p className="text-[#1A202C]">
                $80.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex justify-between items-center">
                Rolls-Royce <Image src={"/Images/heart.png"} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription className="text-[#90A3BF]">Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center gap-4">
              <Image src={"/Images/rolls-royce.png"} alt="Rolls-Royce" width={220} height={68} />
              <Image src={"/Images/Spesification.png"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex justify-between items-center">
            <p className="text-[#1A202C]">
                $96.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

     
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex justify-between items-center">
                NissanGT - R <Image src={"/Images/heart 2.png"} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription className="text-[#90A3BF]">Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center gap-4">
              <Image src={"/Images/nissan-gtr-silver.png"} alt="Nissan-GTR" width={204} height={64} />
              <Image src={"/Images/Spesification.png"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex justify-between items-center">
            <p className="text-[#1A202C]">
                $80.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>
        </div>
      </section>


      <section className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex justify-between items-center">
                All New Rush <Image src={"/Images/heart 2.png"} alt="Spesification" width={20} height={20} />
              </CardTitle>
              <CardDescription className="text-[#90A3BF]">SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center gap-4">
              <Image src={"/Images/rush.png"} alt="Rush" width={224} height={100} />
              <Image src={"/Images/Spesification.png"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex justify-between items-center ">
            <p className="text-[#1A202C]">
                $72.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex justify-between items-center">
                CR - V <Image src={"/Images/heart.png"} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription className="text-[#90A3BF]">SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center gap-4">
              <Image src={"/Images/cr-v.png"} alt="CR-V" width={248} height={100} />
              <Image src={"/Images/Spesification.png"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex justify-between items-center">
            <p className="text-[#1A202C]">
                $80.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex justify-between items-center">
                All New Terios <Image src={"/Images/heart 2.png"} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription className="text-[#90A3BF]">SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center gap-4">
              <Image src={"/Images/terios.png"} alt="Terios" width={224} height={100} />
              <Image src={"/Images/Spesification.png"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex justify-between items-center">
            <p className="text-[#1A202C]">
                $74.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex justify-between items-center">
                CR - V <Image src={"/Images/heart.png"} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription className="text-[#90A3BF]">SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center gap-4">
              <Image src={"/Images/cr-v-2.png"} alt="CR-V" width={248} height={100} />
              <Image src={"/Images/Spesification.png"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex justify-between items-center">
            <p className="text-[#1A202C]">
                $80.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex justify-between items-center">
                MG ZX Exclusive <Image src={"/Images/heart.png"} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription className="text-[#90A3BF]">Hatchback</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center gap-4">
              <Image src={"/Images/mg-zx.png"} alt="MG-ZX" width={264} height={108} />
              <Image src={"/Images/Spesification.png"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex justify-between items-center">
            <p className="text-[#1A202C]">
                $76.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex justify-between items-center">
                NEW MG ZS <Image src={"/Images/heart 2.png"} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription className="text-[#90A3BF]">SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center gap-4">
              <Image src={"/Images/mg-zs.png"} alt="MG-ZS" width={288} height={112} />
              <Image src={"/Images/Spesification.png"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full justify-between items-center">
            <p className="text-[#1A202C]">
                $80.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex justify-between items-center">
                MG ZX Excite <Image src={"/Images/heart.png"} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription className="text-[#90A3BF]">Hatchback</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center gap-4">
              <Image src={"/Images/mg-zx-2.png"} alt="MG-Zx" width={264} height={108} />
              <Image src={"/Images/Spesification.png"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex justify-between items-center">
            <p className="text-[#1A202C]">
                $74.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex justify-between items-center">
                New MG ZS<Image src={"/Images/heart 2.png"} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription className="text-[#90A3BF]">SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center gap-4">
              <Image src={"/Images/mg-zs-2.png"} alt="MG-ZS" width={288} height={112} />
              <Image src={"/Images/Spesification.png"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex justify-between items-center">
            <p className="text-[#1A202C]">
                $80.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="button w-full text-center">
        <Link href={"/categories"}>
          <button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}

