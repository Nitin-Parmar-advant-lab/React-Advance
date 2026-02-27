import { useParams } from "react-router-dom";

export default function ProductDetailPage(id) {
    const params = useParams();
    // this params will hold all the dynaimc path segment
    return (
        <>
            <h1>Producst detials </h1>
            <p>{params.id}</p>
        </>
    );
}
