"use client";
import CartaoProduto from "@/components/produto/CartaoProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produto";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function Home() {
	const {  } = useCarrinho();
	return (
		<Pagina>
      <div className="flex gap-5 justify-center flex-wrap">
        {produtos.map((produto) => (
          <CartaoProduto key={produto.id} produto={produto} />
        ))}
      </div>
		</Pagina>
	);
}
