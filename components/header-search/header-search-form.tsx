import { useSearchBox  } from "react-instantsearch";

export default function HeaderSearchForm(props: any) {
    const {
        refine,
    } = useSearchBox(props);

    return (
        <form action="" role="search">
            <input
                id="header_search_input"
                className="ml-2 bg-transparent text-sm text-gray-600 dark:text-gray-300"
                placeholder="Search"
                type="search"
                onChange={(e) => refine(e.currentTarget.value)}
            />
        </form>
    )
}