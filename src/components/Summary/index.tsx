import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    const summary = useSummary();

    let formattedTotalPrice = priceFormatter.format(summary.total).toString();

    if (summary.total < 0) {
        formattedTotalPrice = formattedTotalPrice.replace("-", "- ");
    }

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b57e"/>
                </header>

                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>

                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>

            <SummaryCard variant={ summary.total >= 0 ? "green" : "red"}>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>
                    {formattedTotalPrice}
                </strong>
            </SummaryCard>
        </SummaryContainer>
    );
}