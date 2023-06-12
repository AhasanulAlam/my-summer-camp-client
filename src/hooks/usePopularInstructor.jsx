import { useQuery } from '@tanstack/react-query';

const usePopularInstructor = () => {
    const {data: instructors = [], isLoading: loading} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/popularinstructors`);
            return res.json();
        }
    })
    return [instructors, loading]
};

export default usePopularInstructor;