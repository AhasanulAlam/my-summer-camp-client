import { useQuery } from '@tanstack/react-query';

const usePopularInstructor = () => {
    const {data: instructors = [], isLoading: loading} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch(`https://my-summer-camp-server.vercel.app/popularinstructors`);
            return res.json();
        }
    })
    return [instructors, loading]
};

export default usePopularInstructor;