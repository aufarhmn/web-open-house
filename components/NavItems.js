import { useRouter } from 'next/router'

function NavItems({ children }) {
    const router = useRouter()

    return(
        <>
        <li><a className="font-light text-l py-4">{children}</a></li>
        </>
    )
}

export default NavItems;