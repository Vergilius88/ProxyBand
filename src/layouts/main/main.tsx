
interface Props {
    children?: JSX.Element | JSX.Element[];
}

export default function Main({ children }: Props) {
    return (
        <main className="main">
            {children}
        </main>
    );
}
