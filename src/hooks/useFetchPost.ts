import { useQuery } from "@tanstack/react-query";
import { fetchPostData } from "../util/http.ts";

export function useFetchPost<T>(id?: string) {
    return useQuery<T>({
        queryKey: id ? ["posts", id] : ["posts"],
        queryFn: ({ signal }) => fetchPostData({ id , signal }),
    });
}