interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <div>{children}</div>
        </div>
    )
}