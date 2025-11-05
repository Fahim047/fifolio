import { LOGO_IMAGE_PATH } from "@/constants";
import Image from "next/image";

export default function Logo({ size = 38 }: { size?: number }) {
  return <Image src={LOGO_IMAGE_PATH} alt="Logo" width={size} height={size} />;
}
