import type {DataRowsProps} from "./TableDataRows.tsx";
import type {Gender} from "./TableDataRows.tsx";
import profileMale from "../assets/profile-male.svg";
import profileFemale from "../assets/profile-female.svg";
import profileOther from "../assets/profile-other.svg";

interface Avatar{
    student: DataRowsProps;
}

const DEFAULT_AVATAR: Readonly<Record<Gender, string>> ={
    Male: profileMale,
    Female: profileFemale,
    Other: profileOther
};

const Avatar = ({student}: Avatar) => {

        return (
            <img
                className="avatar"
                src={student.imgURL ? student.imgURL : DEFAULT_AVATAR[student.gender]}
                alt=""
                // if imageURL fails to load
                onError= {(e) => {
                    const target = e.currentTarget;
                    target.src = DEFAULT_AVATAR[student.gender];
                    target.onerror = null;
                }}
            />
        );
    }

export default Avatar;