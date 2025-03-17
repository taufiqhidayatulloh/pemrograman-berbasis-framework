import { renderToHTMLOrFlight } from "next/dist/server/app-render/app-render";

type FooterLinkProps = {
    text: string;
    url: string;
};

function FooterLink({ text, url }: FooterLinkProps) {
    return <a className="transition hover:text-teal-500" href={url}>{text}</a>;
}

export default function Footer() {  
    return (
        <footer className="pt-10 px-8 pb-16 border-t">
            <div className="flex justify-between gap-6">
                <div className="flex gap-6 text-sm font-medium text-zinc-600">
                    <FooterLink text="Home" url="/" />
                    <FooterLink text="Projects" url="/projects" />
                    <FooterLink text="Essays" url="/essays" />
                </div>
                <p className="text-sm text-zinc-400">&copy; 2023 Ahmad Taufiq Hidayatulloh. All rights reserved.</p>
            </div>
        </footer>
    );
}