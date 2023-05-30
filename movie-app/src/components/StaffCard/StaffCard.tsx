import { ICast } from "../../types/cast";
import { ICrew } from "../../types/crew";
import profilePic from "../../static/profile-picture.webp";
import { IMAGE_URL } from "../../constants";

export const StaffCard = ({
  person,
  personDetails,
}: {
  person: ICrew | ICast;
  personDetails: string;
}) => {
  return (
    <div className="credits-card">
      <img
        className="credits-card-image"
        src={
          person.profile_path
            ? `${IMAGE_URL}/w185${person.profile_path}`
            : `${profilePic}`
        }
        alt={person.name}
      />
      <div className="credits-card-text">
        <p className="credits-card-name">{person.name}</p>
        <p className="person-details">{personDetails}</p>
      </div>
    </div>
  );
};
