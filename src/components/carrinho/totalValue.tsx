"use client";

import { movieStore } from "@/store/movieStore";
import formatPrice from "@/utils/formatPrice";

export default function TotalValue() {
	const getTotalValue  = movieStore((state) => state.getTotalValue);
    const totalValue = getTotalValue();

	return (
		<span>{formatPrice(totalValue)}</span>
	)
}
