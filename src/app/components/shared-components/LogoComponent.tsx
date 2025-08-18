import Image from 'next/image'
import Link from 'next/link'

const LogoComponent: React.FC<{path: string}> = ({path}) => {
  return (
    <Link href={path === "RG LOGO.png" ? `../` : ""}>
      <Image alt='logo' src={path === "undefined" ? '/images/logos/RG LOGO.png' : `/images/logos/${path}`} width={100} height={100} priority={true} className=' w-full h-full flex'>
      </Image>
    </Link>
  )
}

export default LogoComponent