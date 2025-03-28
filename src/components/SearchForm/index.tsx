import { memo } from "react";
import { MagnifyingGlass } from "phosphor-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useContextSelector } from "use-context-selector";
import { TransactionContext } from "../../contexts/TransactionsContexts";

import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

function SearchFormComponent() {
    const fetchTransactions = useContextSelector(TransactionContext, (context) => {
        return context.fetchTransactions;
    });

    const { 
        register, 
        handleSubmit, 
        formState: { isSubmitting } 
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query);
    }

    return (
        <div>
            <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
                <input 
                    type="text" 
                    placeholder="Busque por transações" 
                    {...register("query")}
                />

                <button type="submit" disabled={isSubmitting}>
                    <MagnifyingGlass size={20} />
                    Buscar
                </button>
            </SearchFormContainer>
        </div>
    );
}

export const SearchForm = memo(SearchFormComponent);