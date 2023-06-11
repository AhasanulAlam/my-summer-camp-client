import useAuth from "../../../hooks/useAuth";

const StudentHome = () => {
    const {user} = useAuth();
    return (
        <div className="w-full m-8">
            <h2 className="text-3xl text-center">Have a Good Day!</h2>
            <h2 className="text-3xl text-center">Welcome {user.displayName}</h2>
        </div>
    );
};

export default StudentHome;