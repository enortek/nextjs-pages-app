import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-center mt-20 text-blue-800 font-bold text-4xl">
        This is Next JS pages version
      </h1>
    </div>
  );
}
