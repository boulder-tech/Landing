import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-screen h-full pt-72 pb-72 flex flex-col gap-6 items-center justify-center">
            <h1 className='line-clamp-3 text-foreground-heading text-[1.625rem] font-atyp-display font-medium leading-[120%] group-hover:underline'>Error 404 - The requested post does not exist.</h1>
            <p className="">
                <Link className="no-underline hover:underline" href="/blog">← Back to home</Link>
            </p>
        </div>
    )
}