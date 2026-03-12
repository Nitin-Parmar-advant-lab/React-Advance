import { useMutation } from "@tanstack/react-query";
import { createNewPost, queryClient } from "../util/http.ts";
import { useNavigate } from "react-router-dom";

export function useNewPost() {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: createNewPost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts"],
            });
            navigate("/");
        },
    });
}