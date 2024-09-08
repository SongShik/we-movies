"use client";

import { movieStore } from "@/store/movieStore";

export default function QuantityCart() {
	const quantity = movieStore((state) => state.getTotalQuantity());

	return (
		<span>{quantity} {quantity == 1 ? 'item' : 'itens'}</span>
  )
}
