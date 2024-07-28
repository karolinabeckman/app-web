'use client'
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function PaginaCarrinho() {
	const [numero, setNumero] = useState(0);
	return (
		<Pagina>
			<div>{numero}</div>
			<button onClick={() => setNumero(numero + 1)}>Adicionar</button>
			<button onClick={() => setNumero(numero - 1)}>Remover</button>
		</Pagina>
	);
}
