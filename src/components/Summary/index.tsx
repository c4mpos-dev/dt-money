import { useContext } from "react";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { TransactionContext } from "../../contexts/TransactionsContexts";

import { SummaryCard, SummaryContainer } from "./styles";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
    const { transactions } = useContext(TransactionContext);

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === "income") {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }

            return acc;
        }, 
        { 
            income: 0, 
            outcome: 0, 
            total: 0
        }
    )

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

            <SummaryCard variant={ summary.total > 0 ? "green" : "red"}>
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