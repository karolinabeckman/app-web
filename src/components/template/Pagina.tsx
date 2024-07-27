import React from "react";

export interface PaginaProps {
	children: React.ReactNode;
	className?: string;
}
export default function Pagina(props: PaginaProps) {
	return <div>{props.children}</div>;
}
