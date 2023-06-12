import { useQuery } from "@tanstack/react-query";

const usePopularClass = () => {
    const {data: classes = [], isLoading: loading} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch(`https://my-summer-camp-server.vercel.app/popularclasses`);
            return res.json();
        }
    })
    return [classes, loading]
};

export default usePopularClass;