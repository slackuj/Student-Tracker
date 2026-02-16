import { useEffect, useState } from "react";

interface Assignment {
    assignmentId: number;
    id: string;
    title: string;
    status: string;
    assignedDate: Date;
    deadline: Date;
    submissionDate: Date;
    completed: boolean;
    points: number;
    receivedPoints: number;
}

const useAssignments = (id: string) => {
    const [assignments, setAssignments] = useState<Assignment[]>([]);// can we use localStorage to cache assignments !? --- TRY TO HANDLE LATER !!!
    const [loading, setLoading] = useState<boolean>(false);

    const getAssignments = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://raw.githubusercontent.com/slackuj/Glaty-Fake-API-Store/main/assignments.json");
            const assignments = (await response.json() as Assignment[]).filter(assignment => assignment.id === id);
            setAssignments(assignments);
        } catch (error) {
            console.error("Error fetching assignments:", error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(()=> {
        // Fetch assignments on component mount
        getAssignments().then();
    }, [])

    return {
        assignments,
        setAssignments,
        loading
    };
}

export default useAssignments;